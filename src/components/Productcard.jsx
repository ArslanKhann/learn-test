import React from "react";

const Productcard = (props) => {
  return (
    <div className="flex flex-col items-center justify-center shadow-xl hover:shadow-2xl sm:w-fit mx-20 sm:mx-0 hover:-translate-y-1 duration-200">
      <div>
        <img src={props.image} alt="" />
      </div>
      <div className="text-center">
        <h1>{props.title}</h1>
        <p className="text-amber-500">RS.{props.price}</p>
      </div>
    </div>
  );
};

export default Productcard;
