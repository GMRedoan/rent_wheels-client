import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../provider/authContext";
import { FaCar, FaClipboardList, FaChartPie } from "react-icons/fa";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const UserDashboard = () => {
  const { user } = use(AuthContext);
  const [list, setList] = useState([]);
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(
      `https://rent-wheels-server-jet.vercel.app/cars?providerEmail=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setList(data));
  }, [user?.email]);

  useEffect(() => {
    fetch(
      `https://rent-wheels-server-jet.vercel.app/books?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [user?.email]);

  const stats = [
    {
      title: "My Listed Cars",
      value: list.length,
      icon: <FaCar size={26} />,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "My Bookings",
      value: book.length,
      icon: <FaClipboardList size={26} />,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Activity Score",
      value: list.length + book.length,
      icon: <FaChartPie size={26} />,
      color: "from-purple-500 to-purple-700",
    },
  ];

  const barData = [
    { name: "Listed Cars", value: list.length },
    { name: "Bookings", value: book.length },
  ];

  const pieColors = ["#3B82F6", "#22C55E"];

  return (
    <section className="min-h-screen p-6 md:p-8 bg-base-100">

      {/* HEADER */}
      <div className="mb-10 animate-fade-in text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          User <span className="text-primary">Dashboard</span>
        </h1>
        <p className="text-accent mt-2">
          Track your car listings, bookings, and overall activity at a glance.
        </p>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:px-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-base-200 rounded-xl shadow-lg p-6
                       hover:scale-[1.03] transition duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <p>{stat.title}</p>
                <h2 className="text-4xl font-bold mt-1">{stat.value}</h2>
              </div>

              <div
                className={`p-4 rounded-full text-white bg-linear-to-r ${stat.color}`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-16">

        {/* BAR CHART */}
        <div className="bg-base-200 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">
            Listings vs Bookings
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#3B82F6"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PIE CHART */}
        <div className="bg-base-200 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">
            Activity Distribution
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

export default UserDashboard;
