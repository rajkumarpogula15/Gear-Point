import { Outlet } from "react-router-dom";
import AdminLeftBar from "../components/Admin/AdminLeftBar";
import AdminTopBar from "../components/Admin/AdminTopBar";

const AdminLayout = () => {
    return (
        <div className="w-screen min-h-screen flex flex-row">
            {/* Left Sidebar */}
            <div className="w-[18vw] min-h-screen bg-gray-100">
                <AdminLeftBar />
            </div>
            
            {/* Main Content Area */}
            <div className="w-[82vw] flex flex-col">
                {/* Top Bar */}
                <div className="h-[3rem] bg-white shadow-md flex items-center">
                    <AdminTopBar />
                </div>
                
                {/* Main Content */}
                <div className="flex-grow bg-blue-500/20 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
