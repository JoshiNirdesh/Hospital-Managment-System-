import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedHotel from "../components/FeaturedHotel";
import ExclusiveOffer from "../components/ExclusiveOffer";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedHotel />
      <ExclusiveOffer/>
    </>
  );
};

export default Home;
