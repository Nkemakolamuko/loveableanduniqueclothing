import React from "react";
import { FaCheck } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Cookies = ({ cookie, handleClose }) => {
  return (
    <AnimatePresence>
      {cookie && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.5 }}
          className="fixed z-[99] bottom-[15px] md:left-[15px] md:w-[368px] w-full p-4 bg-[rgba(20,20,20,0.9)]"
        >
          <div className="flex flex-col text-[#fffff] text-[16px] leading-7 font-semibold">
            <p className="text-[#ccc] text-[14px]">
              The cookie settings on this website are set to 'allow all cookies'
              to give you the very best experience. Please click Accept Cookies
              to continue to use the site.
            </p>
            <p className="flex items-center mt-[10px] gap-5 justify-end text-[18px]">
              <a
                href="#"
                title="To Privacy Policy"
                className="hover:text-[#818181] leading-7 text-[#3c3c3c] cursor-pointer transition-all duration-300"
                onClick={handleClose}
              >
                PRIVACY POLICY
              </a>

              <a
                href="#"
                title="Accept"
                className="flex items-center leading-7 text-[#f1f1f1] cursor-pointer hover:text-[#3c3c3c] gap-2 transition-all duration-300"
                onClick={handleClose}
              >
                <span>ACCEPT</span>
                <FaCheck />
              </a>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cookies;
