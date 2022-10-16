import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import tick from "../assets/tick.png";
import nike from "../assets/nike.png";
import adidas from "../assets/adidas.png";
import newBalence from "../assets/nb.png";

export default function WhyUs() {
  return (
    <div className="flex justify-between px-10">
      <div className="w-[49%] grid grid-cols-10 grid-rows-5 gap-4">
        <img src={image1} className="col-span-3 row-span-5 h-full w-full" />
        <img src={image2} className="col-span-7 row-span-3 h-full w-full" />
        <img src={image3} className="col-span-4 row-span-2 h-full w-full" />
        <img src={image4} className="col-span-3 row-span-2 h-full w-full" />
      </div>
      <div className="w-[49%] flex flex-col gap-5">
        <h1 className="text-orange uppercase font-bold">some reasons</h1>
        <div className="uppercase font-bold text-5xl">
          <span className="stroke-text">why</span> choose us ?
        </div>
        <div className="flex flex-col gap-4 uppercase font-bold">
          <div className="flex gap-3">
            <img src={tick} className="w-8" alt="" /> over 140+ expert coachs
          </div>
          <div className="flex gap-3">
            <img src={tick} className="w-8" alt="" /> train smarter and faster
            than before
          </div>
          <div className="flex gap-3">
            <img src={tick} className="w-8" alt="" /> 1 free program for new
            member
          </div>
          <div className="flex gap-3">
            <img src={tick} className="w-8" alt="" /> reliable partners
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" uppercase text-gray">our partners</h1>
          <div className="flex gap-4">
            <img className='w-10' src={newBalence} alt="" />
            <img className='w-10' src={adidas} alt="" />
            <img className='w-10' src={nike} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
