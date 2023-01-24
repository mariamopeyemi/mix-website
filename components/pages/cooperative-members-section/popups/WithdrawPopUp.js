import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import PLVDesktopDatePicker from "../../../form-elements/PLVDesktopDatePicker";
import PLVMenu from "../../../form-elements/PLVMenu";
import SvgIconWrapper from "../../../general/SvgIconWrapper";
import TabFilled from "../../../general/TabFilled";
import PopupLayout from "../../../layouts/PopupLayout";

const WithdrawPopUp = ({ onAction = () => {}, onClose = () => {}, onOpenAddCard = () => {}, activeTopUpType }) => {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <PopupLayout onClose={onClose} title="Withdraw">
      <TextField
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
      <PLVMenu className=" bg-input my-[1.6rem]" items={["Zenith Bank - 23456543212"]}></PLVMenu>

      <p onClick={onOpenAddCard} className="text-label text-[1.6rem] font-medium flex items-center cursor-pointer">
        <SvgIconWrapper className={"w-[2rem] h-[2rem]"} iconName={"box-plus"}></SvgIconWrapper>
        <span className="ml-[1.6rem]">Add Account</span>
      </p>

      {/* <PLVDesktopDatePicker label="Select debit date"></PLVDesktopDatePicker> */}
      <Button
        onClick={() => {
          onAction();
        }}
        sx={{ mt: 5 }}
      >
        Next
      </Button>
      <span className=" mt-[1.7rem] font-semibold text-[1.4rem] leading-[20px] flex text-error">
        A 2.5% fee will be deducted from you wallet. Wait till your withdrawal date for free transactions.{" "}
      </span>
    </PopupLayout>
  );
};

export default WithdrawPopUp;
