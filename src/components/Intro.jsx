import React from "react";
import Introimg from "../images/Intro.webp";
import { AiFillPlayCircle } from "react-icons/ai";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="bg-amber-400 md:flex-[1.2] text-white flex flex-col gap-7 px-7 py-5 md:py-0 justify-center">
        <h1 className="text-6xl md:text-4xl lg:text-6xl xl:text-7xl font-bold">
          If you can dream it, you can sell it with Shopify
        </h1>
        <p className="text-lg">Build your business here. Take it anywhere.</p>
        <span className="text-lg bg-[#2D6C7E] w-fit py-3 px-5 rounded-md hover:bg-opacity-90 cursor-pointer">
          Start free trial
        </span>
      </div>
      <div className="relative md:flex-1">
        <img src={Introimg} alt=""></img>
        <AiFillPlayCircle className="text-white cursor-pointer hover:text-opacity-50 text-6xl absolute top-0 bottom-0 right-0 left-0 m-auto" />
      </div>
    </div>
  );
};

export default Intro;
