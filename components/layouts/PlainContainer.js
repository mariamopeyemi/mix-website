import React from "react";

const PlainContainer = ({ children, className, isStrechedMobile = true }) => {
  return <div className={` bg-white p-[2.6rem] px-[2.6rem] md:!rounded-secondary ${isStrechedMobile ? "" : " rounded-primary"} h-max w-full ${className}`}>{children}</div>;
};

export default PlainContainer;
