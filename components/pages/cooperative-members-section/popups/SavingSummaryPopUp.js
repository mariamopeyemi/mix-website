import { LoadingButton } from "@mui/lab";
import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { NumericFormat } from "react-number-format";
import formatNumberWithCommas from "../../../../utils/addCommas";
import formatDate from "../../../../utils/formatDate";
import CurrencySymbol from "../../../general/CurrencySymbol";
import GreyBox from "../../../general/GreyBox";
import Hrule from "../../../general/Hrule";
import PaymentOptionsTabs from "../../../general/PaymentOptionsTabs";
import PopupLayout from "../../../layouts/PopupLayout";

const TextValue = ({ text, value, className }) => {
  return (
    <p className={`font-semibold text-[1.5rem] grid gap-[.3rem] ${className}`}>
      <span className=" text-label">{text}</span>
      <span className="text-pv_dark capitalize">{value}</span>
    </p>
  );
};

const SavingSummaryPopUp = ({ onClose = () => {}, onGoBack = () => {}, onReadSummary = () => {}, savingSummary = {} }) => {
  const [loading, setLoading] = useState(false);
  const [amountPayNow, setAmountPayNow] = useState();
  const [paymentType, setPaymentType] = useState("Wallet");
  let filteredSavings = { ...savingSummary };
  if (!filteredSavings?.autoDebit) {
    delete filteredSavings?.debitDate;
    filteredSavings.savingFrequency = "Off";
  }
  if (filteredSavings?.savingType == "Fixed Savings") {
    delete filteredSavings?.savingFrequency;
  }

  delete filteredSavings.autoDebit;

  const showPaymentOptions = () => {
    if (filteredSavings.savingType == "Goal Savings" && parseInt(amountPayNow) > 0) {
      return true;
    }
    if (filteredSavings.savingType != "Goal Savings") {
      return true;
    }
  };

  const determineDisplayValue = (key, val) => {
    if (key == "startDate") {
      return formatDate(val);
    }
    if (key == "debitDate") {
      return `${formatDate(val)}, ${new Date(val).toLocaleTimeString("en-us", { timeStyle: "short" })}`;
    }
    if (key == "amount") {
      return (
        <span>
          <CurrencySymbol className={" font-thin"} />
          {formatNumberWithCommas(val?.split(",")?.join(""))}
        </span>
      );
    }

    return val;
  };

  let nameAlias = {
    savingType: "Type",
    title: "Title",
    startDate: "Start Date",

    duration: "Duration",
    amount: filteredSavings.savingType == "Goal Savings" ? "Target Amount" : "Amount",
    // amountSavedPerTime: "",
    savingFrequency: "Auto Debit",
    debitDate: "Date/Time",
  };
  return (
    <PopupLayout onClose={onClose} title={"Summary"}>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-4 mb-[2.4rem] items-start">
        {Object.entries(filteredSavings).map(([key, value], i) => {
          return <GreyBox className={" rounded-[9px] h-[86px]"} key={i} title={nameAlias[key]} subTitle={determineDisplayValue(key, value)}></GreyBox>;
          // return <TextValue key={i} text={nameAlias[key]} value={determineDisplayValue(key, value)}></TextValue>;
        })}
      </div>
      <Hrule className={"my-[2.4rem]"}></Hrule>
      {filteredSavings.savingType == "Goal Savings" && (
        <>
          <NumericFormat
            onChange={(e) => {
              console.log(e.target.value);
              setAmountPayNow(e.target.value);
            }}
            allowNegative={false}
            thousandSeparator
            isAllowed={(values) => {
              const { formattedValue, floatValue } = values;
              return formattedValue === "" || floatValue >= 0;
            }}
            // InputProps={{
            //   startAdornment: <InputAdornment position="start">&#8358;</InputAdornment>,
            // }}
            name="amount"
            // type={"number"}
            id="amount"
            label="Amount to pay now (optional)"
            variant="filled"
            customInput={TextField}
          />
          <Hrule className={"my-[2.4rem]"}></Hrule>
        </>
      )}

      {showPaymentOptions() && (
        <>
          <PaymentOptionsTabs
            onSelect={(type, data) => {
              setPaymentType(type, data);
            }}
          ></PaymentOptionsTabs>
        </>
      )}
      <div className="grid gap-5 grid-flow-col mt-[3.8rem] items-center">
        <Button
          onClick={() => {
            onGoBack();
          }}
          variant={"outlined"}
        >
          Go Back
        </Button>
        <LoadingButton
          loading={loading}
          onClick={() => {
            if (paymentType == "Wallet" && filteredSavings.savingType == "Fixed Savings") {
              return toast.error("Insufficient wallet balance.");
            }
            if (paymentType == "Wallet" && filteredSavings.savingType == "Goal Savings" && parseInt(amountPayNow) > 0) {
              return toast.error("Insufficient wallet balance.");
            }
            onReadSummary({ setLoading }, { status: parseInt(amountPayNow) > 0, amount: parseInt(amountPayNow?.split(",").join("")) });
          }}
        >
          Save
        </LoadingButton>
      </div>
    </PopupLayout>
  );
};

export default SavingSummaryPopUp;
