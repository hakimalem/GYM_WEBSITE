import React from "react";
import Header from "./Header";
import hero from "../assets/hero_image.png";
import hero_back from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";

const Hero = () => {
  return (
    <div className="flex justify-between text-white">
      <div className="left-side px-10 pb-10">
        <Header />
        {/* the best ... */}
        <div className="mt-16 rounded-[4rem] w-fit py-5 px-3 bg-[#363d42] uppercase relative flex items-center justify-start mb-10">
          <div className="absolute bg-orange w-[92px] h-4/5 rounded-[3rem] best"></div>
          <span className="z-20 px-3 ">the best fitness club in the town</span>
        </div>
        {/* heading  */}
        <div className="flex flex-col gap-6 uppercase font-bold text-7xl ">
          <div>
            <span className="stroke-text ">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div className="lowercase text-base font-normal w-4/5 tracking-wider">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="flex gap-8 mt-10">
          <div className="flex flex-col">
            <span className="text-3xl">+140</span>
            <span className="uppercase text-lg text-gray">expert coaches</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl">+978</span>
            <span className="uppercase text-lg text-gray">members joined</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl">+50</span>
            <span className="uppercase text-lg text-gray">fitness program</span>
          </div>
        </div>
        {/* buttons */}
        <div className="flex gap-5 mt-6">
          <button className="bg-orange px-6 py-2 text-sm font-bold">
            Get Started
          </button>
          <button className="border-2 border-orange px-6 py-2 text-sm font-bold">
            Learn More
          </button>
        </div>
      </div>
      <div className="right-side pt-8 bg-orange w-1/4">
        <button className="bg-white text-black px-3 py-3 font-bold text-sm relative left-44 rounded-md">
          Join now
        </button>
        <div className="bg-darkGrey py-4 px-3 flex flex-col gap-3 mt-9 w-[39%] rounded-md relative left-32">
          <img src={heart} className="w-8" />
          <div className="text-gray">Heart rate</div>
          <div className="text-2xl">116 bpm</div>
        </div>
        {/* hero images */}
        <img src={hero} alt="" className="absolute w-96 top-40 right-32" />
        <img
          src={hero_back}
          alt=""
          className="absolute w-64 top-20 right-80 -z-10"
        />
        {/* calories */}
        <div className="bg-caloryCard absolute flex space-between  gap-7 p-4  rounded-lg w-44 h-36 top-[530px] right-[470px]">
          <img src={calories} alt="" className="w-12" />
          <div className="flex flex-col ">
            <div className="text-gray">Calories burned</div>
            <div className="text-3xl ">220 kcal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
