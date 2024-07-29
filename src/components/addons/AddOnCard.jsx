import React from "react";
import { FaTruck } from "react-icons/fa6";

const AddOnCard = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col items-center text-center w-[70%] justify-center mx-auto">
      <span className="mb-6 text-[#3c3c3c]">
        {/* <FaTruck className="w-16 h-16" /> */}
        {icon}
      </span>

      <p className="font-semibold mb-4">{title}</p>

      <p className="text-sm mb-4">{desc}</p>

      <a href="/" className="underline underline-offset-1">
        Learn More
      </a>
    </div>
  );
};

export default AddOnCard;
