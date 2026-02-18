import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffer = () => {
  return (
    <div className="px-8 sm:px-10 md:px-16 lg:px-20 mb-25 ">
      <div className="flex items-center justify-between mt-5 md:mt-10 lg:mt-20 ">
        <div className={`flex flex-col  justify-center text-left `}>
          <h1 className="text-center text-3xl md:text-4xl font-playfair mt-20 ">
            Exclusive Offers
          </h1>
          <p className="text-center mt-2 sm:mt-3 w-full sm:max-w-xs md:max-w-md text-gray-400 text-xs sm:text-sm md:text-base font-medium">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>
        <div className="flex hidden md:flex items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 text-gray-500 text-sm sm:text-base">
          <p>View All offers</p>
          <img
            src={assets.arrowIcon}
            alt=""
            className="w-3 sm:w-4 h-3 sm:h-4"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:grid-cols-3 gap-7 rounded-lg mt-15">
        {exclusiveOffers.map((item) => (
          <div
            className="group relative flex flex-col items-start  bg-no-repeat bg-cover bg-center rounded-lg text-white px-6 py-4 "
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p className="bg-white text-black text-xs rounded-full px-3 py-1">
              {item.priceOff}% OFF
            </p>
            <h3 className="font-playfair mt-5 text-xl">{item.title}</h3>
            <p className="text-sm font-light">{item.description}</p>
            <p className="my-5 text-sm font-light text-gray-300">
              Expires {item.expiryDate}
            </p>
            <div></div>
            <p>View More </p>
            <img src={assets.arrowIcon} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffer;
