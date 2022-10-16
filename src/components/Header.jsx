import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="p-8 pt-6 flex justify-between items-center">
      <img className="w-40" src={Logo} />
      <ul className="text-white flex">
        <li className="mx-4 hover:text-orange cursor-pointer">Home</li>
        <li className="mx-4 hover:text-orange cursor-pointer">Programs</li>
        <li className="mx-4 hover:text-orange cursor-pointer">Why us</li>
        <li className="mx-4 hover:text-orange cursor-pointer">Plans</li>
        <li className="mx-4 hover:text-orange cursor-pointer">Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
