import { use } from "react";
import { AuthContext } from "../../provider/authContext";
import UserDashBoard from "../User/UserDashboard";
import AdminDashBoard from "../Admin/AdminDashboard";
import { useLoaderData } from "react-router";
  

const allCarPromise = fetch("https://rent-wheels-server-jet.vercel.app/cars")
.then(res => res.json())

const allBookPromise = fetch("https://rent-wheels-server-jet.vercel.app/books")
.then(res => res.json())


 const DashBoard = () => {
    const users = useLoaderData()
    const allCar = use(allCarPromise)
    const allBook = use(allBookPromise)
    const { userInfo } = use(AuthContext);
  
    return (
        <div className="p-4 pt-14 min-h-screen">
            <title>Dashboard</title>
            {
                userInfo?.role == 'user' && <UserDashBoard></UserDashBoard>
            }
            {
                userInfo?.role == 'admin' && <AdminDashBoard users={users} allCar={allCar} allBook={allBook}></AdminDashBoard>
            }
         </div>
    );
};

export default DashBoard;
