import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <div className="flex items-center cursor-pointer mb-4">
                <div className="flex flex-col leading-none">
                    <div 
                        className="font-bold text-3xl italic text-white tracking-wide drop-shadow-lg mr-2" 
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        GearPoint
                    </div>
                    <div
                        className="text-xs text-gray-400 pl-1"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        where every ride begins
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" color='white' width="3.5rem" height="3.5rem" viewBox="0 0 48 48">
                    {/* SVG paths here */}
                </svg>
            </div>

            {/* Smaller Loading Bar */}
            <div className="w-[200px] h-[8px] bg-gray-300 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[40%] h-full bg-[#002] rounded-lg z-10 animate-loading"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;

