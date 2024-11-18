import { Outlet } from "react-router-dom";
import UserNavbar from '../pages/FUser/UserNavBar'
// import UserHome from "../pages/FUser/UserHome";

const UserLayout = () => {
    return (
       <>
            <UserNavbar/>
            {/* <UserHome/> */}
                {/* Main Content */}
            <div className="flex-grow bg-blue-500/20 p-0">
                <Outlet />
            </div>
       </>
                
    );
};

export default UserLayout;
