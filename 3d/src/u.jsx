import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Bikes from './pages/Bikes';
// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';

const U = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/bikes" element={<Bikes />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
    </Router>
    
  );
}

export default U;
