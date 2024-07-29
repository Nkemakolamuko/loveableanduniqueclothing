import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

const slideVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "-100%" },
};

const SmallScreenNav = () => {
  const { showSmall, setShowSmall } = useContext(GlobalContext);
  return (
    <motion.div
      className="w-full bg-black/80 fixed z-50 h-[100vh] top-0 left-0"
      initial={{ opacity: 0 }}
      animate={showSmall ? { opacity: 1 } : { opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowSmall(false)}
    >
      <motion.button
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh" }}
        onClick={() => setShowSmall(false)}
        className="text-white absolute right-6 top-2 py-2 px-2 bg-rose-500"
      >
        Close
      </motion.button>
      <motion.div
        className="w-3/4 h-full bg-white shadow-lg p-4"
        variants={slideVariants}
        initial="hidden"
        animate={showSmall ? "visible" : "hidden"}
        exit="exit"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the card
      >
        <ul className="flex flex-col gap-4">
          <Link to="/" onClick={() => setShow(false)}>
            <li>Home</li>
          </Link>
          <Link to="/store" onClick={() => setShow(false)}>
            <li>Store</li>
          </Link>
          <Link to="/category" onClick={() => setShow(false)}>
            <li>Category</li>
          </Link>
          <Link to="/faq" onClick={() => setShow(false)}>
            <li>FAQ</li>
          </Link>
          <Link to="/collection" onClick={() => setShow(false)}>
            <li>Collection/Display</li>
          </Link>
          <Link to="/gallery" onClick={() => setShow(false)}>
            <li>Gallery</li>
          </Link>
          <Link to="/reviews" onClick={() => setShow(false)}>
            <li>Reviews</li>
          </Link>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default SmallScreenNav;
