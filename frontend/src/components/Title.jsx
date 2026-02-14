import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-center text-4xl font-playfair mt-20">{title}</h1>
      <p className=" text-center mt-3 w-160 text-gray-400 text-sm font">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
