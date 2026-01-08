import { use } from "react";
import { AuthContext } from "../../provider/authContext";
import UserDashBoard from "../User/UserDashboard";
import AdminDashBoard from "../Admin/AdminDashboard";
  
 const DashBoard = () => {
    const { userInfo } = use(AuthContext);
  
    return (
        <div className="p-4 pt-14 min-h-screen">
            <title>Dashboard</title>
            {
                userInfo?.role == 'user' && <UserDashBoard></UserDashBoard>
            }
            {
                userInfo?.role == 'admin' && <AdminDashBoard></AdminDashBoard>
            }
         </div>
    );
};

export default DashBoard;
