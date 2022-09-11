import React from "react";

const Gridtest = () => {
  return (
    <div className="grid grid-cols-7 grid-rows-4 w-3/4 h-[65vh] mx-auto bg-black ">
      <div className=" bg-purple-400 ">CARD 1</div>
      <div className=" bg-pink-900 col-span-2 row-span-2">CARD 2</div>
      <div className=" bg-green-400 col-span-3 row-span-4">CARD 3 </div>
      <div className=" bg-fuchsia-400">CARD 4</div>
      <div className=" bg-yellow-400 ">CARD 5</div>
      <div className=" bg-orange-400 ">CARD 6</div>
      <div className=" bg-teal-400 ">CARD 7</div>
      <div className="col-span-2 flex">
        <div className=" bg-green-900 flex-1">CARD 8</div>
        <div className=" bg-blue-200 flex-[2]">CARD 9</div>
      </div>
      <div className=" bg-fuchsia-400">CARD 10</div>
      <div className=" bg-yellow-400 col-span-3 ">CARD 11</div>
      <div className=" bg-orange-400 ">CARD 12</div>
    </div>
  );
};

export default Gridtest;
