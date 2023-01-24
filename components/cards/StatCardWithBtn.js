import { Button } from "@mui/material";
import React from "react";

const StatCardWithBtn = ({ title, value, bgColor = "linear-gradient(263.32deg, #230B34 0.96%, #8B31CA 100%)", className, titleClassName, actionText = "Withdraw" }) => {
  return (
    <div style={{ background: bgColor }} className={`w-full p-[2.2rem] px-[2.2rem] rounded-secondary relative overflow-hidden flex justify-between items-center min-w-[25rem] ${className}`}>
      <div>
        <h2 className={`mb-[1.6rem] leading-[19.4px] font-medium text-[1.5rem] text-white mt-2 ${titleClassName}`}>{title}</h2>
        <p className=" font-medium text-[2.8rem] leading-[38px] text-white">{value}</p>
      </div>
      <button className=" bg-white text-pv_primary max-w-[13.6rem] h-[5.2rem] border-none px-[3.6rem] rounded-primary font-rubik text-[1.4rem] font-semibold z-50 cursor-pointer">{actionText}</button>

      <div className=" absolute top-0 right-0 h-full">
        <img className="h-[10rem] w-auto scale-[1.45] absolute -left-[4.7rem] top-0" src="/card-path-2.png"></img>
        <div style={{ background: "rgba(255, 255, 255, 0.3)", borderRadius: "40px 8px 8px 40px" }} className="w-[20.5rem] rounded-secondary h-full"></div>
      </div>
    </div>
  );
};

export default StatCardWithBtn;
