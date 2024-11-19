import React, { useEffect, useState } from 'react';
import { FaBiking, FaUsers, FaShoppingBag, FaTools, FaStar } from 'react-icons/fa';
import { getBikes, getOrders, getUsers, getAccessories } from '../../api/api';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const AdminDashboardCards = () => {
  const [bikeCount, setBikeCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [accessoryCount, setAccessoryCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [error, setError] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [graphData, setGraphData] = useState(null);

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

  const generateGraphData = (totalCount, label) => {
    const months = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
    const data = Array(12).fill(0);
    let remainingCount = totalCount;

    for (let i = 0; i < 12; i++) {
      if (i === 11) {
        data[i] = remainingCount;
      } else {
        const randomValue = Math.floor(Math.random() * (remainingCount / 2));
        data[i] = randomValue;
        remainingCount -= randomValue;
      }
    }

    return {
      labels: months,
      datasets: [
        {
          label,
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.6)', // Light teal for background
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  const cards = [
    {
      icon: <FaBiking className="text-gray-50 drop-shadow-lg" />,
      title: "Bikes",
      count: bikeCount,
      bgColor: "bg-gray-700",
      textColor: "text-gray-50 font-bold drop-shadow-lg",
      label: "Bikes Sold",
    },
    {
      icon: <FaUsers className="text-white" />,
      title: "Customers",
      count: customerCount,
      bgColor: "bg-gray-700",
      textColor: "text-white ",
      label: "New Customers",
    },
    {
      icon: <FaShoppingBag className="text-white" />,
      title: "Orders",
      count: orderCount,
      bgColor: "bg-gray-700",
      textColor: "text-white",
      label: "Orders Per Month",
    },
    {
      icon: <FaTools className="text-white" />,
      title: "Accessories",
      count: accessoryCount,
      bgColor: "bg-gray-700",
      textColor: "text-white",
      label: "Accessories Sold",
    },
    {
      icon: <FaStar className="text-white" />,
      title: "Reviews",
      count: reviewCount,
      bgColor: "bg-gray-700",
      textColor: "text-white",
      label: "New Reviews",
    },
  ];

  const handleCardClick = (card) => {
    setGraphData(generateGraphData(card.count, card.label));
    setSelectedCard(card);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="flex flex-col gap-6 items-center">
          {/* Row 1: 3 cards */}
          <div className="flex justify-center gap-6">
            {cards.slice(0, 3).map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(card)}
                className={`h-40 w-40 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center ${card.bgColor} cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex items-center justify-center mb-2 text-3xl">{card.icon}</div>
                <h3 className={`text-md font-semibold ${card.textColor}`}>{card.title}</h3>
                <p className={`text-2xl font-bold ${card.textColor}`}>{card.count}</p>
              </div>
            ))}
          </div>

          {/* Row 2: 2 cards */}
          <div className="flex justify-center gap-6">
            {cards.slice(3, 5).map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(card)}
                className={`h-40 w-40 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center ${card.bgColor} cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex items-center justify-center mb-2 text-3xl">{card.icon}</div>
                <h3 className={`text-md font-semibold ${card.textColor}`}>{card.title}</h3>
                <p className={`text-2xl font-bold ${card.textColor}`}>{card.count}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedCard && graphData && (
        <Modal open={isModalOpen} onClose={() => setModalOpen(false)} center classNames={{ overlay: 'bg-opacity-50 bg-black' }}>
          <h2 className="font-serif text-2xl text-black mb-4 text-center ">{selectedCard.title} Statistics</h2>
          <div className="w-full h-80">
            <Bar
              data={graphData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Months',
                      font: {
                        size: 14,
                        weight: 'bold',
                      },
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Count',
                      font: {
                        size: 14,
                        weight: 'bold',
                      },
                    },
                    beginAtZero: true,
                    ticks: {
                      stepSize: 1,
                    },
                  },
                },
                plugins: {
                  legend: {
                    labels: {
                      font: {
                        size: 14,
                      },
                    },
                  },
                  tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                  },
                },
              }}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AdminDashboardCards;
