import React from 'react';
import { Mail, Phone, Pin } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <div className='w-screen h-full flex flex-col justify-center items-center bg-gray-50'>
        <div className='w-full h-32 flex justify-center items-center text-5xl text-blue-600 font-bold shadow-md'>
          Contact Us
        </div>
        <div className='w-[90%] md:w-[80%] h-[40rem] bg-white shadow-lg rounded-md flex flex-col md:flex-row justify-center items-start p-8 mt-6'>
          <div className='h-full w-full md:w-1/3 flex flex-col justify-start items-center gap-6'>
            <div className='h-[25%] w-full border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-2 shadow-md p-6 bg-blue-100 transition-transform transform hover:scale-105'>
              <Mail className='h-8 w-8 text-blue-600' />
              <h1 className='text-blue-800 text-lg'>abc@gmail.com</h1>
            </div>
            <div className='h-[25%] w-full border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-2 shadow-md p-6 bg-blue-100 transition-transform transform hover:scale-105'>
              <Phone className='h-8 w-8 text-blue-600' />
              <h1 className='text-blue-800 text-lg'>9876543210</h1>
            </div>
            <div className='h-[25%] w-full border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-2 shadow-md p-6 bg-blue-100 transition-transform transform hover:scale-105'>
              <Pin className='h-8 w-8 text-blue-600' />
              <h1 className='text-blue-800 text-center text-lg'>1/11, asd, dfg <br /> wert</h1>
            </div>
          </div>
          <div className='h-full w-full md:w-2/3 flex flex-col justify-center items-center'>
            <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
              <h1 className='w-[90%] text-left my-4 font-bold text-blue-600 text-2xl'>Get in Touch</h1>
              <form className='h-[80%] w-[90%] flex flex-col justify-center items-center gap-6'>
                <input type="text" placeholder='Name' className='w-full shadow-sm outline-none bg-gray-200 border-b-2 border-transparent p-3 focus:shadow-md focus:border-b-2 focus:border-blue-500 rounded-md' />
                <input type="email" placeholder='Email' className='w-full shadow-sm outline-none bg-gray-200 border-b-2 border-transparent p-3 focus:shadow-md focus:border-b-2 focus:border-blue-500 rounded-md' />
                <input type="tel" placeholder='Phone' className='w-full shadow-sm outline-none bg-gray-200 border-b-2 border-transparent p-3 focus:shadow-md focus:border-b-2 focus:border-blue-500 rounded-md' />
                <textarea className='w-full shadow-sm outline-none bg-gray-200 border-b-2 border-transparent p-3 focus:shadow-md focus:border-b-2 focus:border-blue-500 rounded-md' cols='8' rows='5' placeholder='Message'/>
                <button type='submit' className='mt-4 w-1/2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition-all shadow-md hover:shadow-lg'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

