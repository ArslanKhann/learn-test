import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Mininav = () => {
  return (
    <div className="bg-black flex justify-center items-center py-3">
      <span className="text-white text-lg font-bold flex justify-center items-center cursor-pointer">
        <span className="hover:underline">Fast and free delivery</span>
        <span>&nbsp;</span>
        <FaArrowAltCircleRight />
      </span>
    </div>
  );
};

export default Mininav;
