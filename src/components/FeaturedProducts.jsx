import React from "react";
import Featured from "./Featured";
import Earbeats1 from "../images/Earbeats1.jpg";
import Earbeats2 from "../images/Earbeats2.jpg";
import Earbeats3 from "../images/Earbeats3.jpg";
import Earbeats4 from "../images/Earbeats4.jpg";

const FeaturedProducts = () => {
  return (
    <div className="flex flex-col gap-10">
      <Featured image={Earbeats1} title="Beats Fit Pro" />
      <Featured image={Earbeats2} title="Beat Studio Buds" />
      <Featured image={Earbeats3} title="Beats Flex" />
      <Featured image={Earbeats4} title="Powerbeats Pro" />
    </div>
  );
};

export default FeaturedProducts;
