import React from 'react';
const HomeCards = () => {
  // Array of card data
  const cardsData = [
    { id: 1, name: "TVS", logo: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Ftvs_logo_8b0bbb2b7a.webp%3Fformat%3Dwebp&w=128&q=75" },
    { id: 2, name: "Royal Enfield", logo: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Froyal_enfield_logo_631655f217.webp%3Fformat%3Dwebp&w=128&q=75" },
    { id: 3, name: "YAMAHA", logo: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fyamaha_logo_fc48575aaf.webp%3Fformat%3Dwebp&w=128&q=75" },
    { id: 4, name: "BAJAJ", logo: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fbajaj_logo_90f8c408ec.webp%3Fformat%3Dwebp&w=128&q=75" },
    // { id: 5, name: "Honda", logo: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fhonda_logo_35da40bf6a.webp%3Fformat%3Dwebp&w=128&q=75s" },
    { id: 6, name: "KTM", logo: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fktm_logo_0e091d1a54.webp%3Fformat%3Dwebp&w=128&q=75" },
    { id: 7, name: "Suzuki", logo: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fsuzuki_logo_04f3a7e33c.webp%3Fformat%3Dwebp&w=128&q=75" },
    { id: 8, name: "BMW", logo: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fbmw_logo_c1fdb44d9f.webp%3Fformat%3Dwebp&w=128&q=75" },
    { id: 9, name: "Indian", logo: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Findia_motorcycles_logo_00b60c00f2.webp%3Fformat%3Dwebp&w=128&q=75" },
    { id: 10, name: "Jawa", logo: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fjawa_logo_1de4a10bb8.webp%3Fformat%3Dwebp&w=128&q=75" },
    { id: 11, name: "Kawasaki", logo: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fkawasaki_logo_eb38460820.webp%3Fformat%3Dwebp&w=128&q=75" },
    { id: 12, name: "Hero", logo: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fhero_logo_eab5263cf7.webp%3Fformat%3Dwebp&w=128&q=75" },
    { id: 13, name: "Keeway", logo: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fkeeway_logo_c2eb04d614.webp%3Fformat%3Dwebp&w=128&q=75" },
    { id: 14, name: "Ducati", logo: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fducati_logo_cac5b2f895.webp%3Fformat%3Dwebp&w=128&q=75" },
  ];

  return (
    <div className="flex flex-wrap gap-4 ml-5">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="w-40 h-52 ml-4 mt-3 rounded-2xl bg-gray-100 relative p-7 border-2 border-gray-300 transition-all duration-500 ease-out hover:border-blue-500 hover:shadow-lg overflow-visible"
        >
          {/* Logo Section */}
          <div className="flex justify-center mb-4 ">
            <img
              src={card.logo}
              alt="Logo"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Name and Details Section */}
          <div className="text-black h-full mt-[-30px] gap-2 grid place-content-center">
            <p className="text-lg font-serif text-nowrap">{card.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCards;
