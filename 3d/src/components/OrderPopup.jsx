import React, { useState ,useEffect} from "react";
import { addOrder } from "../api/api";

const OrderPopup = ({ bike, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
    password: "",
    price: bike.price,
    id: bike.id,
    name:bike.name
  });

  const [error, setError] = useState("");
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null); // Clear the error after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // Cleanup timeout if the component unmounts or error changes
    }
  }, [error]);

  const handleSubmit = async () => {
    // Validate required fields
    if (
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.password
    ) {
      setError("All fields are required.");
      return;
    }

    try {
      // Mock API request
      console.log("Order Data Submitted:", formData);
      alert("Order placed successfully!");
      onClose();
    } catch (err) {
      console.error("Order Submission Error:", err);
      setError("Failed to place order. Please try again.");
    }
  };
  const handleOrder = async () => {
    try {
      // Validate required fields
     
      if (!formData.email || !formData.phone || !formData.address ||!formData.id || !formData.password || !formData.price) {
        setError("All fields are required.");
        return;
      }
      // Make API request to submit the order
      // --------------------------------------------
      const response = await addOrder(formData);
      console.log(response);
      // const result = await JSON.stringify(response);
      // console.log(result); 
      // console.log(result.status);
      if (response.status === 201) {
        setError(" ");
        alert("Order placed successfully!");
        
        onClose(); // Close the popup
      } else {
        setError( response.data?.message ||"Failed to place order. Please try again.");
        
      }
    } catch (err) {
      console.error("Order Submission Error:", err);
      setError( err.response?.data?.message ||"An error occurred. Please try again.");
      
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
        <h3 className="text-black text-lg flex flex-row justify-center pb-5 mt-[-10px] font-bold opacity-85">{`${formData.name}`}</h3>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-[-10px]"
          />
          <input
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
