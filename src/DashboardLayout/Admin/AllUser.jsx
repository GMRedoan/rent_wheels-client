import { use, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/authContext";
import { FaUsers, FaUserCheck, FaUserSlash } from "react-icons/fa";


const AllUser = () => {
    const allUsers = useLoaderData()
    const [users, setUsers] = useState(allUsers)
    const { userInfo } = use(AuthContext)
    const [filterStatus, setFilterStatus] = useState("all")
    const [loadingUserId, setLoadingUserId] = useState(null);
    const totalUsers = allUsers.length;
    const activeUsers = allUsers.filter(u => u.status === "active").length;
    const blockedUsers = allUsers.filter(u => u.status === "blocked").length;

    const filteredUsers =
        filterStatus === "all"
            ? users
            : users.filter((user) => user.status === filterStatus)

    const handleBlock = async (id) => {
        if (userInfo?.email === users.find(u => u._id === id)?.email) {
            return Swal.fire({
                title: "Blocking is not possible",
                text: "You cannot block your own account.",
                icon: "warning",
            });
        }

        if (users.find(u => u._id === id)?.role === 'admin') {
            return Swal.fire({
                title: "Blocking is not Allowed",
                text: "You cannot block another admin.",
                icon: "error",
                confirmButtonColor: "#F91617",
            });
        }

        setLoadingUserId(id);

        try {
            const res = await fetch(
                `https://rent-wheels-server-jet.vercel.app/users/${id}`,
                {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status: 'blocked' }),
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0) {
                setUsers(prev =>
                    prev.map(user =>
                        user._id === id ? { ...user, status: "blocked" } : user
                    )
                );

                Swal.fire({
                    title: "User Blocked Successfully!",
                    icon: "success",
                    confirmButtonColor: "#67AB4F",
                });
            }
        } finally {
            setLoadingUserId(null);
        }
    };

    const handleUnblock = async (id) => {
        setLoadingUserId(id);

        try {
            const res = await fetch(
                `https://rent-wheels-server-jet.vercel.app/users/${id}`,
                {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status: 'active' }),
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0) {
                setUsers(prev =>
                    prev.map(user =>
                        user._id === id ? { ...user, status: "active" } : user
                    )
                );

                Swal.fire({
                    title: "User is Unblocked",
                    icon: "success",
                    confirmButtonColor: "#67AB4F",
                });
            }
        } finally {
            setLoadingUserId(null);
        }
    };


    return (
        <section className="p-6 md:px-22 min-h-screen bg-base-200">

            {/* PAGE HEADER */}
            <div className="my-10 animate-fade-in text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold">
                    Users <span className="text-primary">Management</span>
                </h2>
                <p className="text-accent mt-2">
                    Monitor, manage, and control all registered platform users.
                </p>
            </div>

            {/* STATS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                    {
                        title: "Total Users",
                        value: totalUsers,
                        color: "bg-blue-500",
                        icon: <FaUsers size={28} />,
                    },
                    {
                        title: "Active Users",
                        value: activeUsers,
                        color: "bg-green-500",
                        icon: <FaUserCheck size={28} />,
                    },
                    {
                        title: "Blocked Users",
                        value: blockedUsers,
                        color: "bg-red-500",
                        icon: <FaUserSlash size={28} />,
                    },
                ].map((stat, i) => (
                    <div
                        key={i}
                        className="bg-base-100 rounded-xl p-4 px-6 shadow-lg
                       hover:scale-105 transition duration-300"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-accent text-sm">{stat.title}</p>
                                <h3 className="text-4xl font-bold">
                                    {stat.value}
                                </h3>
                            </div>

                            <div
                                className={`p-2 rounded-full text-white animate-pulse ${stat.color}
                                shadow-md`}
                            >
                                {stat.icon}
                            </div>
                        </div>

                        <div className={`h-1 w-16 rounded-full ${stat.color}`} />
                    </div>
                ))}
            </div>

            {/* FILTER + TABLE */}
            <div className="bg-base-100 rounded-2xl shadow-2xl backdrop-blur-md p-6">

                {/* FILTER BAR */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <h3 className="text-xl font-semibold">
                        User List
                    </h3>

                    <select
                        className="select select-bordered w-44 hover:ring-2 hover:ring-primary transition"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="all">All Users</option>
                        <option value="active">Active</option>
                        <option value="blocked">Blocked</option>
                    </select>
                </div>

                {/* TABLE */}
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>#</th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredUsers.map((user, index) => (
                                <tr
                                    key={user._id}
                                    className="hover:bg-primary/10 transition duration-200"
                                >
                                    <td>{index + 1}</td>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-10 rounded-full ring ring-primary ring-offset-2">
                                                    <img
                                                        src={user.photoURL || userInfo?.photoURL}
                                                        alt="avatar"
                                                    />
                                                </div>
                                            </div>
                                            <span className="font-semibold">
                                                {user.name}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="text-sm text-gray-500">
                                        {user.email}
                                    </td>

                                    <td>
                                        <span
                                            className={`badge capitalize font-semibold
                                    ${user.role === "admin"
                                                    ? "badge-primary"
                                                    : "badge-info"
                                                }`}
                                        >
                                            {user.role}
                                        </span>
                                    </td>

                                    <td>
                                        <span
                                            className={`badge font-semibold
                                    ${user.status === "active"
                                                    ? "badge-success"
                                                    : "badge-error"
                                                }`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>

                                    <td className="text-center">
                                        {user.status === "active" ? (
                                            <button
                                                onClick={() => handleBlock(user._id)}
                                                disabled={loadingUserId === user._id}
                                                className="btn btn-sm bg-red-600 text-white
                                                   hover:scale-105 transition"
                                            >
                                                {loadingUserId === user._id ? (
                                                    <span className="loading loading-spinner loading-xs"></span>
                                                ) : (
                                                    "Block"
                                                )}
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleUnblock(user._id)}
                                                disabled={loadingUserId === user._id}
                                                className="btn btn-sm bg-green-500 text-white
                                                   hover:scale-105 transition"
                                            >
                                                {loadingUserId === user._id ? (
                                                    <span className="loading loading-spinner loading-xs"></span>
                                                ) : (
                                                    "Unblock"
                                                )}
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}

                            {filteredUsers.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center py-16 text-gray-400 text-lg"
                                    >
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllUser;
