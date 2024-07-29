import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGreaterThan, FaPersonDress, FaScissors } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sample images from Unsplash
const images = [
  {
    src: "https://images.unsplash.com/photo-1485570661444-73b3f0ff9d2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwbGFkaWVzfGVufDB8fDB8fHww",
    text: "Chic Summer Look"
  },
  {
    src: "https://images.unsplash.com/photo-1681545303529-b6beb2e19f02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBsYWRpZXN8ZW58MHx8MHx8fDA%3D",
    text: "Elegant Evening Wear"
  },
  {
    src: "https://images.unsplash.com/photo-1630726410985-a1021e8a232a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBsYWRpZXN8ZW58MHx8MHx8fDA%3D",
    text: "Casual Street Style"
  }
];

const Hero = () => {
  return (
    <div className="relative h-[86vh] md:h-[86vh] w-full bg-slate-100 overflow-hidden">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <div key={index} className="relative h-[86vh] md:h-[86vh]">
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="object-cover h-full w-full"
            />
            <p className="absolute bottom-4 md:mb-0 mb-6 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
              {image.text}
            </p>
          </div>
        ))}
      </Carousel>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-4 md:p-8 lg:p-12">
        <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold tracking-widest leading-10 mb-4 text-slate-700 bg-white bg-opacity-50 p-2 rounded">
          NEW ARRIVALS
        </h2>
        <Link
          to="/new-arrivals"
          className="py-2 px-6 bg-neutral-800 text-slate-100 shadow rounded hover:bg-neutral-950 hover:text-white flex items-center gap-6 transition-all duration-300"
        >
          <FaShoppingCart className="w-7 h-7" />
          <span className="font-medium text-[16px] md:text-[20px] lg:text-[24px]">SHOP NOW</span>
        </Link>
      </div>

      {/* <div className="absolute -left-20 bottom-20 opacity-5 rotate-12 hidden lg:block">
        <FaScissors className="w-[400px] h-[400px]" />
      </div> */}
    </div>
  );
};

export default Hero;
