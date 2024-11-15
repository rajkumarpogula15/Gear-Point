import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Bikes from './pages/Bikes'; // Replacing Products with Bikes
import WebLayout from './layouts/WebLayout';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Orders from './pages/Admin/Orders';
import Customers from './pages/Admin/AdminCustomers';
import Settings from './pages/Admin/AdminSettings';
import AdminBikes from './pages/Admin/AdminBikes'; // Updated AdminProducts to AdminBikes
import LoadingScreen from './components/LoadingScreen';



const App = () => {
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
        <Route element={<WebLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<Bikes />} /> {/* Updated to use Bikes */}
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/bikes" element={<AdminBikes />} /> {/* Updated to AdminBikes */}
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
