import React from "react";
import Footeritem from "./Footeritem";

const Middlefooter = () => {
  var items1 = [
    "About Us",
    "Contact Us",
    "Investor Relations",
    "Careers",
    "Trust Center",
    "Legal",
  ];
  var items2 = [
    "About You",
    "Contact You",
    "Investor Friendship",
    "Careers No",
    "Trust Break",
    "Legal Issues",
  ];
  return (
    <div className="grid grid-cols-1 bg-black px-8 py-4  md:grid-cols-2 xl:grid-cols-6 ">
      <Footeritem title="About Daddy" names={items1} />
      <Footeritem title="Go Daddy" names={items2} />
      <Footeritem title="No Daddy" names={items1} />
      <Footeritem title="Yes Daddy" names={items1} />
      <Footeritem title="We Daddy" names={items1} />
      <Footeritem title="Yeah Daddy" names={items1} />
    </div>
  );
};

export default Middlefooter;
