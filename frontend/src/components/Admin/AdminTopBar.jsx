import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const AdminTopBar = () => {
  return (
    <div className="w-full h-16 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 flex justify-between items-center px-6 shadow-lg">
      {/* Title Section */}
      <div className="font-bold text-2xl text-white italic tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
        Admin
      </div>
      
      {/* Icons Section */}
      <div className="flex items-center gap-6">
        {/* Notifications Icon */}
        <button className="text-white hover:text-yellow-200 transition duration-200">
          <FaBell size={20} />
        </button>
        
        {/* User Icon */}
        <button className="text-white hover:text-yellow-200 transition duration-200">
          <FaUserCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default AdminTopBar;
