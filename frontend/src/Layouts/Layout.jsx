import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
   <div className="min-h-screen flex flex-col bg-[#F7F7F8]">
  <Navbar />

  {/* Content wrapper with flex-grow */}
  <div className="flex-grow max-w-[1340px] px-[14px] sm:px-[20px] md:px-[30px] mx-auto w-full">
    <Outlet />
  </div>

  <Footer />
</div>
    </>
  )
}

export default Layout
