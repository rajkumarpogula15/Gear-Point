import { Outlet } from "react-router-dom";
import UserNavbar from '../pages/FUser/UserNavBar'

const UserLayout = () => {
    return (
       <>
            <UserNavbar/>
                {/* Main Content */}
            <div className="flex-grow bg-blue-500/20 p-4">
                <Outlet />
            </div>
       </>
                
    );
};

export default UserLayout;
