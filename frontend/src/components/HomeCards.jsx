import React from 'react';

const HomeCards = () => {
  // Array of card data
  const cardsData = [
    { id: 1, name: "John Doe", logo: "logo-placeholder.png" },
    { id: 2, name: "Jane Smith", logo: "logo-placeholder.png" },
    { id: 3, name: "Alice Johnson", logo: "logo-placeholder.png" },
    { id: 4, name: "Bob Brown", logo: "logo-placeholder.png" },
    { id: 5, name: "Charlie Davis", logo: "logo-placeholder.png" },
    { id: 6, name: "Diana Prince", logo: "logo-placeholder.png" },
    { id: 7, name: "Evan Taylor", logo: "logo-placeholder.png" },
    { id: 8, name: "Grace Lee", logo: "logo-placeholder.png" },
    { id: 9, name: "Henry Adams", logo: "logo-placeholder.png" },
    { id: 10, name: "Ivy Nelson", logo: "logo-placeholder.png" },
    { id: 11, name: "Jack Clark", logo: "logo-placeholder.png" },
    { id: 12, name: "Karen White", logo: "logo-placeholder.png" },
    { id: 13, name: "Jack Clark", logo: "logo-placeholder.png" },
    { id: 14, name: "Karen White", logo: "logo-placeholder.png" },
  ];

  return (
    <div className="flex flex-wrap gap-4 ml-5">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="w-40 h-50 ml-4 mt-3 rounded-2xl bg-gray-100 relative p-7 border-2 border-gray-300 transition-all duration-500 ease-out hover:border-blue-500 hover:shadow-lg overflow-visible"
        >
          {/* Logo Section */}
          <div className="flex justify-center mb-4">
            <img
              src={card.logo}
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
          {/* Name and Details Section */}
          <div className="text-black h-full gap-2 grid place-content-center">
            <p className="text-xl font-serif text-center">{card.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCards;
