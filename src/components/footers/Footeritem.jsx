import React from "react";

const Footeritem = (props) => {
  return (
    <div className="flex flex-col text-white ">
      <div className="flex mb-2">
        <h1 className="flex-1">{props.title}</h1>
        <div className=" md:hidden">+</div>
      </div>
      <ul className=" text-gray-500 space-y-2 mb-12 cursor-pointer">
        <li className="hover:underline">{props.names[0]}</li>
        <li className="hover:underline">{props.names[1]}</li>
        <li className="hover:underline">{props.names[2]}</li>
        <li className="hover:underline">{props.names[3]}</li>
        <li className="hover:underline">{props.names[4]}</li>
        <li className="hover:underline">{props.names[5]}</li>
      </ul>
    </div>
  );
};

export default Footeritem;
