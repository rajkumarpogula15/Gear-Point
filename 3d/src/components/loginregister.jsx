
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login,Register} from "../api/api";  // Assuming Register is in api
import login from './login.jpg'

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const openLogin = () => setIsLoginOpen(true);
  const openRegister = () => setIsLoginOpen(false);

  const handleLogin = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior
    try {
      const response = await Login({ email, password });
      if (response.status === 200) {
        alert("Login successful!");
        onClose();
        navigate("/user");
      } else {
        setError(response.message || "Login failed!");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("An error occurred. Please try again.");
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
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mt-4 border rounded-lg"
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
        <p className="mt-4 text-gray-600 text-center">
          Don't have an account?{" "}
          <button onClick={openRegister} className="text-purple-500 underline">
            Register here
          </button>
        </p>
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
    e.preventDefault(); // Prevent default form submission behavior

    // Check if all fields are filled
    const { name, email, phone, password } = formData;
    if (!name || !email || !phone || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      console.log(formData);
      const response = await Register(formData);
      console.log(response);
      if (response.status === 200) {
        alert("Registration successful!");
        onClose();
      } else {
        setError(err.response?.data?.message || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Registration Error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100 z-30">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden flex">
        {/* Left Section */}
        <div
          className="w-full md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:`url(${login})`,
          }}
        >
          <div className="p-10 bg-black bg-opacity-50 h-full flex flex-col justify-center text-center">
            <h1 className="text-3xl font-bold text-white">GearPoint</h1>
            <p className="text-white text-1xl mt-4">
              Where Every Ride Beigns
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-3xl font-semibold text-gray-700">Register</h2>
          <p className="mt-2 text-gray-600">Create your account. It's free and only takes a minute.</p>
          {/* <form onSubmit={handleRegister} className="mt-6"> */}
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 mt-3 h-10 border rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 border mt-2 h-10 rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-2 border mt-2 h-10 rounded-md focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full px-4 py-2 border mt-2 h-10 rounded-md focus:outline-none"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="mt-4 pl-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm text-gray-600">
                  I accept the <a href="/" className="text-purple-500">Terms of Use</a> & <a href="/" className="text-purple-500">Privacy Policy</a>
                </span>
              </label>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button
                type="button"
                onClick={onClose}
                className="text-gray-500 pt-3 pl-3 hover:underline"
              >
                Cancel
              </button>
              <button
                onClick={handleRegister}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Register
              </button>
            </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export { LoginModal, RegisterModal };

