
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Bikes from './pages/Bikes';
import LoadingScreen from './components/LoadingScreen';

// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';

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
            <Route path="/" element={<App />} />
            <Route path="/bikes" element={<Bikes />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
    </Router>
  );
};

export default U;
