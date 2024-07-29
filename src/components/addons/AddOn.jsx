import React from "react";
import AddOnCard from "./AddOnCard";
import { FaSave, FaShieldAlt, FaShoppingBag } from "react-icons/fa";
import { FaShield, FaTruckFast } from "react-icons/fa6";

const addOns = [
  {
    icon: <FaTruckFast className="w-16 h-16" />,
    title: "Free Standard Delivery",
    desc: "Place an order over ₦125, 000 and get free standard delivery.",
    id: 1,
  },
  {
    icon: <FaShoppingBag className="w-16 h-16" />,
    title: "Stress Free Returns",
    desc: "Not fully satisfied with your order? Follow our easy return guideline.",
    id: 2,
  },
  {
    icon: <FaShieldAlt className="w-16 h-16" />,
    title: "100% Guaranteed Satisfaction.",
    desc: "Our customer satisfaction is our priority. You are sure to join the train of testifiers.",
    id: 3,
  },
];

const AddOn = () => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 py-7 md:py-14 md:px-[80px] px-[10px] md:gap-4 gap-10 mt-4`}>
      {addOns.map((addOn) => {
        return (
          <AddOnCard
            icon={addOn.icon}
            title={addOn.title}
            desc={addOn.desc}
            key={addOn.id}
          />
        );
      })}
    </div>
  );
};

export default AddOn;
