import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import { Instrument_Sans } from 'next/font/google';

// Import the Instrument_Sans font
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
});

const HomePage = () => {
  return (
    <div className={instrumentSans.className}>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default HomePage;
