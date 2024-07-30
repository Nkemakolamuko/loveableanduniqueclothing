import React from "react";
import { FaTruck } from "react-icons/fa6";

const AddOnCard = ({ icon, title, desc }) => {
  return (
    <a href="/" className="flex flex-col items-center text-center w-[70%] justify-center mx-auto group hover:bg-slate-100 transition-all duration-all">
      <span className="mb-6 text-[#3c3c3c]">
        {icon}
      </span>

      <p className="font-semibold mb-4">{title}</p>

      <p className="text-sm mb-4">{desc}</p>

      <a href="/" className="underline underline-offset-1">
        Learn More
      </a>
    </a>
  );
};

export default AddOnCard;
