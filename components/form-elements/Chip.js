import React from "react";
import ClearIcon from '@mui/icons-material/Clear';

const Chip = ({ action, text }) => {
  return (
    <div className="h-[3.6rem]  rounded-[8px] border border-black bg-[#DADEDF] flex items-center justify-between px-[16px] py-[8px] body_heavy ">
      <span className="mr-[1.4rem] text-black">{text}</span>{" "}
      <span
        onClick={() => {
          action();
        }}
        className="my-[auto] cursor-pointer"
      >
          <ClearIcon />
      </span>
    </div>
  );
};

export default Chip;

