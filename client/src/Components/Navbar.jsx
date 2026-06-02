import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';


function Navbar() {
  const [open, setOpen] = useState(false);
  const [Search, seSearch] = useState()


  return (
    <nav className="w-full">
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

          <div className='pt-4 text-sm w-96'>
            <input
              className='placeholder:pl-1 bg-gray-200 rounded-2xl p-1.5 outline-none w-80'
              placeholder='Search books'
              type="search" />

          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10 ml-10 font-semibold text-[16px]">
            <Link to="/home">
            <li className="flex items-center gap-1 cursor-pointer hover:text-orange-800">
              Home
            </li>
            </Link>

            <Link to="/about">
              <li className="flex items-center gap-1 cursor-pointer hover:text-orange-800">
                About <ChevronDown size={16} />
              </li>
            </Link>

            <Link to="/contact">
              <li className="flex items-center gap-1 cursor-pointer hover:text-orange-800">
                Contact <ChevronDown size={18} />
              </li>
            </Link>

            <Link to="/shop">
              <li className="flex items-center gap-1 cursor-pointer hover:text-orange-800">
                Shop <ChevronDown size={18} />
              </li>
            </Link>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <Link to="/register"> <button className="hidden md:block font-semibold text-lg duration-300 hover:underline text-blue-950">
            Sign up
          </button>
          </Link>



          <Link to="/login">
            <button className="bg-cyan-950 text-white px-5 py-2 rounded-full font-semibold text-md duration-300 hover:bg-cyan-700">
              Log in
            </button>
          </Link>

        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-[#f5f5f5] z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
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
            Home
          </div>

          <div className="flex items-center gap-2">
            About <ChevronDown size={18} />
          </div>

          <div className="flex items-center gap-2">
            Contact <ChevronDown size={18} />
          </div>

          <div className="flex items-center gap-2">
            Shop <ChevronDown size={18} />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar