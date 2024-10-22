import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle the menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex lg:flex-row justify-between z-10 lg:items-center sticky top-0 p-2 lg:p-5 lg:pl-16 lg:pr-16 bg-gray-100 text-white border border-gray-100 shadow-xl shadow-blue-100/50 backdrop-blur-md">
      {/* Logo Section */}
      <div className='m-0 p-0'>
        <Link to="/">
          <img src="src\assets\logo-ann.jpg" alt="Logo..." className='lg:h-20 lg:w-20 h-14 w-14 rounded-full'/>
        </Link>
      </div>

      {/* Navigation Links for Large Screens */}
      <div className="lg:flex hidden lg:flex-row lg:gap-24 gap-6 mt-4 lg:mt-0 text-blue-950 font-semibold text-lg">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Hamburger and Cross Icon for Mobile */}
      <div className="lg:hidden flex items-center z-50">
        {isMenuOpen ? (
          <RxCross2
            onClick={toggleMenu}
            className="text-3xl text-blue-950 cursor-pointer"
          />
        ) : (
          <BiMenuAltRight
            onClick={toggleMenu}
            className="text-3xl text-blue-950 cursor-pointer"
          />
        )}
      </div>

      {/* Mobile Menu - Fullscreen on open */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-56 w-full bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 text-blue-950 font-semibold text-2xl transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{ zIndex: 40, boxShadow: isMenuOpen ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none' }}
      >
        <Link to="/" onClick={toggleMenu} className="transition duration-300 transform hover:scale-105">Home</Link>
        <Link to="/about" onClick={toggleMenu} className="transition duration-300 transform hover:scale-105">About</Link>
        <Link to="/contact" onClick={toggleMenu} className="transition duration-300 transform hover:scale-105">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;
