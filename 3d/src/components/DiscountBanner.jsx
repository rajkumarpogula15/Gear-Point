import React, { useEffect, useState } from 'react';

const DiscountBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 3000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        // Overlay with reduced opacity for the rest of the screen
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 opacity-100">
          {/* Banner */}
          <div className="relative w-5/6 max-w-3xl bg-white rounded-lg overflow-hidden shadow-2xl">
            <section className="relative">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                className="h-48 w-full object-cover"
              />

              <div className="p-6 text-center sm:p-8">
                <p className="text-lg font-semibold uppercase tracking-widest">Run with the pack</p>

                <h2 className="mt-4 font-black uppercase">
                  <span className="text-5xl font-black sm:text-6xl lg:text-7xl"> Get 20% off </span>
                  <span className="mt-2 block text-lg">On your next order over $50</span>
                </h2>

                <a
                  className="mt-6 inline-block w-full bg-black py-3 text-lg font-bold uppercase tracking-widest text-white rounded-lg hover:bg-gray-800"
                  href="#"
                >
                  Get Discount
                </a>

                <p className="mt-6 text-xs font-medium uppercase text-gray-400">
                  Offer valid until 24th March, 2021 *
                </p>

                {/* Close Button */}
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
