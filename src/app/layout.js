"use client";
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
// Styling
import "../styles/globals.css";
import { Instrument_Sans } from 'next/font/google';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-instrument-sans',
});

// export const metadata = {
//   title: "J Dot Development",
//   description: "Portfolio of Joshua Thomas-Butler",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    // ScrollSmoother removed - your parallax bars will work without it
    // Optional: Add simple smooth scrolling with CSS
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <html lang="en" className={instrumentSans.variable}>
      <head>
        <meta name="apple-mobile-web-app-title" content="J Dot" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}