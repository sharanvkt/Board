import React from "react";

const Card = ({ title, numbers, backgroundColor, icon }) => {
  return (
    <div
      className={`rounded-2xl py-6 px-7 ${backgroundColor} flex flex-col  items-start`}
    >
      <div className="ml-auto">
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>
      <div className="text-left">
        <h3 className="text-black font-sans text-sm">{title}</h3>
        <p className="text-black font-bold text-2xl">{numbers}</p>
      </div>
    </div>
  );
};

export default Card;
