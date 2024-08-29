"use client";  // Mark this component as a client component

import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation';
import Header from "../components/Header"; // Adjust the import based on your file structure
import Footer from "../components/Footer"; // Adjust the import based on your file structure

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define paths where the header should not be shown
  const noHeaderPaths = ['/login', '/signup'];
  const noFooterPaths = ['/login', '/signup'];

  return (
    <div className={inter.className}>
      {!noHeaderPaths.includes(pathname) && <Header />}
      {children}
      {!noFooterPaths.includes(pathname) && <Footer />}
    </div>
  );
}
