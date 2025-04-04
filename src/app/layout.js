import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from '../components/Navbar';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "J Dot Development",
  description: "Portfolio of Joshua Thomas-Butler",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
