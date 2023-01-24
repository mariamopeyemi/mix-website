import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import ShowPassword from "../../../form-elements/ShowPassword";
import PlainContainer from "../../../layouts/PlainContainer";

const Settings = () => {
  const [passType, setPassType] = useState("password");
  return (
    <div className="grid gap-[2rem]">
      <PlainContainer>
        <TextField label="Transaction Pin" name="Transaction Pin" id="Transaction Pin"></TextField>
      </PlainContainer>
      <PlainContainer className={"mb-[3.2rem]"}>
        <p className="mb-[2.3rem] text-pv_dark font-medium">Update Password</p>
        <div className="grid  gap-[1.7rem]">
          <TextField
            type={passType}
            InputProps={{
              endAdornment: (
                <ShowPassword
                  onChange={(type) => {
                    setPassType(type);
                  }}
                ></ShowPassword>
              ),
            }}
            label="Input Old Password  "
            name="Input Old Password  "
            id="Input Old Password  "
          ></TextField>
          <TextField
            type={passType}
            InputProps={{
              endAdornment: (
                <ShowPassword
                  onChange={(type) => {
                    setPassType(type);
                  }}
                ></ShowPassword>
              ),
            }}
            label="Input New Password  "
            name="Input New Password  "
            id="Input New Password  "
          ></TextField>
        </div>
      </PlainContainer>
      <Button className="max-w-[20.6rem]">Update</Button>
    </div>
  );
};

export default Settings;
