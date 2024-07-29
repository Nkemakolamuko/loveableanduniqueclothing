import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img from "../../assets/articles.jpg";

const Gallery = () => {
  return (
    <div className="md:px-4 px-2 py-8 mt-4">
      <h2 className="font-semibold text-slate-800 mb-4 text-center text-[24px]">
        Gallery Speaks
      </h2>
      <p className="mb-4 text-center w-full">
        <Link
          to="/gallery"
          className="underline underline-offset-1 text-slate-600"
        >
          View All
        </Link>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-4 gap-2">
        <AnimatePresence>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden w-full flex items-center justify-center relative h-[50vh] sm:h-[100vh] transition-transform duration-150"
          >
            <img
              src={"https://plus.unsplash.com/premium_photo-1702058276403-ea6cfaf4f8f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGljdHVyZSUyMG9mJTIwYmxhY2slMjBsYWRpZXN8ZW58MHx8MHx8fDA%3D"}
              alt="Ankara Clothes"
              className="w-full h-full object-cover hover:scale-105 hidden md:block transition-transform duration-300"
            />
            <img
              src={"https://images.unsplash.com/photo-1638158894759-47edf16f80a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBsYWRpZXN8ZW58MHx8MHx8fDA%3D"}
              alt="Ankara Clothes"
              className="w-full h-full object-cover hover:scale-105 md:hidden block transition-transform duration-300"
            />
            <div className="flex items-center bottom-5 absolute justify-between rounded w-[90%] shadow-sm hover:shadow-none shadow-white py-3 bg-black/80 text-white border border-slate-800 px-4 cursor-pointer group transition-all duration-300">
              <p className="group-hover:underline">Ankara Outfits</p>
              <p className="rounded-full flex items-center justify-center p-2 bg-white text-black group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaArrowRightLong />
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 justify-center h-[100vh]">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden relative flex items-center justify-center w-full transition-transform duration-150 h-[50vh] sm:h-[49vh]"
            >
              <img
                src={
                  "https://plus.unsplash.com/premium_photo-1705351823395-f31e73af2484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBpY3R1cmUlMjBvZiUyMGJsYWNrJTIwbGFkaWVzfGVufDB8fDB8fHww"
                }
                alt="Ankara Clothes"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="flex items-center bottom-5 absolute justify-between rounded w-[90%] shadow-sm hover:shadow-none shadow-white py-3 bg-black/80 text-white border border-slate-800 px-4 cursor-pointer group transition-all duration-300">
                <p className="group-hover:underline">Track-Suits</p>
                <p className="rounded-full flex items-center justify-center p-2 bg-white text-black group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <FaArrowRightLong />
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden relative flex items-center justify-center w-full transition-transform duration-150 h-[50vh] sm:h-[49vh]"
            >
              <img
                src={
                  "https://plus.unsplash.com/premium_photo-1705351823395-f31e73af2484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBpY3R1cmUlMjBvZiUyMGJsYWNrJTIwbGFkaWVzfGVufDB8fDB8fHww"
                }
                alt="Ankara Clothes"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="flex items-center bottom-5 absolute justify-between rounded w-[90%] shadow-sm hover:shadow-none shadow-white py-3 bg-black/80 text-white border border-slate-800 px-4 cursor-pointer group transition-all duration-300">
                <p className="group-hover:underline">Senator Outfits</p>
                <p className="rounded-full flex items-center justify-center p-2 bg-white text-black group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <FaArrowRightLong />
                </p>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;