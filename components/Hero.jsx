import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div className=' flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* overlay */}
      <div className=' absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className=' p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className=' text-5xl font-bold'>{heading}</h2>
        <p className=' py-5 text-xl'>{message}</p>
        <button className=' rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-white text-white'>
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-50 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-white transition duration-300 group-hover:text-gray-800 ease">Book</span>
        </button>
        {/* <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
        <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Button Text</span>
        </a> */}
        
      </div>
    </div>
  );
};

export default Hero;
