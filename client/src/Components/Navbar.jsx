import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Menu, X, ChevronDown } from "lucide-react";


function Navbar()  {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f5f5f5] border-b border-gray-200">
      {/* Desktop + Mobile Top */}
      <div className="flex items-center justify-between px-6 md:px-10 py-1">
        
        {/* Left Side */}
        <div className="flex items-center gap-6">
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={30} />
          </button>

          {/* Logo */}
          <img className='h-15' src={logo} alt="" />

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10 ml-10 font-semibold text-[16px]">
            <li className="flex items-center gap-1 cursor-pointer hover:text-orange-800">
              Explore <ChevronDown size={16} />
            </li>

            <li className="flex items-center gap-1 cursor-pointer hover:text-orange-800">
              Hire Talent <ChevronDown size={18} />
            </li>

            <li className="flex items-center gap-1 cursor-pointer hover:text-orange-800">
              Get Hired <ChevronDown size={18} />
            </li>

            <li className="flex items-center gap-1 cursor-pointer hover:text-orange-800">
              Community <ChevronDown size={18} />
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <button className="hidden md:block font-semibold text-lg duration-300 hover:underline text-blue-950">
            Sign up
          </button>

          <button className="bg-cyan-950 text-white px-6 py-2 rounded-full font-semibold text-md duration-300 hover:bg-cyan-700">
            Log in
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-[#f5f5f5] z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-300">
          <div className="flex items-center gap-5">
            <button onClick={() => setOpen(false)}>
              <X size={36} />
            </button>

            <img className='h-14' src={logo} alt="" />
          </div>

          <button className="bg-[#070327] text-white px-8 py-2 rounded-full font-semibold text-md">
            Log in
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-10 px-7 py-10 text-md font-semibold">
          <div className="flex items-center gap-2">
            Explore <ChevronDown size={22} />
          </div>

          <div className="flex items-center gap-2">
            Hire Talent <ChevronDown size={22} />
          </div>

          <div className="flex items-center gap-2">
            Get Hired <ChevronDown size={22} />
          </div>

          <div className="flex items-center gap-2">
            Community <ChevronDown size={22} />
          </div>

          <button className="text-pink-500 text-left font-bold">
            Start Project Brief
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar