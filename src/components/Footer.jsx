import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full rounded-lg mt-10 mb-4 p-8">
      <div className="flex justify-between items-center">
        <Link to="/" className="footer-logo flex items-center ">
          <div className="flex items-center text-white">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            <span className="text-2xl font-semibold">Defence Hub</span>
          </div>
        </Link>

        <div className="flex text-white ">
       
        </div>
      </div>

      <div className=" flex justify-between  text-white mt-20 ">
        <div className="footer-description">
          <h3 className="text-xl font-semibold">Globally Scalable</h3>
          <p>Copyright © 2024 Defence | All rights reserved</p>
          <p>
            Privacy Policy | Cookie Policy | Cookie References | Terms &
            Conditions | Acceptable use
          </p>
        </div>
        <div className="social-media flex justify-end items-end">
          <Link>
            <FaInstagram className="w-8 h-8 ml-6 cursor-pointer" />
          </Link>
          <Link>
            <FaTwitter className="w-8 h-8 ml-6 cursor-pointer" />
          </Link>
          <Link>
            <FaYoutube className="w-8 h-8 ml-6 cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
