import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  return (
    <div className=" w-full h-[77px] flex items-center fixed text-white  z-10">
      <nav
        className={`flex items-center justify-between px-8 sm:px-10 md:px-14 lg:px-20 w-full bg-white text-black h-[77px] border border-gray-300 shadow-lg`}
      >
        <div>
          <img
            src={assets.logoblack}
            alt=""
            className="text-black cursor-pointer md:w-30"
            onClick={() => {
              navigate("/");
              scrollTo(0, 0);
            }}
          />
        </div>
        <ul className="hidden md:flex items-center gap-10 sm:h-9 md:h-10 md:text-sm ">
          <Link to="/">Home</Link>
          <Link to="/room">Hotels</Link>
          <Link to="/experience">Experiences</Link>
          <Link to="/about">About</Link>
        </ul>
        <div className="hidden md:flex items-center gap-8 ">
          <button
            className="bg-black px-7 text-sm py-2 md:px-5 md:py-1.5 md:text-xs rounded-full text-white"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>

        <div className="md:hidden cursor-pointer ">
          <img
            src={assets.menuIcon}
            alt=""
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-7"
          />
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white fixed top-0 left-0 w-full h-100 ">
          <img
            src={assets.closeMenu}
            className="fixed right-0 p-4"
            alt=""
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

          <div className="px-10 py-20">
            <ul className="flex flex-col gap-7 text-black text-base w-full items-center ">
              <Link to="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                Home
              </Link>
              <Link
                to="/room"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  scrollTo(0, 0);
                }}
              >
                Hotels
              </Link>
              <Link
                to="/experience"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  scrollTo(0, 0);
                }}
              >
                Experiences
              </Link>
              <Link
                to="/about"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  scrollTo(0, 0);
                }}
              >
                About
              </Link>
              <li>
                <button
                  onClick={() => {
                    navigate("/login");
                    setIsMenuOpen(!isMenuOpen);
                    scrollTo(0, 0);
                  }}
                  className="w-30 bg-black py-2 rounded-full text-white"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
