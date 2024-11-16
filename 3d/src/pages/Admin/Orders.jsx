import React, { useEffect, useState } from 'react';
import {Ban} from 'lucide-react';
import { getOrders } from '../../api/api';

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
    <div className="w-full h-full flex flex-col justify-start items-center p-8 bg-gradient-to-b from-gray-100 via-white to-gray-50 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Order Management</h1>
      <table className="w-full border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-purple-600 text-white text-left">
          <tr>
            <th className="p-4">Order ID</th>
            <th className="p-4">User ID</th>
            <th className="p-4">Total</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <td colSpan="4" className="p-6 text-center text-red-500">{error}</td>
            </tr>
          ) : orders.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-6 text-center text-gray-500">No Orders Available</td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr key={order._id} className="hover:bg-purple-50 transition-colors">
                <td className="p-4 border-t border-gray-200">{order._id}</td>
                <td className="p-4 border-t border-gray-200">{order.uid}</td>
                <td className="p-4 border-t border-gray-200">${order.total}</td>
                <td className="p-4 border-t border-gray-200 flex justify-center gap-4">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200">
                  <Ban />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
