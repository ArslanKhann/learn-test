import React from "react";
import { BsEarbuds, BsHeadphones } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";
import { FiMonitor } from "react-icons/fi";

const Categorybar = () => {
  return (
    <div className="bg-[#333333] py-5 flex space-x-10 justify-center items-start">
      <div className="group flex flex-col gap-1 justify-center items-center cursor-pointer text-white">
        <BsEarbuds className="text-3xl group-hover:text-amber-400" />
        <span className="text-xs">Earbuds</span>
      </div>
      <div className="group flex flex-col gap-1 justify-center items-center cursor-pointer text-white">
        <BsHeadphones className="text-3xl  group-hover:text-amber-400" />
        <span className="text-xs">Headphones</span>
      </div>
      <div className="group flex flex-col gap-1 justify-center items-center cursor-pointer text-white">
        <GoDeviceMobile className="text-3xl  group-hover:text-amber-400" />
        <span className="text-xs">Mobile</span>
      </div>
      <div className="group flex flex-col gap-1 justify-center items-center cursor-pointer text-white">
        <FiMonitor className="text-3xl  group-hover:text-amber-400" />
        <span className="text-xs">Monitor</span>
      </div>
    </div>
  );
};

export default Categorybar;
