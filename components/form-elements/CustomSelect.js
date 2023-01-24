import Popper from "@mui/material/Popper";

import React, { useEffect, useRef, useState } from "react";
import SvgIconWrapper from "../general/SvgIconWrapper";

import PLVRadio from "./PLVRadio";

const CustomSelect = ({ items = ["love", "and", "hate"], onChange = () => {}, selectClassName = "bg-white" }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedValue, setSelectedValue] = useState(items[0]);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const openerRef = useRef();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleChange = (event) => {
    console.log("Value change", event.target.value);
    onChange(event.target.value);
    // setSelectedValue(event.target.value);
  };

  return (
    <div className=" relative">
      <button
        ref={openerRef}
        onClick={handleClick}
        aria-describedby={id}
        type="button"
        className="flex items-center justify-between bg-white rounded-primary p-[1.6rem] outline-none border-none w-full"
      >
        <span className="text-[1.6rem] font-normal text-label">{selectedValue}</span>
        <SvgIconWrapper className={" !w-[18px]"} iconName={"chevron-down"}></SvgIconWrapper>
      </button>
      {/* Drop Down */}
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div
          style={{ boxShadow: "0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)", width: openerRef?.current?.clientWidth }}
          className={` max-h-[26.25rem] w-full scroll_hide overflow-y-scroll overflow-x-hidden bg-white  p-2 rounded-primary border border-border border-solid z-30 transition-all ${
            open ? " visible opacity-100" : "opacity-0 invisible"
          }`}
        >
          <ul role={"menu"} tabIndex={-1} className="w-full">
            {items?.map((item, i) => {
              // console.log(item.slug);
              return (
                <li
                  role="menuitem"
                  tabIndex={0}
                  onClick={(e) => {
                    console.log("List element clikced parent");
                    setSelectedValue(item);
                  }}
                  className="flex items-center justify-between px-8 py-[1.6rem] hover:bg-[#F0F3F9] cursor-pointer transition-all !border-b last:!border-b-0 border-border border-0 border-solid"
                  key={i}
                >
                  <span className=" text-[1.6rem] font-normal text-text mr-auto">{item}</span>
                  <PLVRadio ariaLabel={"All"} isChecked={selectedValue == item} onChange={handleChange} id={"All"} name="radio-buttons"></PLVRadio>
                </li>
              );
            })}
          </ul>
        </div>
      </Popper>
    </div>
  );
};

export default CustomSelect;
