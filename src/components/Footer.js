import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="bg-gray-700 flex justify-between gap-3 items-center text-white px-5 py-8">
      <h3 className="text-xl text-center md:font-semibold ">
        Copyright &copy; 2024. All rights are reserved
      </h3>
      <div className="text-xl font-semibold text-center hidden md:block">
        <h2 className="font-bold text-2xl">Location:</h2>
        <p>Tamilnadu, India</p>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Footer;
