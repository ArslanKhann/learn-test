import React from "react";
import logo from "../images/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMoonFill } from "react-icons/bs";

const Navbar = () => {
  return (
    // Main Container
    <div className="w-full">
      {/* NavBar */}
      <div className="flex justify-between container mx-auto items-center p-3 shadow-xl bg-white">
        <img src={logo} alt="logo" className="h-12 "></img>
        <ul className="hidden md:flex space-x-9 text-lg font-bold">
          <li className="hover:text-amber-400 hover:cursor-pointer">HOME</li>
          <li className="hover:text-amber-400 hover:cursor-pointer">SHOP</li>
          <li className="hover:text-amber-400 hover:cursor-pointer">
            DISCOVER
          </li>
        </ul>
        <div className="flex justify-end w-28">
          <GiHamburgerMenu className="text-3xl md:hidden" />
          <BsFillMoonFill className="text-3xl hover:text-amber-400 hover:cursor-pointer hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
