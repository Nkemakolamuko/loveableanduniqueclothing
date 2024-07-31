import React from 'react'
import {Link} from "react-router-dom"
import img from "../../assets/Image-6.jpg";

const About = () => {
  return (
    <div className="w-full px-4 mx-auto py-12 bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-md overflow-hidden w-[100%] md:w-[70%] mx-auto flex md:justify-center md:items-center h-full">
                <img src={img} alt="CEO" className="h-fit" />
            </div>
            <div class="w-full text-left">
              
                <p class="font-semibold mb-[16px] leading-[1.5rem]">CEO LOVEABLE & UNIQUE CLOTHING</p>
              
              
                <h3 class="font-semibold leading-[1.235rem] text-[2rem]">Mabel Iheke</h3>
              
              
                <div class="text-[#666666] leading-[1.5rem] mt-[16px]">
                    <p>Loveable & Unique Clothing was launched 2019/2020, after having worked for several Nigerian designers, to turn her unique vision and passion for fashion into a reality.<br/>Loveable & Unique Clothing is more than just a brand, it is an emotional string of socially aware stories and expressions cut into clothing; we believe fashion can and should save lives. It is a “movement” that covers universal silhouettes with an African touch to a creative class of people, translating into a heady mixture of Nigerian inspired print fabrics, color, and contemporary androgynous clothing. We believe clothing should be fluid and have the ability to be worn by any and every one.<br/></p>
                </div>
              
                <div class="mt-[34px]">
                  <Link to="/about" class="bg-white text-center border border-[#000000] text-[#000000] px-[32px] py-4 rounded-md hover:bg-black hover:text-white transition-all duration-300">Read more about us</Link>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default About
