import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full h-25 pl-10 pr-20 py-4 bg-transparent backdrop-blur inline-flex justify-between items-center z-10">
      <div className="flex items-center space-x-4">
        <a href="/">
          <Image src="/images/navbarLogo.png" alt="J Dot Logo" width={140} height={80} />
        </a>
      </div>
      <div className="flex space-x-6 gap-20 uppercase">
        <Link href="/aboutUs">
          <p className="justify-start text-[#F5F1E8] text-l font-normal hover:text-gray-300 hover:opacity-80 transition-all duration-300">About Us</p>
        </Link>
        <Link href="/services">
          <p className="justify-start text-[#F5F1E8] text-l font-normal hover:text-gray-300 hover:opacity-80 transition-all duration-300">Services</p>
        </Link>
        <Link href="/contact">
          <p className="justify-start text-[#F5F1E8] text-l font-normal hover:text-gray-300 hover:opacity-80 transition-all duration-300">Contact</p>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
