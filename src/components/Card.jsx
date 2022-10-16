import React from "react";
import arrow from "../assets/rightArrow.png";

export default function Card({ card }) {
  const { image, heading, details } = card;
  return (
    <div className=" programs flex flex-col bg-cardBg hover:cursor-pointer  p-10 pb-7 gap-4   hover:bg-gradient-to-l from-[#fa5042] to-[#ffa739]">
      {/* <img src={image}/> */}
      {image}
      <h1 className="font-bold text-lg">{heading}</h1>
      <div className="text-sm">{details}</div>
      <div className="flex gap-4 items-center">
        Join now <img src={arrow} className="w-6 h-5" />
      </div>
    </div>
  );
}
