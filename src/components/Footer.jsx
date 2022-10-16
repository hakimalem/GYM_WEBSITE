import React from "react";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div>
      <hr />
      <div className="flex flex-col items-center py-28 gap-16 ">
        <div className="flex justify-center gap-16">
          <div>
            <img className='w-8 cursor-pointer' src={github} alt="" />
          </div>
          <div>
            <img className='w-8 cursor-pointer' src={insta} alt="" />
          </div>
          <div>
            <img className='w-8 cursor-pointer' src={linkedin} alt="" />
          </div>
        </div>
        <div>
          <img src={logo} className='w-40' alt="" />
        </div>
      </div>
    </div>
  );
}
