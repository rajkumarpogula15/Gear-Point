import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
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
import AdminQueries from './pages/Admin/AdminQueries';
import Review from './pages/Review';
import UserHome from './pages/FUser/UserHome';
import UserBikes from './pages/FUser/UserBikes';
import UserAccessories from './pages/Accessories';
import UserReviews from './pages/FUser/UserReviews';
import UserContact from './pages/FUser/UserContact';
import UserCart from './pages/FUser/UserCart';

import UserDashboard from './pages/FUser/UserDashboard';
import UserLayout from './layouts/UserLayout';

import WebLayout from './layouts/WebLayout';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    <ErrorBoundary>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<WebLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/bikes" element={<Bikes />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reviews" element={<Review />} />
          </Route>

          {/* User Routes with Outlet */}
          <Route path="/user" element={<UserLayout/>}>
            <Route path="/user" element={<UserHome />} />
            {/* <Route path="dashboard" element={<UserDashboard />} /> */}
            <Route path="bikes" element={<UserBikes />} />
            <Route path="reviews" element={<UserReviews />} />
            <Route path="accessories" element={<UserAccessories />} />
            {/* <Route path="contact" element={<UserContact />} /> */}
            <Route path="cart" element={<UserCart />} />
          </Route>

          {/* Admin Routes with Outlet */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="bikes" element={<AdminBikes />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="accessories" element={<AdminAccessories />} />
            <Route path="queries" element={<AdminQueries />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
