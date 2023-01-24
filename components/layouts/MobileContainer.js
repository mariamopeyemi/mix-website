import React from "react";

const MobileContainer = ({ children, className }) => {
  return <div className={`max-w-[1400px] w-full px-[2rem] md:px-[0rem] ${className}`}>{children}</div>;
};

export default MobileContainer;
