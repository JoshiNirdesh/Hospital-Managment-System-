import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffer = () => {
  return (
    <div className="px-8 sm:px-10 md:px-16 lg:px-20 mb-25">
      <div className="flex items-center justify-between">
        <div className={`flex flex-col  justify-center text-left`}>
          <h1 className="text-left text-4xl font-playfair mt-20 ">
            Exclusive Offers{" "}
          </h1>
          <p className=" mt-3 w-130 text-gray-400 text-sm font">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.{" "}
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-15 text-gray-500">
          <p>Viwe All offers</p>
          <img src={assets.arrowIcon} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-7 rounded-lg mt-15">
        {exclusiveOffers.map((item) => (
          <div
            className="group relative flex flex-col items-start  bg-no-repeat bg-cover bg-center rounded-lg text-white px-6 py-4 "
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p className="bg-white text-black text-xs rounded-full px-3 py-1">{item.priceOff}% OFF</p>
            <h3 className="font-playfair mt-5 text-xl">{item.title}</h3>
            <p className="text-sm font-light">{item.description}</p>
            <p className="my-5 text-sm font-light text-gray-300">Expires {item.expiryDate}</p>
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
