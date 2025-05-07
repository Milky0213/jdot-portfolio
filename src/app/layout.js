import "../styles/globals.css";
import Navbar from '../components/layout/Navbar';
// Global font
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
  return (
    <html lang="en" className={instrumentSans.variable}>
      <head>
        <meta name="apple-mobile-web-app-title" content="J Dot" />
      </head>
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
