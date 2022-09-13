import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Bottomfooter = () => {
  return (
    <div className="bg-black">
      <div className="text-white bg-black border-t mx-7 grid grid-cols-5 ">
        <div className="flex col-span-5 md:col-span-3 justify-around md:justify-start md:gap-5">
          <div className="text-center">Pakistan- English ^</div>
          <div className="text-center">PKR ^</div>
        </div>
        <div className="col-span-5 md:col-span-2 flex justify-around md:justify-end md:gap-5">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
        <div className="col-span-5 xl:col-span-2 xl:col-start-4 flex justify-between">
          <p>Legal</p>
          <p>Privacy Policy</p>
          <p>Adverstising Preferences</p>
          <p>Cookies</p>
        </div>
        <div className="col-span-5 xl:col-span-3 xl:row-start-2 text-center">
          <p>
            Copyright © 1999 - 2022 GoDaddy Operating Company, LLC. All Rights
            Reserved. The GoDaddy word mark is a registered trademark of GoDaddy
            Operating Company, LLC in the US and other countries. The “GO” logo
            is a registered trademark of GoDaddy.com, LLC in the US.
          </p>
          <p>
            Use of this Site is subject to express terms of use. By using this
            site, you signify that you agree to be bound by these Universal
            Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bottomfooter;
