import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingScreen from "./components/LoadingScreen";

// Public Pages
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import Accessories from "./pages/Accessories";
import ContactPage from "./pages/ContactPage";
import Review from "./pages/Review";

// User Pages & Layout
import UserLayout from "./layouts/UserLayout";
import UserHome from "./pages/FUser/UserHome";
import UserBikes from "./pages/FUser/UserBikes";
import UserAccessories from "./pages/FUser/UserAccessories";
import UserReviews from "./pages/FUser/UserReviews";
import MyOrders from "./pages/FUser/MyOrders";

// Admin Pages & Layout
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Orders from "./pages/Admin/Orders";
import Customers from "./pages/Admin/AdminCustomers";
import AdminBikes from "./pages/Admin/AdminBikes";
import AdminAccessories from "./pages/Admin/AdminAccessories";
import AdminQueries from "./pages/Admin/AdminQueries";

// Web Layout for public pages
import WebLayout from "./layouts/WebLayout";

/** ProtectedRoute Component **/
const ProtectedRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  // Not logged in → redirect to login page
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // Role-based access check
  if (allowedRole && user.role !== allowedRole) {
    // Redirect unauthorized role to their default dashboard
    return <Navigate to={user.role === "admin" ? "/admin/dashboard" : "/user"} replace />;
  }

  return children;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simple loader for 1 second
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <ErrorBoundary>
      <Routes>
        {/* ---------------- Public Routes ---------------- */}
        <Route path="/" element={<WebLayout />}>
          <Route index element={<Home />} />
          <Route path="bikes" element={<Bikes />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="reviews" element={<Review />} />
        </Route>

        {/* ---------------- User Protected Routes ---------------- */}
        <Route
          path="/user/*"
          element={
            <ProtectedRoute allowedRole="user">
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<UserHome />} />
          <Route path="bikes" element={<UserBikes />} />
          <Route path="accessories" element={<UserAccessories />} />
          <Route path="reviews" element={<UserReviews />} />
          <Route path="myorders" element={<MyOrders />} />
        </Route>

        {/* ---------------- Admin Protected Routes ---------------- */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="bikes" element={<AdminBikes />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="accessories" element={<AdminAccessories />} />
          <Route path="queries" element={<AdminQueries />} />
        </Route>

        {/* ---------------- Fallback Route ---------------- */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
