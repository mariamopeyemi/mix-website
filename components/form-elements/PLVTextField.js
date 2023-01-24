import { TextField } from "@mui/material";
import React from "react";

const PLVTextField = ({ type, name, variant = "filled" }) => {
  return <TextField name={name} type={type} id={name} label={name} variant={variant} />;
};

export default PLVTextField;
