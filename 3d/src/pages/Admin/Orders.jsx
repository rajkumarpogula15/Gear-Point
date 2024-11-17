import React, { useEffect, useState } from "react";
import { Ban } from "lucide-react";
import { getOrders } from "../../api/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  // Fetch orders data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOrders();
        if (res.status === 200) {
          setOrders(Array.isArray(res.data) ? res.data : []);
        } else {
          setError("Failed to load orders.");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("An error occurred while fetching orders.");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Order Management</h1>
      <div className="w-full overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-gray-800 text-white text-left">
            <tr>
              <th className="p-4 text-sm font-medium uppercase tracking-wide">Order ID</th>
              <th className="p-4 text-sm font-medium uppercase tracking-wide">User ID</th>
              <th className="p-4 text-sm font-medium uppercase tracking-wide">Total</th>
              <th className="p-4 text-sm font-medium uppercase tracking-wide text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <tr>
                <td colSpan="4" className="p-6 text-center text-red-600 font-semibold">
                  {error}
                </td>
              </tr>
            ) : orders.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-6 text-center text-gray-500">
                  No Orders Available
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="hover:bg-gray-100 transition-colors duration-150"
                >
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm">
                    {order._id}
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm">
                    {order.uid}
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-700 text-sm font-bold">
                    ${order.total}
                  </td>
                  <td className="p-4 border-t border-gray-200 flex justify-center">
                    <button
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-transform duration-200 transform hover:scale-105"
                      title="Cancel Order"
                    >
                      <Ban />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
