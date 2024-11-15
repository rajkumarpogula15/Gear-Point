import React, { useState, useEffect } from 'react';

const HomeCarousel = () => {
  // Array of image URLs
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-u-MgRp0hunHIojwz6nApYWox0soxbFguWQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-u-MgRp0hunHIojwz6nApYWox0soxbFguWQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-u-MgRp0hunHIojwz6nApYWox0soxbFguWQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-u-MgRp0hunHIojwz6nApYWox0soxbFguWQ&s',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="relative overflow-hidden w-full h-96">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
