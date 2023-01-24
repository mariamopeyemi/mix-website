import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import PLVRadio from "./PLVRadio";

const PLVMenu2 = ({ items = ["love", "and", "hate"] }) => {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <TextField label="select bank" id="select" select onChange={handleChange} value={value}>
      {items?.map((item, i) => {
        return (
          <MenuItem
            value={item}
            // className="flex items-center justify-between px-8 py-[1.4rem] hover:bg-[#F0F3F9] cursor-pointer transition-all !border-b last:!border-b-0 border-border border-0 border-solid"
            key={i}
          >
            <div>
              <span className=" text-[1.6rem] font-normal text-text mr-auto">{item}</span>
              {/* <PLVRadio ariaLabel={"All"} isChecked={value == item} id={"All"} name="radio-buttons"></PLVRadio> */}
            </div>
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default PLVMenu2;
