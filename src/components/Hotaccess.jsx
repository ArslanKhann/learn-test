import React from "react";
import Productcard from "./Productcard";

import cardimg1 from "../images/Cardimg1.webp";
import cardimg2 from "../images/Cardimg2.webp";
import cardimg3 from "../images/Cardimg3.webp";
import leftwali from "../images/Leftbariimg.webp";

const Hotaccess = () => {
  return (
    <div className="grid sm:grid-cols-2 sm:w-fit sm:mx-auto md:grid-cols-3 gap-10 md:gap-2 xl:grid-cols-4">
      <img src={leftwali} alt="" className="hidden xl:block row-span-2"></img>
      <Productcard
        image={cardimg1}
        title="Xaimoci Router AX4300"
        price="8499"
      />
      <Productcard
        image={cardimg2}
        title="Xaimoci Router AX4300"
        price="8499"
      />
      <Productcard
        image={cardimg3}
        title="Xaimoci Router AX4300"
        price="8499"
      />
      <Productcard
        image={cardimg3}
        title="Xaimoci Router AX4300"
        price="8499"
      />
      <Productcard
        image={cardimg2}
        title="Xaimoci Router AX4300"
        price="8499"
      />
      <Productcard
        image={cardimg1}
        title="Xaimoci Router AX4300"
        price="8499"
      />
    </div>
  );
};

export default Hotaccess;
