import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminLeftBar = () => {
  const navigate = useNavigate();

  const Linksdata = [
    { title: 'Dashboard', path: '/admin/dashboard' },
    { title: 'Products', path: '/admin/products' },
    { title: 'Orders', path: '/admin/orders' },          // Updated path
    { title: 'Customers', path: '/admin/customers' },    // Updated path
    { title: 'Settings', path: '/admin/settings' },      // Updated path
  ];

  // Logout Handler
  const handleLogout = () => {
    // Add any logout logic here, like clearing tokens or user data
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 shadow-xl flex justify-center items-center">
      <div className="h-full w-full flex flex-col">
        
        {/* Logo Section */}
        <div className="h-[10%] w-full text-white flex justify-center font-bold text-3xl italic items-center tracking-wide drop-shadow-lg" 
             style={{ fontFamily: "'Playfair Display', serif" }}>
          ShopEase 
        </div>
        <div className='font-bold'>
        {/* Links Section */}
        <div className="h-[80%] w-full flex flex-col items-center gap-4 mt-4">
          {Linksdata.map((link, index) => (
            <NavLink 
              to={link.path} 
              key={index} 
              className={({ isActive }) => 
                `px-6 py-2 w-[80%] text-center rounded-full transition-transform duration-200 ${
                  isActive 
                  ? 'bg-white text-purple-700 scale-105 shadow-lg' 
                  : 'text-white hover:bg-white/20 hover:text-yellow-200'
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>
          </div>
        {/* Logout Section */}
        <div className="h-[10%] w-full flex items-center justify-center">
          <button 
            onClick={handleLogout}
            className="w-[80%] py-2 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLeftBar;
