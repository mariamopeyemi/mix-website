import React from "react";
import PlainContainer from "./PlainContainer";

const PlainContainerTitle = ({ children, title = "Title", actionText, onAction, className, isStrechedMobile = true }) => {
  return (
    <PlainContainer isStrechedMobile={isStrechedMobile} className={className}>
      <div className={`pb-[1.2rem] w-full border-0 border-b border-solid border-border flex justify-between`}>
        <h3 className=" text-[1.6rem] font-semibold text-[#666668] font-rubik">{title}</h3>
        <p className=" cursor-pointer">{actionText}</p>
      </div>
      {children}
    </PlainContainer>
  );
};

export default PlainContainerTitle;
