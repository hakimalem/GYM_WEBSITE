import React from "react";
import tick from "../assets/whiteTick.png";
import arrow from "../assets/rightArrow.png";

export default function PricingCard({ card }) {
  const { icon, price, name, features } = card;
  return (
    <div
      className={`${
        name === "PREMIUM PLAN"
          ? "bg-gradient-to-l from-[#fa5042] to-[#ffa739]  gap-6 p-6 scale-125"
          : "bg-darkGrey gap-4 p-5"
      } flex flex-col justify-evenly`}
    >
      <div
        className={`${
          name === "PREMIUM PLAN" ? "fill-white" : 'fill-orange pricing'
        } `}
      >
        {icon}
      </div>
      <h1 className="uppercase font-bold">{name}</h1>
      <h1 className="text-4xl font-bold">$ {price}</h1>
      <div className="flex gap-3 flex-col text-sm ">
        {features.map((feature) => (
          <div className="flex gap-3">
            <img src={tick} className="w-5 h-5" />
            {feature}
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center cursor-pointer text-sm">
        See more benefits <img className="w-5 h-4" src={arrow} />
      </div>
      <button
        className={`${
          name === "PREMIUM PLAN" ? "text-orange" : "text-black"
        } py-2 font-bold px-10 bg-white`}
      >
        Join
      </button>
    </div>
  );
}
