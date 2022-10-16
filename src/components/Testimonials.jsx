import React from 'react';

export default function Testimonials() {
  return (
    <>
      <div className="flex justify-between px-10">
        <div className="w-[55%] flex flex-col gap-9 ">
          <h1 className="text-orange uppercase font-bold">Testimonials</h1>
          <div className="stroke-text font-bold uppercase text-5xl ">
            what they
          </div>
          <div className="font-bold uppercase text-5xl">say about us</div>
          <p className="leading-10 tracking-widest">
            I made the right choice by choosing the Fitclub and by choosing the
            right plan and program I already achieved my ideal body!
          </p>
          <div className="uppercase">
            <span className="text-orange">MATHEW HENDRICKSON</span> -
            ENTREPRENEUR
          </div>
        </div>
        <div className="w-[41%] "></div>
      </div>

      <div className="flex justify-between items-center h-72 px-10">
        <div className="w-[55%]">
          <div className="h-1 w-40 mb-3 rounded-full bg-orange"></div>
          <div className="text-5xl font-bold uppercase">
            <span className="stroke-text">ready to </span>level up
          </div>
          <div className="text-5xl font-bold uppercase">
            your body <span className="stroke-text">with us?</span>
          </div>
        </div>
        <div className="w-[41%] flex">
          <input
            type="text"
            className="px-8 focus:outline-none bg-gray py-7 placeholder-white"
            placeholder="Enter your Email Address here"
          ></input>
          <div className="flex justify-center items-center bg-gray px-5">
            <button className="bg-orange px-4 py-2 font-bold">Join now</button>
          </div>
        </div>
      </div>
    </>
  );
}
