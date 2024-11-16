import React, { useEffect, useState } from 'react';
import { FaBox, FaUsers, FaShoppingBag, FaTools, FaStar } from 'react-icons/fa';
import { getBikes, getOrders, getUsers, getAccessories } from '../../api/api';

const AdminDashboardCards = () => {
  const [bikeCount, setBikeCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [accessoryCount, setAccessoryCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [bikeRes, customerRes, orderRes, accessoryRes] = await Promise.all([
          getBikes(),
          getUsers(),
          getOrders(),
          getAccessories(),
        ]);

        setBikeCount(bikeRes.data.length || 0);
        setCustomerCount(customerRes.data.length || 0);
        setOrderCount(orderRes.data.length || 0);
        setAccessoryCount(accessoryRes.data.length || 0);

        const totalReviews = bikeRes.data.reduce((sum, bike) => sum + (bike.reviews?.length || 0), 0);
        setReviewCount(totalReviews || 0);
      } catch (err) {
        console.error("Error fetching counts:", err);
        setError("Failed to load dashboard counts.");
      }
    };

    fetchCounts();
  }, []);

  const cards = [
    {
      icon: <FaBox className="text-blue-500" />,
      title: "Bikes",
      count: bikeCount,
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
    },
    {
      icon: <FaUsers className="text-green-500" />,
      title: "Customers",
      count: customerCount,
      bgColor: "bg-green-100",
      textColor: "text-green-700",
    },
    {
      icon: <FaShoppingBag className="text-yellow-500" />,
      title: "Orders",
      count: orderCount,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
    },
    {
      icon: <FaTools className="text-red-500" />,
      title: "Accessories",
      count: accessoryCount,
      bgColor: "bg-red-100",
      textColor: "text-red-700",
    },
    {
      icon: <FaStar className="text-purple-500" />,
      title: "Reviews",
      count: reviewCount,
      bgColor: "bg-purple-100",
      textColor: "text-purple-700",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="flex flex-col gap-6 items-center">
          {/* Row 1: 3 cards */}
          <div className="flex justify-center gap-6">
            {cards.slice(0, 3).map((card, index) => (
              <div
                key={index}
                className={`h-40 w-40 p-6 rounded-lg shadow-md flex flex-col items-center justify-center ${card.bgColor} transition-transform transform hover:scale-105`}
              >
                <div className="flex items-center justify-center mb-2 text-3xl">
                  {card.icon}
                </div>
                <h3 className={`text-md font-semibold ${card.textColor}`}>
                  {card.title}
                </h3>
                <p className={`text-2xl font-bold ${card.textColor}`}>{card.count}</p>
              </div>
            ))}
          </div>

          {/* Row 2: 2 cards */}
          <div className="flex justify-center gap-6">
            {cards.slice(3, 5).map((card, index) => (
              <div
                key={index}
                className={`h-40 w-40 p-6 rounded-lg shadow-md flex flex-col items-center justify-center ${card.bgColor} transition-transform transform hover:scale-105`}
              >
                <div className="flex items-center justify-center mb-2 text-3xl">
                  {card.icon}
                </div>
                <h3 className={`text-md font-semibold ${card.textColor}`}>
                  {card.title}
                </h3>
                <p className={`text-2xl font-bold ${card.textColor}`}>{card.count}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardCards;
