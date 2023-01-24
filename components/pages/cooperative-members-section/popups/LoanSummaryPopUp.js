import { Button } from "@mui/material";
import React from "react";
import formatNumberWithCommas from "../../../../utils/addCommas";
import formatDate from "../../../../utils/formatDate";
import CurrencySymbol from "../../../general/CurrencySymbol";
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

const LoanSummaryPopUp = ({ onClose = () => {}, onGoBack = () => {}, onReadSummary = () => {}, loanSummary = {} }) => {
  const details = [
    { title: "Loan Amount", value: "N400,000" },
    { title: "Loan Duration", value: "3 Months" },
    { title: "Interest", value: "2.5%" },
    { title: "Company Name", value: "Derachukwudi Farms ltd" },
    { title: "Type of Business", value: "Poultry" },
  ];
  let filteredLoans = { ...loanSummary };

  const determineDisplayValue = (key, val) => {
    if (key == "dateNeeded") {
      return formatDate(val);
    }
    if (key == "loanAmount") {
      return (
        <span>
          <CurrencySymbol className={" font-thin"} />
          {formatNumberWithCommas(val)}
        </span>
      );
    }

    return val;
  };

  delete filteredLoans.cooperativeId;
  delete filteredLoans.documents;
  delete filteredLoans.pitchDeck;
  delete filteredLoans.CAC;

  let nameAlias = {
    loanType: "Loan Type",
    companyName: "Company Name",
    typeOfBusiness: "Type of Bussiness",
    businessDesc: "Bussiness Description",
    documents: [],
    dateNeeded: "Date Needed",
    loanDuration: "Loan Duration",
    loanAmount: "Loan Amount",
    repayment: "Repayment",
    reasonForLoan: "Reason for Loan",
    cooperativeId: "",
    uploadedVCFrontFilesObj: null,
    uploadedVCBackFilesObj: null,
  };
  return (
    <PopupLayout onClose={onClose} title={"Summary"}>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] gap-8 mb-[2.4rem] items-start">
        {Object.entries(filteredLoans).map(([key, value], i) => {
          return <TextValue key={i} text={nameAlias[key]} value={determineDisplayValue(key, value)}></TextValue>;
        })}
      </div>
      <Hrule></Hrule>
      <div className=" font-medium text-[1.6rem] flex items-center justify-between my-[2.4rem] text-pv_dark">
        <span>Processing Fee</span>
        <span>----------------------------</span>
        <span className=" text-pv_primary">N500</span>
      </div>
      <Hrule className={"mb-[2.4rem]"}></Hrule>
      <PaymentOptionsTabs></PaymentOptionsTabs>
      <div className="grid gap-5 grid-flow-col mt-[2.7rem] items-center">
        <Button
          onClick={() => {
            onGoBack();
          }}
          variant={"outlined"}
        >
          Go Back
        </Button>
        <Button onClick={onReadSummary}>Apply</Button>
      </div>
    </PopupLayout>
  );
};

export default LoanSummaryPopUp;
