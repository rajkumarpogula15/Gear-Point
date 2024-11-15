import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';
import React from 'react';

const SocialCard = () => {
    return (
        <div className='w-screen h-[10vh] flex justify-center items-center mt-10'>
            <div className="flex bg-white w-fit px-4 py-2 shadow-lg rounded-full">
                {[
                    { icon: <Instagram className="w-5 h-5" />, title: "Instagram", hoverColor: "hover:text-red-500" },
                    { icon: <Facebook className="w-5 h-5" />, title: "Facebook", hoverColor: "hover:text-blue-600" },
                    { icon: <Twitter className="w-5 h-5" />, title: "Twitter", hoverColor: "hover:text-blue-400" },
                    { icon: <Mail className="w-5 h-5" />, title: "Email", hoverColor: "hover:text-green-500" }
                ].map((social, index) => (
                    <button
                        key={index}
                        title={social.title}
                        className={`text-gray-700 ${social.hoverColor} border-2 inline-flex items-center mr-4 p-2.5 border-transparent bg-gray-200 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105`}
                    >
                        {social.icon}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SocialCard;
