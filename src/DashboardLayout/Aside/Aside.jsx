import { NavLink, Link, useNavigate } from "react-router";
import { FaHome, FaUser, FaSignOutAlt, FaUsers } from "react-icons/fa";
import { LuGitPullRequestDraft } from "react-icons/lu";
import { IoCreateOutline, IoDocuments } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { MdDashboard } from "react-icons/md";
import { use } from "react";
import Swal from "sweetalert2";

import logo from "/logo.png";
import { AuthContext } from "../../provider/authContext";
import Theme from "../../Shared/Theme";

const Aside = ({ openSidebar, setOpenSidebar }) => {
    const { logout, userInfo } = use(AuthContext);
    const navigate = useNavigate();


    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    title: "You Logged Out Successfully",
                    icon: "success",
                    confirmButtonColor: "#67AB4F",
                });
                navigate("/");
            })
            .catch(console.log);
    }

    const UserMenuItems = [
        { path: "/dashboard", label: "Dashboard", icon: <MdDashboard /> },
        { path: "/dashboard/profile", label: "My Profile", icon: <FaUser /> },
        { path: "/dashboard/myListing", label: "My Listing", icon: <LuGitPullRequestDraft /> },
        { path: "/dashboard/create-donation-request", label: "Create Donation Req", icon: <IoCreateOutline /> },
    ]

    const AdminMenuItems = [
        { path: "/dashboard", label: "Dashboard", icon: <MdDashboard /> },
        { path: "/dashboard/profile", label: "My Profile", icon: <FaUser /> },
        { path: "/dashboard/all-users", label: "All Users", icon: <FaUsers /> },
        { path: "/dashboard/all-bookings", label: "Bookings", icon: <IoDocuments /> },
    ]



    const menuItems =
        userInfo?.role === 'admin' ? AdminMenuItems : UserMenuItems
    return (
        <>
            {openSidebar && (
                <div
                    className="fixed inset-0 bg-opacity-40 z-40"
                    onClick={() => setOpenSidebar(false)}
                />
            )}

            <aside
                className={`fixed top-0 left-0 z-50 h-full w-70 bg-base-200 shadow-2xl p-5
                transform transition-transform duration-300
                ${openSidebar ? "translate-x-0" : "-translate-x-full"}`}
            >
                <button
                    className="text-xl mb-4"
                    onClick={() => setOpenSidebar(false)}
                >
                    <ImCross className="text-primary" />
                </button>

                <Link to="/" className="flex justify-center">
                    <img src={logo} alt="Logo" className="w-20 md:w-28" />
                </Link>
                <div className="flex justify-center mt-2">
                    <Theme></Theme>
                </div>
                <div className="">
                    <h2 className="text-xl md:text-3xl font-bold my-4 text-center">
                        <span className="text-primary capitalize">
                            {userInfo?.role}
                        </span>{" "}
                        Dashboard
                    </h2>

                </div>
                <ul className="menu gap-2">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                end={item.path === "/dashboard"}
                                onClick={() => setOpenSidebar(false)}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 font-medium py-2 px-4 rounded-md
                                    ${isActive
                                        ? "bg-primary text-white"
                                        : "hover:bg-base-300"}`
                                }
                            >
                                <span className="text-lg">{item.icon}</span>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}

                    <li className="mt-100 md:mt-50">
                        <Link
                            to="/"
                            className="flex items-center gap-3 py-2 px-4 rounded-md text-primary font-semibold hover:bg-base-200"
                        >
                            <FaHome className="text-lg" />
                            Home
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 py-2 px-4 rounded-md text-primary font-semibold hover:bg-base-200 w-full text-left"
                        >
                            <FaSignOutAlt />
                            Log Out
                        </button>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default Aside;
