import { use } from "react";
import {
  FaUsers,
  FaCar,
  FaClipboardList,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { AuthContext } from "../../provider/authContext";

const AdminDashboard = ({ users, allCar, allBook }) => {
    const {userInfo} = use(AuthContext)
  const stats = [
    {
      title: "Total Users",
      value: users.length,
      icon: <FaUsers size={28} />,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Total Cars",
      value: allCar.length,
      icon: <FaCar size={28} />,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Total Bookings",
      value: allBook.length,
      icon: <FaClipboardList size={28} />,
      color: "from-purple-500 to-purple-700",
    },
  ];

  const barData = [
    { name: "Users", value: users.length },
    { name: "Cars", value: allCar.length },
    { name: "Bookings", value: allBook.length },
  ];

  const pieColors = ["#3B82F6", "#22C55E", "#A855F7"];

  return (
    <section className="p-6 md:px-14 bg-base-100">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl capitalize font-extrabold">
           <span className="text-primary">{userInfo.role}</span> Dashboard 
        </h1>
        <p className="text-accent mt-2 max-w-2xl mx-auto">
          Overview of platform activity including users, cars, and bookings.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-base-200 rounded-xl shadow-lg p-6 flex items-center justify-between transform transition duration-300 hover:scale-[1.04]"
          >
            <div>
              <p>{stat.title}</p>
              <h2 className="text-4xl font-bold text-primary">
                {stat.value}
              </h2>
            </div>

            <div
              className={`p-4 rounded-full text-white bg-linear-to-r ${stat.color}`}
            >
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-base-200 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">
            Platform Statistics
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-base-200 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">
            Data Distribution
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={barData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {barData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={pieColors[index % pieColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
