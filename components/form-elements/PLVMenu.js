import Popper from "@mui/material/Popper";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import React, { useEffect, useRef, useState } from "react";
import SvgIconWrapper from "../general/SvgIconWrapper";

import PLVRadio from "./PLVRadio";

const PLVMenu = ({ items = ["love", "and", "hate"], onChange = () => {}, className = "bg-input", initText, error }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedValue, setSelectedValue] = useState(initText ?? items[0]);
  const open = Boolean(anchorEl);
  const id = open ? "basic-menu" : undefined;
  const openerRef = useRef();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleChange = (item) => {
    console.log("Value change", item);
    onChange(item);
    // setSelectedValue(event.target.value);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <button
        tabIndex={1}
        ref={openerRef}
        id={id}
        aria-controls={id}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        type="button"
        className={`flex items-center h-[var(--height-input)] justify-between rounded-primary p-[1.4rem]  border-0 w-full text-text ${className} ${error ? " !border border-error" : ""}`}
      >
        <p className={`"text-[1.6rem] font-normal flex mr-[8rem]  ${error ? " !text-error" : ""}`}>{selectedValue}</p>
        <SvgIconWrapper className={` !w-[18px] ${open ? "rotate-180" : ""} transition-all`} iconName={"chevron-down"}></SvgIconWrapper>
      </button>
      {error && <p className="text-error text-[1.2rem]">*{error}</p>}
      {/* Drop Down */}
      {/* <Popper id={id} open={open} anchorEl={anchorEl}> */}
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": `${open}`,
        }}
        sx={{
          "& .MuiMenu-paper": {
            width: openerRef?.current?.clientWidth,
            borderRadius: "var(--border-radius-primary)",
            boxShadow: "0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)",
            mt: "5px",
          },
        }}
      >
        {items?.map((item, i) => {
          // console.log(item.slug);
          return (
            <MenuItem
              onClick={(e) => {
                console.log("List element clikced parent");
                setSelectedValue(item);
                handleChange(item);
                handleClose();
              }}
              className="flex items-center justify-between px-8 py-[1.4rem] hover:bg-[#F0F3F9] cursor-pointer transition-all !border-b last:!border-b-0 border-border border-0 border-solid"
              key={i}
            >
              <span className=" text-[1.6rem] font-normal text-text mr-auto">{item}</span>
              <PLVRadio ariaLabel={"All"} isChecked={selectedValue == item} id={"All"} name="radio-buttons"></PLVRadio>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default PLVMenu;
