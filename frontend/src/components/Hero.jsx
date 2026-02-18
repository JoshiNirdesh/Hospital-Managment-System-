import React from "react";
import heroImage from "../assets/heroImage.png";
import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <div
      className="flex flex-col items-start justify-center w-full min-h-[80vh] sm:h-screen bg-cover bg-center bg-no-repeat text-white px-4 sm:px-8 md:px-16 lg:px-20"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="px-8 sm:px-10 md:px-16 lg:px-20">
        <p className="bg-[#49B9FF80]/50  px-2 py-1 md:px-4 rounded-full text-sm md:text-lg mt-20 w-55 md:w-70">
          The Ultimate Hotel Experience
        </p>
        <h1 className="font-playfair text-3xl font-extrabold md:text-5xl font-medium md:font-extrabold max-w-xl mt-4">
          Discover Your Perfect Gateway Destination
        </h1>
        <p className="text-sm mt-4 max-w-xl">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </p>
        <form
          action=""
          className="hidden md:flex bg-white text-black flex items-center gap-15 px-3 py-2.5 mt-6 rounded-lg"
        >
          <div>
            <div className="flex gap-1 text-sm text-gray-500">
              <img src={assets.locationIcon} alt="" />
              <label htmlFor="">Destination</label>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className=" mt-1 px-2 text-sm   rounded-sm"
            />
          </div>

          <div>
            <div className="flex gap-1 text-sm text-gray-500">
              <img src={assets.calenderIcon} alt="" />
              <label htmlFor="">Check In</label>
            </div>
            <input
              type="date"
              className=" mt-1 px-2 text-sm  rounded-sm text-gray-500"
            />
          </div>
          <div>
            <div className="flex gap-1 text-sm text-gray-500">
              <img src={assets.calenderIcon} alt="" />
              <label htmlFor="">Check out</label>
            </div>
            <input
              type="date"
              className=" mt-1 px-2 text-sm  rounded-sm text-gray-500"
            />
          </div>
          <div>
            <div className="flex gap-1 text-sm text-gray-500">
              <label htmlFor="">Guest</label>
            </div>
            <input
              type="text"
              className=" mt-1 px-2 text-sm  rounded-sm text-gray-500 w-10"
            />
          </div>

          <button className="bg-black text-white rounded-sm">
            <div className="flex px-4 py-1 text-sm items-center gap-1 ">
              <img src={assets.searchIcon} alt="" />
              <p>Search</p>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
