import React from "react";

const Featured = (props) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={props.image} alt="" className="w-96"></img>
      </div>
      <div className="w-96 pt-5 px-6 tracking-tight">
        <h1 className="text-3xl font-bold ">{props.title}</h1>
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
        <div className="mt-4 text-sm font-bold w-fit text-white hover:text-black bg-black hover:bg-white px-5 py-2 rounded-full border-2 border-black">
          VIEW DETAILS
        </div>
      </div>
    </div>
  );
};

export default Featured;
