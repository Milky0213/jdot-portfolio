import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full h-25 pl-10 pr-20 py-4 bg-transparent backdrop-blur inline-flex justify-between items-center z-10">
      <div className="flex items-center space-x-4">
        <a href="">
          <Image src="/images/navbarLogo.png" alt="J Dot Logo" width={140} height={80}/>
        </a>
      </div>
      <div className="flex space-x-6 gap-20">
        <a href="#about" className="justify-start text-[#F5F1E8] text-l font-medium hover:text-gray-300 hover:opacity-80 transition-all duration-300">About Us</a>
        <a href="#services" className="justify-start text-[#F5F1E8] text-l font-medium hover:text-gray-300 hover:opacity-80 transition-all duration-300">Services</a>
        <a href="#contact" className="justify-start text-[#F5F1E8] text-l font-medium hover:text-gray-300 hover:opacity-80 transition-all duration-300">Contact</a>

      </div>
    </nav>
  );
};

export default Navbar;
