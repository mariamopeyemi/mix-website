import React from "react";

const EmptyState = ({ img, caption, className, imgClassName }) => {
  return (
    <div className={`w-full h-full grid justify-center content-center justify-items-center ${className}`}>
      <img height={111} className={`"h-[11.1rem] w-auto ${imgClassName}`} alt="empty-state-img" src={img}></img>
      <span className="text-text font-medium text-[1.6rem] mt-[1.2rem]">{caption}</span>
    </div>
  );
};

export default EmptyState;
