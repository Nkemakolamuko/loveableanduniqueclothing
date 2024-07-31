import React, { useEffect, useRef } from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa";

const Sponsors = () => {
  const containerRef = useRef(null);

  const sponsors = [
    "God",
    <FaPaypal />,
    <FaCcMastercard />,
    <FaCcVisa />
  ];

  // Duplicating the list to create an infinite scroll effect
  const repeatedSponsors = [...sponsors, ...sponsors];

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth / 2;

    const scroll = () => {
      if (container.scrollLeft >= scrollWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 20); // Adjust speed here

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="md:my-8 my-6">
      <h2 className="font-semibold text-slate-800 mb-4 text-center text-[24px]">
        Our Sponsors
      </h2>
      <div
        ref={containerRef}
        className="overflow-hidden relative border border-gray-300 bg-gray-100 w-full md:w-[70%] mx-auto h-16 mb-4"
      >
        <div className="flex items-center h-full whitespace-nowrap">
          {repeatedSponsors.map((sponsor, index) => (
            <div
              className="px-4 text-gray-800 border-r border-gray-200"
              key={index}
            >
              {sponsor}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
