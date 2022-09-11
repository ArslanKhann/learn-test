import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Topfooter = () => {
  return (
    <div className="flex flex-col bg-black text-white mt-4">
      <div className="text-gray-400 font-bold text-2xl pt-7  ml-6 md:ml-24">
        We love taking your call.
      </div>
      <div className="flex items-center -mt-5 md:-mt-4 ml-6 md:ml-24">
        <FaHeartBroken className="text-4xl md:text-6xl" />
        <h1 className="text-3xl md:text-5xl ml-2">
          <span className="font-bold ">GoDaddy</span> guides
        </h1>
        <div className="mb-5 text-8xl ml-7 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
          &rarr;
        </div>
      </div>
      <div className="border-t border-b text-center pt-10 pb-5">
        <p>Prices exlude applicable taxes and ICANN fees.</p>
      </div>
    </div>
  );
};

export default Topfooter;
