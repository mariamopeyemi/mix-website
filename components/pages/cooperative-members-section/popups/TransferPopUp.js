import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import PLVDesktopDatePicker from "../../../form-elements/PLVDesktopDatePicker";
import PLVRadio from "../../../form-elements/PLVRadio";
import Hrule from "../../../general/Hrule";
import SvgIconWrapper from "../../../general/SvgIconWrapper";
import TabFilled from "../../../general/TabFilled";
import PopupLayout from "../../../layouts/PopupLayout";

const TransferPopup = ({ onAction = () => {}, onClose = () => {} }) => {
  const transferTypes = ["Wallet", "Invest"];
  const [activeCard, setActiveCard] = useState(0);
  const [transferTo, setTranferTo] = useState("Wallet");
  return (
    <PopupLayout onClose={onClose} title="Transfer">
      <TextField
        inputProps={{ min: 0 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">&#8358;</InputAdornment>,
          // sx: { "&.MuiFilledInput-input": { paddingLeft: "0" } },
        }}
        name="Amount"
        type={"number"}
        id="Amount to save per time"
        label="Amount"
        variant="filled"
      />
      <span className=" mt-[2.4rem] mb-[1.6rem] text-label flex">Transfer To</span>
      <TabFilled
        onChange={(item) => {
          setTranferTo(item);
        }}
        active={transferTo}
        items={transferTypes}
      ></TabFilled>

      {/* <PLVDesktopDatePicker label="Select debit date"></PLVDesktopDatePicker> */}
      <Button
        onClick={() => {
          onAction();
        }}
        sx={{ mt: 5 }}
      >
        Transfer
      </Button>
    </PopupLayout>
  );
};

export default TransferPopup;
