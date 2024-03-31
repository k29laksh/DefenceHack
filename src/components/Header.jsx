import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Make sure you have React Router installed
import logo from '../assets/logo.png'
import { PiShoppingCartSimpleBold } from "react-icons/pi";


const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className=" text-white  p-4 md:px-8  md:flex  md:items-center md:justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 mr-2"
          />
          <span className="text-2xl font-semibold">Defence Hub</span>
        </div>

        <div className='flex items-center gap-4'>
        <div className="text-white  hover:text-gray-300 md:hidden flex items-center gap-3">
                <span ><PiShoppingCartSimpleBold className='h-6 w-6'/></span>
            </div>
        <button
          className="md:hidden text-white"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        </div>
      </div>

      <nav
        className={`mt-4 md:mt-0   ${
          isSidebarOpen ? 'block' : 'hidden'
        } md:flex justify-center`}
      >
        <ul className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:gap-8  items-center">
            <NavLink
              to="/"
              activeClassName="font-bold"
              className="text-white  text-xl hover:text-gray-300"
              exact
            >
              Home
            </NavLink>
          
            <NavLink
              to="/about"
              activeClassName="font-bold"
              className="text-white  text-xl hover:text-gray-300"
            >
              About Us
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="font-bold"
              className="text-white  text-xl hover:text-gray-300"
            >
              Scanner
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="font-bold"
              className="text-white  text-xl hover:text-gray-300"
            >
              Ecommerce
            </NavLink>
          
        </ul>
       
      </nav>
      
            <div className="text-white hidden  hover:text-gray-300 md:flex items-center gap-3">
                <span ><PiShoppingCartSimpleBold className='h-6 w-6'/></span>
                <span className='text-xl hidden lg:block'>Cart</span>
            </div>

        
    </header>
  );
};

export default Header;
