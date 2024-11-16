import { IndianRupee, Star } from 'lucide-react';
import React from 'react';

const BikeCard = ({ img, price, name, brand, rating }) => {
    return (
        <div className="relative flex w-[24%] flex-col rounded-xl bg-blue-100  bg-clip-border text-gray-700 shadow-md">
            {/* Bike Image */}
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-white text-white shadow-lg shadow-blue-gray-500/40">
                <img src={img} alt={name} className="w-full h-full object-contain" />
            </div>

            {/* Bike Details */}
            <div className="p-6">
                {/* Bike Name */}
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {name}
                </h5>

                {/* Brand */}
                <p className="font-sans text-sm text-gray-500 antialiased mb-2">
                    Brand: <span className="text-gray-700 font-medium">{brand}</span>
                </p>

                {/* Price */}
                <p className="font-sans leading-relaxed text-inherit antialiased font-bold flex flex-row text-xl items-center mb-2">
                    <IndianRupee className="h-5 w-5" /> {price}
                </p>

                {/* Rating */}
                <div className="flex items-center text-yellow-500 text-sm">
                    {Array.from({ length: 5 }, (_, i) => (
                        <Star
                            key={i}
                            className={`h-5 w-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`}
                        />
                    ))}
                    <span className="ml-2 text-gray-600">({rating})</span>
                </div>
            </div>

            {/* Buy Now Button */}
            <div className="p-6 pt-0 w-full">
                <button
                    data-ripple-light="true"
                    type="button"
                    className="w-full select-none rounded-lg bg-purple-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default BikeCard;
