import { InputAdornment } from "@mui/material";
import React, { useState } from "react";

const ShowPassword = ({ onChange = () => {} }) => {
  const [show, setShow] = useState(false);
  const toggleShowPassword = () => {
    if (show) {
      setShow(false);
      onChange("password");
    } else {
      setShow(true);
      onChange("text");
    }
  };
  return (
    <InputAdornment position="end">
      <span
        onClick={() => {
          toggleShowPassword();
        }}
        className="text-[1.6rem] font-normal underline underline-offset-2 cursor-pointer text-pv_primary"
      >
        {show ? "Hide" : "Show"}
      </span>
    </InputAdornment>
  );
};

export default ShowPassword;
