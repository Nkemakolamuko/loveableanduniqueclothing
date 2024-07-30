import React, { useContext, useState } from "react";
import Headroom from "react-headroom";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import CategoryLinks from "./nav/CategoryLinks";
import { GlobalContext } from "../App";

const Header = () => {
  const { show, setShow, showSmall, setShowSmall } = useContext(GlobalContext);
  return (
    <div className="z-[999]">
      <p className="text-center w-full p-2 bg-[#000f93] text-white font-medium text-sm">
        Free Delivery for orders over ₦125, 000
      </p>

      {/* Large Screen */}
      <Headroom className="z-[9999] md:block hidden">
        <nav className="flex items-center justify-between px-4 bg-white z-[999] border-b">
          <span className="text-[24px] font-bold">LUC</span>

          <ul className="flex items-center gap-6 font-medium p-4">
            <Link to={"/"}>
              <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                Home
              </li>
            </Link>
            <Link to={"/store"}>
              <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                Store
              </li>
            </Link>
            <Link
              to={"/category"}
              onMouseOver={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              className="flex items-center gap-2"
            >
              <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                Category
              </li>
              {show ? (
                <FaAngleUp className="w-4 h-4" />
              ) : (
                <FaAngleDown className="w-4 h-4" />
              )}
            </Link>

            <Link to={"/faq"}>
              <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                FAQ
              </li>
            </Link>
            <Link to={"/collection"}>
              <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                Collection/Display
              </li>
            </Link>
            <Link to={"/gallery"}>
              <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                Gallery
              </li>
            </Link>
            <Link to={"/reviews"}>
              <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                Reviews
              </li>
            </Link>
          </ul>

          <a
            href="tel:+2348132626455"
            className="py-2 px-8 bg-black shadow-md shadow-black hover:shadow-none text-white font-semibold cursor-pointer text-center transition-all duration-300"
          >
            Contact Us
          </a>
        </nav>
      </Headroom>

      {/* Small Screen */}
      <Headroom className="z-[9999] md:hidden block">
        <nav className="flex items-center justify-between px-2 bg-white z-[999] border-b py-2">
          <div className="cursor-pointer" onClick={() => setShowSmall(true)}>
            {" "}
            <GiHamburgerMenu className="w-8 h-8" />{" "}
          </div>

          <a href="/" className="text-[24px] font-bold">LUC</a>

          <a
            href="tel:+2348132626455"
            className="py-2 px-4 bg-black hover:shadow-md hover:shadow-black text-white font-semibold cursor-pointer text-center transition-all duration-300"
          >
            Contact Us
          </a>
        </nav>
      </Headroom>
    </div>
  );
};

export default Header;
