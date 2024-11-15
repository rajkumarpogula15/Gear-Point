import React from 'react';
import { Gift, MessageSquareHeart, PiggyBank, ShoppingCart } from 'lucide-react';

const HomeCards = () => {
    return (
        <div className='w-full h-full flex flex-row justify-center items-center gap-8 mt-10'>
            {[
                { icon: <ShoppingCart className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, title: "Free Shipping", bgColor: "bg-blue-200" },
                { icon: <Gift className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, title: "Great Deals", bgColor: "bg-green-200" },
                { icon: <PiggyBank className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, title: "EMI Offers", bgColor: "bg-yellow-200" },
                { icon: <MessageSquareHeart className='h-7 w-7 mr-2 text-black group-hover:text-white duration-300' />, title: "Instant Support", bgColor: "bg-red-200" },
            ].map((card, index) => (
                <div key={index} className={`h-[8rem] w-[23%] ${card.bgColor} rounded-lg overflow-hidden relative group p-4 z-0 shadow-lg transition-transform duration-300 transform hover:scale-105`}>
                    <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-purple-500 group-hover:scale-[800%] duration-500 z-[-1]" />
                    <div className='flex h-full w-full justify-center items-center flex-row'>
                        {card.icon}
                        <h1 className="z-20 font-bold font-sans group-hover:text-white duration-300 text-lg">
                            {card.title}
                        </h1>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HomeCards;
