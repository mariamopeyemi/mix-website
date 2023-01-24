import { Dialog } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { updatePersonalGoalSavings } from "../../../../services/cooperative-members.js";
import formatNumberWithCommas from "../../../../utils/addCommas";
import formatDate from "../../../../utils/formatDate";
import CurrencySymbol from "../../../general/CurrencySymbol";
import SvgIconWrapper from "../../../general/SvgIconWrapper";
import PlainContainer from "../../../layouts/PlainContainer";
import AutoSavePopUp from "../popups/AutoSavePopUp";

const SavingsInfo = ({ saving, onUpdateAutoSave = () => {} }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const calculateBreakDown = (amt, months, frq) => {
    // console.log(amt, months, frq);
    if (frq == "Daily") {
      return amt / (months * 30);
    }
    if (frq == "Weekly") {
      return amt / (months * 4);
    }
    if (frq == "Monthly") {
      return amt / months;
    }
  };
  return (
    <>
      <Dialog scroll="body" onClose={handleClose} open={open}>
        <AutoSavePopUp saving={saving} onClose={handleClose} onUpdateAutoSave={onUpdateAutoSave}></AutoSavePopUp>
      </Dialog>
      <PlainContainer isStrechedMobile={false} className={" !p-[2.4rem] mb-[1.6rem]"}>
        <header className="flex items-center justify-between mb-[1rem]">
          <h3 className=" text-pv_dark font-medium">Savings Info</h3>
          <span className=" text-text text-[1.4rem] font-semibold">Autosave is {saving?.autoDebit ? "ON" : "OFF"}</span>
        </header>
        <div className={" rounded-secondary p-[1.6rem]  mb-[.8rem] bg-[rgba(58,117,236,0.14)]"}>
          <div className="flex items-center mb-[.8rem] justify-between">
            <span className=" text-[1.4rem] font-medium text-label">AutoSave Deposit</span>
          </div>
          {/* <p className=" font-medium text-[1.6rem] text-pv_dark">
            <CurrencySymbol />
            &nbsp;
            {formatNumberWithCommas(saving?.amountSavedPerTime) || 0}/{saving?.savingFrequency}
          </p> */}
          {saving?.autoDebit ? (
            <p className=" font-medium text-[1.6rem] text-pv_dark">
              ~ <CurrencySymbol /> {formatNumberWithCommas(calculateBreakDown(parseInt(saving?.targetAmount), parseInt(saving?.duration), saving.savingFrequency))}/
              {saving?.savingFrequency == "Daily" && "day"}
              {saving?.savingFrequency == "Weekly" && "week"}
              {saving?.savingFrequency == "Monthly" && "month"}
            </p>
          ) : (
            <p className=" font-medium text-[1.6rem] text-pv_dark">
              <CurrencySymbol /> 0
            </p>
          )}
        </div>
        <div className={" rounded-secondary p-[1.6rem] bg-[rgba(181,72,198,0.14)]"}>
          <div className="flex items-center mb-[.8rem] justify-between">
            <span className=" text-[1.4rem] font-medium text-label">Next Withdrawal</span>
          </div>
          <p className=" font-medium text-[1.6rem] text-pv_dark">{formatDate(saving?.endDate, true)}</p>
        </div>
        <div className=" border-0 border-t border-border border-solid mt-[2rem] pt-[2rem] flex items-center justify-center overflow-scroll scroll_hide">
          <SvgIconWrapper iconName={"power"}></SvgIconWrapper>
          <span
            onClick={async () => {
              // if (saving?.autoDebit) {
              //   const respData = await updatePersonalGoalSavings({ autoDebit: false }, saving?.id);
              //   if (respData.status) {
              //     toast.success("Autosave has been turned off.");
              //     onUpdateAutoSave();
              //   }
              // } else {
              //   setOpen(true);
              // }
              setOpen(true);
            }}
            className=" text-text font-semibold text-[1.6rem] ml-[.8rem] cursor-pointer"
          >
            Turn {saving?.autoDebit ? "Off" : "On"} Autosave
          </span>
        </div>
      </PlainContainer>
    </>
  );
};

export default SavingsInfo;
