import React from "react";

const Title = ({ title, subtitle, align }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-${align} text-left`}
    >
      <h1 className="text-center text-3xl md:text-4xl font-playfair mt-20 text-left">
        {title}
      </h1>
      <p className="text-center mt-2 sm:mt-3 w-full sm:max-w-xs md:max-w-md text-gray-400 text-xs sm:text-sm md:text-base font-medium">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
