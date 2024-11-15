import React from 'react';
import { Bike, Circle } from 'lucide-react'; // Example icons for bikes

const HomeCards = () => {
    // Array of popular bike brands in India
    const bikeBrands = [
        { icon: <bike className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, name: "Hero", bgColor: "bg-red-200" },
        { icon: <Bike className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, name: "Honda", bgColor: "bg-blue-200" },
        { icon: <Circle className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, name: "Bajaj", bgColor: "bg-yellow-200" },
        { icon: <bike className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, name: "Yamaha", bgColor: "bg-indigo-200" },
        { icon: <Bike className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, name: "TVS", bgColor: "bg-green-200" },
        { icon: <bike className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, name: "Royal Enfield", bgColor: "bg-gray-200" },
        { icon: <Bike className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, name: "KTM", bgColor: "bg-orange-200" },
        { icon: <circle className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, name: "Suzuki", bgColor: "bg-purple-200" },
    ];

    return (
        <div className='w-full h-full flex flex-wrap justify-center items-center gap-8 mt-10'>
            {bikeBrands.map((brand, index) => (
                <div
                    key={index}
                    className={`h-[8rem] w-[20%] ${brand.bgColor} rounded-lg overflow-hidden relative group p-4 z-0 shadow-lg transition-transform duration-300 transform hover:scale-105`}
                >
                    <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-purple-500 group-hover:scale-[800%] duration-500 z-[-1]" />
                    <div className='flex h-full w-full justify-center items-center flex-row'>
                        {brand.icon}
                        <h1 className="z-20 font-bold font-sans group-hover:text-white duration-300 text-lg">
                            {brand.name}
                        </h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomeCards;
