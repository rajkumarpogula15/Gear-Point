import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import App from './App';
import Bikes from './pages/Bikes';
import Accessories from './pages/Accessories';
import ContactPage from './pages/ContactPage';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Orders from './pages/Admin/Orders';
import Customers from './pages/Admin/AdminCustomers';
import AdminBikes from './pages/Admin/AdminBikes';
import AdminAccessories from './pages/Admin/AdminAccessories';
import LoadingScreen from './components/LoadingScreen';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Replace with actual authentication logic
  return isAuthenticated ? children : <Navigate to="/" />;
};

const U = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating loading screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<App />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Toaster/>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="bikes" element={<AdminBikes />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="accessories" element={<AdminAccessories />} />
        </Route>

        {/* Fallback Route */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen text-2xl font-bold">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default U;
