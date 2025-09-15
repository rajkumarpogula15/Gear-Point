import React, { useState, useEffect } from "react";
import { getUserOrders } from "../../api/api";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    console.log("Fetching orders..."); // 🔹 Debug line
    setLoading(true);
    setError("");
    setOrders([]);

    try {
      const response = await getUserOrders(); // No email needed
      console.log("API response:", response); // 🔹 Debug API response
      setOrders(response.data || []);
      console.log("Orders state updated:", response.data); // 🔹 Debug state update
    } catch (err) {
      console.error("Error fetching orders:", err); // 🔹 Debug error
      setError("Failed to fetch orders. Please log in again.");
    } finally {
      setLoading(false);
      console.log("Loading finished"); // 🔹 Debug line
    }
  };

  useEffect(() => {
    console.log("MyOrders component mounted"); // 🔹 Debug line
    fetchOrders();
  }, []);

  return (
    <div className="container mt-[20vh] h-full w-[100vw] p-6 bg-transparent ml-10">
      <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>

      {loading && <div className="text-center py-10">Loading orders...</div>}
      {error && <div className="text-center py-10 text-red-500">{error}</div>}

      {!loading && !error && orders.length === 0 && (
        <div className="text-center py-10 text-gray-500">No orders found.</div>
      )}

      {!loading && !error && orders.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h2 className="text-lg font-bold">Product ID: {order.pid}</h2>
              <p className="text-gray-700">Price: ₹{order.price}</p>
              <p className="text-gray-700">Phone: {order.phone}</p>
              <p className="text-gray-700">Address: {order.address}</p>
              <p className="text-gray-500 text-sm">
                Ordered At: {new Date(order.orderedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
