import React, { useEffect, useState } from 'react';
import { FaBox, FaUsers, FaShoppingBag } from 'react-icons/fa';
import { getProducts, getOrders, getUsers } from '../../api/api';

const AdminDashboardCards = () => {
  const [productCount, setProductCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [error, setError] = useState(null);

  // Fetch counts for products, customers, and orders
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [productRes, customerRes, orderRes] = await Promise.all([
          getProducts(),
          getUsers(),
          getOrders()
        ]);

        // Set counts based on response data lengths
        setProductCount(productRes.data.length || 0);
        setCustomerCount(customerRes.data.length || 0);
        setOrderCount(orderRes.data.length || 0);
      } catch (err) {
        console.error("Error fetching counts:", err);
        setError("Failed to load dashboard counts.");
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className='w-full h-full flex flex-row justify-center items-center gap-8 mt-10 flex-wrap'>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        [
          { icon: <FaBox className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, title: "Products", count: productCount, bgColor: "bg-blue-200" },
          { icon: <FaUsers className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, title: "Customers", count: customerCount, bgColor: "bg-green-200" },
          { icon: <FaShoppingBag className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, title: "Orders", count: orderCount, bgColor: "bg-yellow-200" },
        ].map((card, index) => (
          <div key={index} className={`h-[8rem] w-full sm:w-[48%] lg:w-[23%] ${card.bgColor} rounded-lg overflow-hidden relative group p-4 z-0 shadow-lg transition-transform duration-300 transform hover:scale-105`}>
            <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-purple-500 group-hover:scale-[800%] duration-500 z-[-1]" />
            <div className='flex h-full w-full justify-center items-center flex-row'>
              {card.icon}
              <div>
                <h1 className="z-20 font-bold font-sans group-hover:text-white duration-300 text-lg">
                  {card.title}
                </h1>
                <p className="text-2xl font-semibold group-hover:text-white duration-300">
                  {card.count}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboardCards;
