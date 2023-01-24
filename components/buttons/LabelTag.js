import React from "react";

const LabelTag = ({status, text, }) => {
  return (
    <>
        {status == "success" && (
        <div
        className={`text-[#137C4B] bg-[#d2f2e3] rounded-[5px] h-[2.6rem] w-[100px] text-center flex px-[1rem] items-center justify-center`}
        >
        <p className=" !text-[1.4rem]">{text}</p>
        </div>)}
        {status == "warn" && (
        <div
        className={`  bg-[rgba(255,113,21,0.17)]   rounded-[5px] h-[2.6rem] w-[100px] text-center flex px-[1rem] items-center justify-center`}
        >
        <p className=" !text-[1.4rem] text-[#FF7115] ">{text}</p>
        </div>)}
        {status == "error" && (
        <div
        className={`text-[#C31331] bg-[#f7dee2] rounded-[5px] h-[2.6rem] w-[100px] text-center flex px-[1rem] items-center justify-center`}
        >
        <p className=" !text-[1.4rem]">{text}</p>
        </div>)}
        {status == "progress" && (
        <div
        className={`text-[#3A76EC] bg-[#cddbf8] rounded-[5px] h-[2.6rem] w-[100px] text-center flex px-[1rem] items-center justify-center`}
        >
        <p className=" !text-[1.4rem]">{text}</p>
        </div>)}
    </>
  );
};

export default LabelTag;