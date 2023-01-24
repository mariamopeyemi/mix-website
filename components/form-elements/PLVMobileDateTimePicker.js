import { InputAdornment, TextField } from "@mui/material";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import SvgIconWrapper from "../general/SvgIconWrapper";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const PLVMobileDateTimePicker = ({ label = "Date desktop", className, helperText, onChange = () => {}, error, name, initialDate = null }) => {
  const [value, setValue] = React.useState(initialDate);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  // return (
  //   <LocalizationProvider dateAdapter={AdapterMoment}>
  //     <MobileDateTimePicker
  //       label="Date desktop"
  //       inputFormat="MM/dd/yyyy"
  //       value={value}
  //       onChange={handleChange}
  //       renderInput={(params) => (
  //         <TextField
  //           variant="filled"
  //           {...params}
  //           InputProps={{
  //             id: "date-time-picker",
  //             endAdornment: (
  //               <InputAdornment position="end">
  //                 <label className="p-[8px]" htmlFor="date-time-picker">
  //                   <SvgIconWrapper className={" !text-pv_primary cursor-pointer mt-3 mr-[-12px] "} iconName={"calendar"}></SvgIconWrapper>
  //                 </label>
  //               </InputAdornment>
  //             ),
  //           }}
  //         />
  //       )}
  //     />
  //   </LocalizationProvider>
  // );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDateTimePicker
        label={label}
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
            InputProps={{
              id: "date-time-picker",
              endAdornment: (
                <InputAdornment position="end">
                  <label className="p-[8px]" htmlFor="date-time-picker">
                    {/* <SvgIconWrapper className={" !text-pv_primary cursor-pointer mt-3 mr-[-12px] "} iconName={"calendar"}></SvgIconWrapper> */}
                    <img src={"/svg-icons/calendar.svg"} className={" !text-pv_primary cursor-pointer mt-3 mr-[-12px] "} iconName={"calendar"} />
                  </label>
                </InputAdornment>
              ),
            }}
          />
        )}
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

export default PLVMobileDateTimePicker;
