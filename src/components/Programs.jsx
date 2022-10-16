import React from "react";
import running from "../assets/runing.svg";
import dumbell from "../assets/dumbell.svg";
import flame from "../assets/flame.svg";
import heartHealth from "../assets/heartHealth.svg";
import Card from "./Card";
import { programsData } from "../data/programsData";

const cards = [
  {
    icon: dumbell,
    title: "Strength Training",
    desc: "In this program, you are trained to improve your strength through many exercises.",
  },
  {
    icon: running,
    title: "Cardio Training",
    desc: "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
  },
  {
    icon: flame,
    title: "Fat Burning",
    desc: "This program is suitable for you who wants to get rid of your fat and lose their weight.",
  },
  {
    icon: heartHealth,
    title: "Health Fitness",
    desc: "This programs is designed for those who exercises only for their body fitness not body building.",
  },
];

export default function Programs() {
  return (
    <div className="px-10 ">
      <div className="flex justify-around italic mb-8">
        <span className="stroke-text  uppercase font-bold text-5xl">
          explore our
        </span>
        <span className="uppercase text-white font-bold text-5xl">
          programs
        </span>
        <span className="stroke-text  uppercase font-bold text-5xl">
          to shape you
        </span>
      </div>
      <div className="flex gap-4">
        {programsData.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}
