import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { LoginModal, RegisterModal } from "../components/loginregister.jsx";

const HomeProducts = ({ name, price, brand, rating, img }) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleBuyNowClick = () => {
    setShowLogin(true); // Show the login modal
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-transform duration-300 hover:scale-105"
    >
      <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">Brand: {brand}</p>
        <p className="mt-2 text-secondary text-[14px]">Price: ${price}</p>
        <p className="mt-2 text-secondary text-[14px]">Rating: {rating}⭐</p>
      </div>

      {/* Buy Now Button */}
      <div className="mt-5 flex justify-center">
        <button
          className="bg-primary text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-110"
          onClick={handleBuyNowClick} // Trigger login modal on click
        >
          Buy Now
        </button>
      </div>

      {/* Display Login Modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </motion.div>
  );
};

export default HomeProducts;