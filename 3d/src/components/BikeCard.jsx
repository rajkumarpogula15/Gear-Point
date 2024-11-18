import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import OrderPopup from "./OrderPopup";

const BikeCard = ({ name, price, brand, rating, img, id }) => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleBuyNowClick = () => {
    setShowOrderPopup(true); // Show the popup
  };
  console.log(price);
  console.log(id);
  console.log(name)
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
          onClick={handleBuyNowClick}
        >
          Buy Now
        </button>
      </div>

      {/* Order Popup */}
      {showOrderPopup && (
        <OrderPopup
          bike={{ id, price,name }}
          onClose={() => setShowOrderPopup(false)}
        />
        
      )}
      
    </motion.div>
  );
};

export default BikeCard;
