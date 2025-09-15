import React, { useState, useEffect } from "react";
import { addOrder } from "../api/api";

const OrderPopup = ({ bike, onClose }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")); // user saved during login

  const [formData, setFormData] = useState({
    phone: "",
    address: "",
    price: bike.price,
    pid: bike._id || bike.id, // ✅ Use _id if available
    name: bike.name,
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const validateInput = () => {
    if (!formData.phone || !formData.address) {
      setError("Phone and address are required.");
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Phone must be 10 digits.");
      return false;
    }
    return true;
  };

  const handleOrder = async () => {
    if (!validateInput()) return;

    try {
      console.log("Sending Order Data:", formData);

      const response = await addOrder(formData, token); // ✅ Now token is passed in api.js
      if (response.status === 201) {
        alert("Order placed successfully!");
        onClose();
      } else {
        setError(response.data?.message || "Failed to place order.");
      }
    } catch (err) {
      console.error("Order Submission Error:", err);
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Place Your Order
        </h2>
        <h3 className="text-black text-lg text-center font-semibold opacity-85 mb-4">
          {formData.name}
        </h3>

        <div className="space-y-4">
          {/* ✅ Removed email field, not required now */}
          <input
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleOrder}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;
