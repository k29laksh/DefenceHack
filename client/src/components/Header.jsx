import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Make sure you have React Router installed
import logo from '../assets/logo.png'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoSunnyOutline } from "react-icons/io5";
import { TbMoonStars } from "react-icons/tb";
import { useTheme } from '../context/ThemeContext';



const Header = () => {
  const {theme,lightMode,darkMode}=useTheme()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme=()=>{
    if(theme==="light") darkMode()
    else lightMode()
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

   
  };
  const [show,handleShow] = useState(false);

  const transitionNavbar = () =>{
      if(window.scrollY >100){
          handleShow(true);
      }else{
          handleShow(false)
      }
  }

  useEffect(()=>{
      window.addEventListener('scroll',transitionNavbar);
      return () => window.removeEventListener('scroll',transitionNavbar);
  },[])

  return (
    <header className={`${show && 'bg-white/80 dark:bg-black/80 shadow-md'} sticky z-10 top-0 dark:text-white  p-4 md:px-8  md:flex  md:items-center md:justify-between`}>
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

        <div className="dark:text-white  hover:text-gray-300 md:hidden flex items-center gap-3">
        <div className='text-blue cursor-pointer' onClick={toggleTheme} >
                {theme==="light"? <IoSunnyOutline className='h-7 w-7'/>:<TbMoonStars className='h-7 w-7'/>}
              </div>
                <span ><PiShoppingCartSimpleBold className='h-6 w-6'/></span>
            </div>
        <button
          className="md:hidden dark:text-white"
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
              className="dark:text-white dark:hover:text-blue hover:text-blue transition duration-300 ease-in-out  text-xl "
              exact
            >
              Home
            </NavLink>
          
            <NavLink
              to="/about"
              activeClassName="font-bold"
              className="dark:text-white dark:hover:text-blue hover:text-blue transition duration-300 ease-in-out  text-xl "
            >
              About Us
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="font-bold"
              className="dark:text-white dark:hover:text-blue hover:text-blue transition duration-300 ease-in-out  text-xl "
            >
              Scanner
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="font-bold"
              className="dark:text-white dark:hover:text-blue hover:text-blue transition duration-300 ease-in-out  text-xl "
            >
              Ecommerce
            </NavLink>
          
        </ul>
       
      </nav>

      
            <div className=' items-center gap-6 hidden md:flex'>
              <div className='text-blue cursor-pointer' onClick={toggleTheme} >
                {theme==="light"? <IoSunnyOutline className='h-7 w-7'/>:<TbMoonStars className='h-7 w-7'/>}
              </div>
            <div className="hidden  hover:text-blue transition duration-300 ease-in-out   dark:texor-pointer md:flex items-center gap-3">
                <span ><PiShoppingCartSimpleBold className='h-6 w-6'/></span>
                <span className='text-xl hidden lg:block'>Cart</span>
            </div>
            </div>

        
    </header>
  );
};

export default Header;
