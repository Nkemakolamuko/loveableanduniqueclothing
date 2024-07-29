import React from "react";
import img from "../assets/img.png";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NewsLetter = ({ news, handleClose }) => {
  return (
    <AnimatePresence>
      {news && (
        <div className="bg-[rgba(35,35,35,0.8)] h-screen fixed w-full flex justify-center z-[999] items-center overflow-hidden">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            className="md:max-w-[847px] w-[90%] md:mx-auto my-[.5rem] top-[50vh]"
            onClick={handleClose}
          >
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center bg-white relative p-4 md:p-0"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the card
            >
              <a
                title="Close"
                className="w-[30px] h-[30px] bg-[#000] text-[#fff] md:-right-4 -right-3 -top-4 absolute flex items-center justify-center cursor-pointer hover:bg-rose-500 transition-all duration-300"
                onClick={handleClose}
              >
                <FaTimes />
              </a>
              <img
                src={"https://plus.unsplash.com/premium_photo-1705351823395-f31e73af2484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBpY3R1cmUlMjBvZiUyMGJsYWNrJTIwbGFkaWVzfGVufDB8fDB8fHww"}
                alt="Product Image"
                className="w-fit h-auto object-cover md:block hidden"
              />

              <div className="flex flex-col items-center text-center p-4 gap-2">
                <p className="text-[#232323] text-[24px] font-bold mb-[14px] tracking-tighter">
                  JOIN OUR MAILING LIST
                </p>

                <p className="text-[#2d2d2d] text-[16px] mb-[28px] leading-[26px]">
                  Sign Up to get 10% off your first purchase, exclusive updates,
                  new arrivals & insider-only discounts
                </p>

                <form className="flex items-center mb-[37px]">
                  <input
                    type="text"
                    className="py-[10px] px-[15px] active:outline-none outline-none border border-[#f5f5f5] bg-[#f5f5f5] mr-[10px] md:w-[254px] w-fit shadow-md"
                    placeholder="Enter your email"
                  />

                  <input
                    type="button"
                    value="Submit"
                    className="px-[15px] py-[10px] text-[16px] tracking-tighter leading-6 bg-[#232323] hover:bg-[#000f92] text-white cursor-pointer border border-[#3c3c3c] font-semibold transition-all duration-300"
                  />
                </form>

                <label className="flex items-center gap-3 text-[#2d2d2d] cursor-pointer">
                  <input type="checkbox" name="mailing" id="mailing" />
                  <span className="border-b border-[#6c6c6c]">No thanks</span>
                </label>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NewsLetter;
