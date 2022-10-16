import React from "react";
import PricingCard from "./PricingCard";
import heart from "../assets/heart.png";
import premium from "../assets/flame.svg";
import dumbell from "../assets/dumbell.png";
import { plansData } from "../data/plansData";

export default function Pricing() {
  const pricings = [
    {
      icon: heart,
      title: "basic plan",
      price: 25,
      features: [
        "2 hours of excercises",
        "Free consultaion to coaches",
        "Access to The Community",
      ],
    },
    {
      icon: premium,
      title: "premium plan",
      price: 30,
      features: [
        "5 hours of excercises",
        "Free consultaion to coaches",
        "Access to minibar",
      ],
    },
    {
      icon: dumbell,
      title: "pro plan",
      price: 45,
      features: [
        "8 hours of excercises",
        "Free consultaion of private coach",
        "Free Fitness Merchandises ",
      ],
    },
  ];
  return (
    <div className="px-10 flex flex-col gap-20">
      <div className="uppercase font-bold text-5xl flex justify-around">
        <span className="stroke-text">ready to start </span> your journey{" "}
        <span className="stroke-text">now with us</span>
      </div>
      <div className="flex gap-14 justify-center">
        {plansData.map((card) => (
          <PricingCard card={card} />
        ))}
      </div>
    </div>
  );
}
