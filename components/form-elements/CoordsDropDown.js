// import React, {useState} from "react";
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// const CoordsDropDown = ({  onClose, items = [] }) => {
// // const CoordsDropDown = ({ clickCoords = [-1, -1],  onClose, items = [] }) => {

//     const [show, setShow] = useState(false);
//   return (
//     <>
//      <p onClick={()=>setShow(!show)}
//         className=" relative top-0 left-0  "
//         ><MoreHorizIcon  /></p>
//       {show && (
//         <div className="absolute top-0 left-0 z-[51] overflow-y-scroll overflow-x-hidden p-12">
       
//           <div
//             onClick={() => {
//                 setShow(false);
//             }}
//             // onClose={() => {
//             //     setShow(false);
//             //   }}
//             className=" w-screen h-screen relative  "
//           >
//             <ul
//             //   style={{ top: `${clickCoords[1]}px`, right: `${clickCoords[0]}px` }}
//               className={" rounded-[5px] bg-white w-[200px] overflow-hidden absolute mb-8 top-[0px] z-[52] right-[0px] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.1)] -translate-x-[90%]"}
//             >
//               {items.map((item, i) => {
//                 return (
//                   <li
//                     key={i}
//                     onClick={() => {
//                       item.action ? item.action() : "";
//                     }}
//                     className="py-[19px] px-[27px] hover:bg-[#F8F9F9] hover:text-black body_heavy cursor-pointer"
//                     style={{ color: `${item.color ? item.color : ""}` }}
//                   >
//                     {item.text}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       )} 
//     </>
//   );
// };

// export default CoordsDropDown;


import Popper from "@mui/material/Popper";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import React, { useEffect, useRef, useState } from "react";
import SvgIconWrapper from "../general/SvgIconWrapper";

import PLVRadio from "./PLVRadio";

const CoordsDropDown = ({ items = [], onChange = () => {}, }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [selectedValue, setSelectedValue] = useState(initText ?? items[0]);
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
      <p
        tabIndex={1}
        ref={openerRef}
        id={id}
        aria-controls={id}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        type="button"
        // -[var(--height-input)] 
        className={`flex items-center h-4 justify-between rounded-primary p-[1.4rem]  border-0 w-full text-text  `}
      >
        <p className=" border-white px-10"><MoreHorizIcon  /></p>
      </p>
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
          return (
            <MenuItem
              onClick={
                (e) => {
                console.log("List element clikced parent");
                item.action ? item.action() : "";
                // setSelectedValue(item);
                handleChange(item);
                handleClose();
              }
            }
              className=" h-[var(--height-input)]  w-full  flex items-center justify-between px-8 py-[1.4rem] hover:bg-[#F0F3F9] cursor-pointer transition-all !border-b last:!border-b-0 border-border border-0 border-solid"
              key={i}
            >
              <span  
               style={{ color: `${item.color ? item.color : ""}` }}
              className=" text-[1.6rem] font-bold text-text mr-auto">{item.text}</span>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default CoordsDropDown;

