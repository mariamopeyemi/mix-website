import { InputAdornment, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import SvgIconWrapper from "../general/SvgIconWrapper";

const PLVDesktopDatePicker = ({ label = "Date desktop", className, helperText, onChange = () => {}, error, name, initialDate = null }) => {
  // const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));
  const [value, setValue] = React.useState(initialDate);
  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={label}
        // open={true}
        renderInput={(params) => (
          <TextField
            helperText={helperText}
            variant="filled"
            className={className}
            {...params}
            error={error}
            name={name}
            onChange={(e) => {
              console.log("inputdatechange", e);
            }}
            // InputProps={{
            //   endAdornment: <InputAdornment position="start">kg</InputAdornment>,
            // }}
          />
        )}
        components={{
          OpenPickerIcon: () => {
            return <img src={"/svg-icons/calendar.svg"} className={" !text-pv_primary cursor-pointer"} iconName={"calendar"} />;
          },
        }}
        // inputFormat="MM/dd/yyyy"
        value={value}
        onChange={(e) => {
          console.log("Change is ", e?.$d);
          setValue(e);
          onChange(e?.$d);
        }}
      />
    </LocalizationProvider>
  );
};

export default PLVDesktopDatePicker;
