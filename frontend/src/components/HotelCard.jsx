import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
assets;
const HotelCard = ({ room }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-15 w-full flex items-center justify-center mb-10 md:mb-15 ">
      <div className="border border-gray-300/20 shadow-lg rounded-lg overflow-hidden w-80 ml-2 ">
        <div className="mb-5">
          <div className="relative">
            <img
              src={room.images[0]}
              alt=""
              className="w-full overflow-hidden rounded-t-lg cursor-pointer"
              onClick={() => navigate(`/room/${room._id}`)}
            />
            <p className="absolute top-0 z-1 text-black m-3 px-2 border border-none rounded-full outline-none text-xs bg-white ">
              Best Seller
            </p>
          </div>
          <div className="px-3">
            <div className="mt-8 flex items-center justify-between">
              <p className="text-xl font-playfair">{room.hotel.name}</p>
              <div className="flex gap-2">
                <img src={assets.starIconFilled} alt="" />
                3.5
              </div>
            </div>

            <div className="flex text-sm text-gray-500 gap-1 items-center mt-1">
              <img src={assets.locationIcon} alt="" />
              <p>{room.hotel.address}</p>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <p className="text-xl">
                ${room.pricePerNight}
                <span className="text-sm text-gray-500">/night</span>
              </p>
              <button
                className="border px-4 py-2 rounded border-gray-300 text-sm cursor-pointer"
                onClick={() => navigate(`/room/${room._id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
