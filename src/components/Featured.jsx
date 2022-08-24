import React from "react";

const Featured = (props) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center lg:mx-28 xl:w-[1024px] xl:mx-auto">
      <div className="w-96 md:flex-1 xl:flex-[2]">
        <img src={props.image} alt=""></img>
      </div>
      <div className="w-96 md:flex-1 pt-5 px-6 md:pl-8 lg:pl-20 md:pr-12 tracking-tight">
        <h1 className="text-3xl lg:text-4xl font-bold ">{props.title}</h1>
        <p className="text-lg font-bold mt-2">$199.99</p>
        <ul className="mt-4 ml-4">
          <li className="list-disc">Flexible, secure-fit wingtips</li>
          <li className="list-disc">
            Active Noise Cancelling (ANC) and Transparency mode
          </li>
          <li className="list-disc">
            Up to 6 hours of listening time with ANC on
          </li>
          <li className="list-disc">
            Auto Play/Pause connection via Apple H1 chip
          </li>
        </ul>
        <div className="flex items-center mt-4">
          <p>5 colors</p>
          <div className="w-3 h-3 rounded-full bg-blue-400 ml-3"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 ml-3"></div>
          <div className="w-3 h-3 rounded-full bg-green-400 ml-3"></div>
          <div className="w-3 h-3 rounded-full bg-cyan-400 ml-3"></div>
          <div className="w-3 h-3 rounded-full bg-purple-400 ml-3"></div>
        </div>
        <div className="mt-4 text-sm lg:text-[15px] font-bold w-fit text-white hover:text-black bg-black hover:bg-white px-5 lg:px-7 py-2 lg:py-3 rounded-full border-2 border-black">
          VIEW DETAILS
        </div>
      </div>
    </div>
  );
};

export default Featured;
