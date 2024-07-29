import React from "react";
import img from "../../assets/img.png";
import { FaScissors } from "react-icons/fa6";

const CategoryLinks = ({ handleMouseOver, handleMouseLeave }) => {
  return (
    <div
      className="fixed max-w-[1200px] shadow-md bg-white rounded left-[10%] top-[40px] grid grid-cols-3 z-[999] h-[81vh]"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full col-span-1">
        <p className="font-semibold text-[18px] mb-4 p-4">CHOOSE CATEGORY</p>
        <ul className="w-full">
          <li className="py-2 px-4 hover:bg-slate-100 cursor-pointer transition-all duration-300 flex items-center gap-3">
            <FaScissors />
            <span>Ankara</span>{" "}
          </li>
          <li className="py-2 px-4 hover:bg-slate-100 cursor-pointer transition-all duration-300 flex items-center gap-3">
            <FaScissors />
            <span>Hoodie</span>{" "}
          </li>
          <li className="py-2 px-4 hover:bg-slate-100 cursor-pointer transition-all duration-300 flex items-center gap-3">
            <FaScissors />
            <span>Jump-suit</span>{" "}
          </li>
          <li className="py-2 px-4 hover:bg-slate-100 cursor-pointer transition-all duration-300 flex items-center gap-3">
            <FaScissors />
            <span>Senator</span>{" "}
          </li>
        </ul>
      </div>

      <div className="h-full w-full flex justify-end pr-4 col-span-2">
        <img
          src={
            "https://plus.unsplash.com/premium_photo-1705351823395-f31e73af2484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBpY3R1cmUlMjBvZiUyMGJsYWNrJTIwbGFkaWVzfGVufDB8fDB8fHww"
          }
          alt="Category"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default CategoryLinks;
