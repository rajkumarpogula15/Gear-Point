import React, { useState } from "react";
import { getUserOrders,getOrders } from "../../api/api"; // Function to fetch user-specific orders

const MyOrders = () => {
  const [email, setEmail] = useState(""); // Store entered email
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    setLoading(true);
    setError("");
    setOrders([]);

    try {
            if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
              setError("Please enter a valid email address.");
              setLoading(false);
              return;
            }
            console.log(email);
            const response = await getUserOrders(email);
             // Fetch orders for this email
            //  const response=await getOrders();
            console.log(response);
            setOrders(response.data || []);
            setError("");
          } 
    catch (err) {
      console.error("Error fetching orders:", err);
      // setError("Failed to fetch orders. Please try again later.");
      setError("No Orders Placed yet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-[20vh] h-full w-[100vw] p-6 bg-transparent ml-10">
      <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>

      {/* Email Input Field */}
      <div className="flex flex-col items-center mb-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 border border-gray-300 rounded-lg w-full max-w-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={fetchOrders}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Fetch Orders
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-10">Loading orders...</div>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-center py-10 text-red-500">{error}</div>
      )}

      {/* No Orders Found */}
      {!loading && !error && orders.length === 0 && email && (
        <div className="text-center py-10 text-gray-500">No orders found.</div>
      )}

      {/* Orders List */}
      {!loading && !error && orders.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h2 className="text-lg font-bold">{order.pid}</h2>
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
