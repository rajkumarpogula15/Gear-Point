import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login, Register } from "../api/api";
import login from "./login.jpg";

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await Login({ email, password });
    console.log("Login Response:", response.data); // 👈 Debug here

    if (response.status === 200 && response.data?.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login successful!");
      onClose();
      navigate("/user");
    } else {
      setError(response.data?.message || "Invalid credentials");
    }
  } catch (err) {
    console.error("Login Error:", err);
    setError(err.response?.data?.message || "An error occurred. Please try again.");
  }
};


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-3xl font-semibold text-gray-700">Login</h2>
        <p className="mt-2 text-gray-600">Sign in to your account</p>
        <form onSubmit={handleLogin} className="mt-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-4 border rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mt-4 border rounded-lg"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="mt-6 flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 pt-3 pl-3 hover:underline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-[200px] mt-5 mr-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const RegisterModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, phone, password } = formData;
    if (!name || !email || !phone || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await Register(formData);
      if (response.status === 200) {
        alert("Registration successful!");
        onClose();
      } else {
        setError(response.data?.message || "Registration failed!");
      }
    } catch (err) {
      console.error("Registration Error:", err);
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100 z-30">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden flex">
        <div
          className="w-full md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${login})` }}
        >
          <div className="p-10 bg-black bg-opacity-50 h-full flex flex-col justify-center text-center">
            <h1 className="text-3xl font-bold text-white">GearPoint</h1>
            <p className="text-white text-1xl mt-4">Where Every Ride Begins</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-3xl font-semibold text-gray-700">Register</h2>
          <p className="mt-2 text-gray-600">
            Create your account. It's free and only takes a minute.
          </p>
          <form onSubmit={handleRegister} className="mt-6">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 mt-3 h-10 border rounded-md focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border mt-2 h-10 rounded-md focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border mt-2 h-10 rounded-md focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-2 border mt-2 h-10 rounded-md focus:outline-none"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="mt-6 flex justify-between items-center">
              <button
                type="button"
                onClick={onClose}
                className="text-gray-500 pt-3 pl-3 hover:underline"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { LoginModal, RegisterModal };
