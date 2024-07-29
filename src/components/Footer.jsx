import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { toast, Toaster } from 'react-hot-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/movaezyz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success('Subscribed successfully!');
        setEmail('');
      } else {
        toast.error('Subscription failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-200 py-6 flex justify-center w-full">
      <div className="w-full max-w-7xl flex flex-col items-center px-4">
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 md:mb-14 mb-7 w-full">
          <div className="flex-1 mb-[20px] md:mb-[0px]">
            <h2 className="mb-4 font-semibold">Join Our Special Newsletter</h2>
            <p className="mb-4">
              Sign up for new arrivals, offers and lots more goodies!
            </p>
            <form onSubmit={handleSubmit} className="flex items-center mb-4 w-full shadow-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 px-2 text-slate-700 bg-white outline-none w-[70%]"
                placeholder="Your Email"
                required
                disabled={isLoading}
              />
              <input
                type="submit"
                value={isLoading ? "Submitting..." : "Submit"}
                className="py-3 px-3 w-[30%] bg-black text-white cursor-pointer"
                disabled={isLoading}
              />
            </form>
            <div className="flex items-center gap-4 md:gap-8 text-[24px]">
              <a href="https://www.facebook.com" title="Check out our Facebook page">
                <FaFacebook className="hover:text-blue-700 cursor-pointer transition-all" />
              </a>
              <a href="https://www.x.com" title="Check out our Twitter (X) page">
                <FaXTwitter className="cursor-pointer" />
              </a>
              <a href="https://www.instagram.com" title="Check out our Instagram page">
                <FaInstagram className="hover:text-purple-600 cursor-pointer transition-all" />
              </a>
              <a href="https://www.tiktok.com" title="Check out our TikTok page">
                <FaTiktok className="cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="hidden md:block w-1 h-full bg-black"></div>

          <div className="flex-1">
            <h2 className="font-semibold mb-4">Contact Us Today</h2>
            <p className="flex items-center gap-3 mb-4">
              <FaPhone />
              <a href="tel:+2348012345678">08012345678</a>
            </p>
            <p className="flex items-center gap-3 mb-4">
              <FaEnvelope />
              <a href="mailto:loveableclothing@gmail.com">loveableclothing@gmail.com</a>
            </p>
            <p className="flex items-center gap-3 mb-4">
              <FaLocationDot />
              <span>Abuja / Abia State</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-6">
          <div className="flex flex-col">
            <p className="mb-4 font-semibold">Help Links</p>
            <a href="/" className="mb-2">T&C's</a>
            <a href="/" className="mb-2">FAQ</a>
            <a href="/" className="mb-2">Privacy Policy</a>
            <a href="/" className="mb-2">About Us</a>
            <a href="/" className="mb-2">Become An Intern</a>
          </div>
          <div className="flex flex-col">
            <p className="mb-4 font-semibold">Delivery and Returns</p>
            <a href="/" className="mb-2">Refund Policy</a>
            <a href="/" className="mb-2">Track my Order</a>
          </div>
          <div className="flex flex-col">
            <p className="mb-4 font-semibold">Shop With Us</p>
            <a href="/" className="mb-2">Locate Us</a>
            <a href="/" className="mb-2">Contact Us</a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <p className="mb-2 border-b border-slate-500 w-full text-center">
            2024 LOVEABLE CLOTHING
          </p>
          <p>All Rights Reserved</p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Footer;
