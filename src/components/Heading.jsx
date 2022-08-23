import React from "react";

const Heading = (props) => {
  return (
    <div className="font-bold text-4xl tracking-tight text-center mt-14 mb-9">
      {props.text}
    </div>
  );
};

export default Heading;
