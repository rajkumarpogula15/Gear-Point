import React, { useEffect, useState } from 'react';
import discountImage from "../assets/OurImages/gpr.jpg";


const DiscountBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1000); // Show after 1 second

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-20 opacity-100">
          <div className="relative w-5/6 max-w-4xl h-[80vh] bg-white rounded-lg overflow-hidden shadow-2xl">
            <section className="relative h-full">
              <img
                alt="Discount Image"
                src={discountImage}
                className="h-[50vh] w-full  object-cover"
              />

              <div className="p-3 text-center mt-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-red-500">Run with the pack</p>

                <h2 className="font-black uppercase text-red-600">
                  <span className="text-3xl font-black  lg:text-4xl">Get 5% off</span>
                  <span className=" block text-lg text-red-500">On your next order</span>
                </h2>

                <a
                  className="mt-2 inline-block w-80 bg-black py-3 text-lg font-bold uppercase tracking-widest text-white rounded-lg hover:bg-gray-800"
                  href="#"
                >
                  Get Discount
                </a>

                <p className="mt-2 text-xs font-medium uppercase text-gray-400">
                  Offer valid until 31st December, 2024 *
                </p>

                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  &times;
                </button>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default DiscountBanner;
