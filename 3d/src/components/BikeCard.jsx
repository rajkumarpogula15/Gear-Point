// import { IndianRupee, Star } from 'lucide-react';
// import React from 'react';

// const BikeCard = ({ img, price, name, brand, rating }) => {
//     return (
//         // <div className="relative flex w-[24%] flex-col rounded-xl bg-blue-100  bg-clip-border text-gray-700 shadow-md">
//         //     {/* Bike Image */}
//         //     <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-white text-white shadow-lg shadow-blue-gray-500/40">
//         //         <img src={img} alt={name} className="w-full h-full object-contain" />
//         //     </div>

//         //     {/* Bike Details */}
//         //     <div className="p-6">
//         //         {/* Bike Name */} 
//         //         <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//         //             {name}
//         //         </h5>

//         //         {/* Brand */}
//         //         <p className="font-sans text-sm text-gray-500 antialiased mb-2">
//         //             Brand: <span className="text-gray-700 font-medium">{brand}</span>
//         //         </p>

//         //         {/* Price */}
//         //         <p className="font-sans leading-relaxed text-inherit antialiased font-bold flex flex-row text-xl items-center mb-2">
//         //             <IndianRupee className="h-5 w-5" /> {price}
//         //         </p>

//         //         {/* Rating */}
//         //         <div className="flex items-center text-yellow-500 text-sm">
//         //             {Array.from({ length: 5 }, (_, i) => (
//         //                 <Star
//         //                     key={i}
//         //                     className={`h-5 w-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`}
//         //                 />
//         //             ))}
//         //             <span className="ml-2 text-gray-600">({rating})</span>
//         //         </div>
//         //     </div>

//         //     {/* Buy Now Button */}
//         //     <div className="p-6 pt-0 w-full">
//         //         <button
//         //             data-ripple-light="true"
//         //             type="button"
//         //             className="w-full select-none rounded-lg bg-purple-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         //         >
//         //             Buy Now
//         //         </button>
//         //     </div>
//         // </div>
//     );
// };

// export default BikeCard;

// import React from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../utils/motion";
// import { LoginModal, RegisterModal } from "../components/loginregister.jsx";

// const BikeCard = ({ name, price, brand, rating, img }) => {
//   return (
//     <motion.div
//       variants={fadeIn("up", "spring", 0.5, 0.75)}
//       className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-transform duration-300 hover:scale-105"
//     >
//       <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
//         <img
//           src={img}
//           alt={name}
//           className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//         />
//       </div>

//       <div className="mt-5">
//         <h3 className="text-white font-bold text-[24px]">{name}</h3>
//         <p className="mt-2 text-secondary text-[14px]">Brand: {brand}</p>
//         <p className="mt-2 text-secondary text-[14px]">Price: ${price}</p>
//         <p className="mt-2 text-secondary text-[14px]">Rating: {rating}⭐</p>
//       </div>

//       {/* Buy Now Button */}
//       <div className="mt-5 flex justify-center">
//         <button
//           className="bg-primary text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-110"
//           onClick={} // You can replace this with actual functionality
//         >
//           Buy Now
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default BikeCard;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { LoginModal, RegisterModal } from "../components/loginregister.jsx";

const BikeCard = ({ name, price, brand, rating, img }) => {
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

export default BikeCard;


