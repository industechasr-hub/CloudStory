import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';


function Navbar() {
  const [open, setOpen] = useState(false);
  


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
          <img className='h-12 md:h-15 lg:h-17 ease-in-out duration-1000' src={logo} alt="" />

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-15 ml-50 font-semibold text-[16px]">
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

            <Link to="/books">
              <li className="flex items-center gap-1 cursor-pointer hover:text-orange-800">
                Books <ChevronDown size={18} />
              </li>
            </Link>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <Link to="/login">
            <button className="sm:hidden md:block text-cyan-950 px-5 py-2 rounded-full font-bold text-xs duration-300 hover:bg-cyan-700">
              Sign Up
            </button>
          </Link>
          
          <Link to="/login">
            <button className="bg-cyan-950 text-white px-5 py-2 rounded-full font-semibold text-xs duration-300 hover:bg-cyan-700">
              Log in
            </button>
          </Link>

        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-2/3 bg-white z-50 transform transition-transform duration-400 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-300">
          <div className="flex items-center gap-5">
            <button onClick={() => setOpen(false)}>
              <X size={36} />
            </button>

            <img className='h-12' src={logo} alt="" />
          </div>

          {/* <button className="bg-[#070327] text-white px-8 py-2 rounded-full font-semibold text-md">
            Log in
          </button> */}
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-8 px-6 py-4 text-md font-semibold">
          <Link to="/home" 
          className="flex items-center gap-2">
            Home
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-2">
            About <ChevronDown size={18} />
          </Link>

          <Link 
            to="/contact" 
            className="flex items-center gap-2">
            Contact <ChevronDown size={18} />
          </Link>

          <Link
            to="/books" 
            className="flex items-center gap-2">
            Books <ChevronDown size={18} />
          </Link>

          <Link
            to="/profile" 
            className="flex items-center gap-2">
            Profile
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar