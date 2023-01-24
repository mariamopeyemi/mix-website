import React from "react";
import SvgIconWrapper from "./SvgIconWrapper";

const DocBox = ({ title }) => {
  return (
    <div style={{ border: "1px solid rgba(19, 124, 75, 0.3)" }} className="bg-[#E7EBED] grid justify-center items-center h-[19.2rem] rounded-primary">
      <div className="grid gap-[1.6rem] justify-center items-center place-content-center place-items-center">
        <SvgIconWrapper iconName={"document"}></SvgIconWrapper>
        <p className=" text-label text-[1.6rem]">{title}</p>
      </div>
    </div>
  );
};

export default DocBox;
