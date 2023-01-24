import { Button } from "@mui/material";
import React from "react";
import PopupLayout from "../../../layouts/PopupLayout";

const EligibilityPopUp = ({ onApply = () => {} }) => {
  return (
    <PopupLayout title={"Eligibility Status"}>
      <div className="grid place-items-center">
        <p className="mb-[4.8rem] text-[1.8rem] font-normal text-label text-center leading-[28px] max-w-[37.8rem]">
          Horrah! You are eligible for a maximum loan of <span className="text-warn font-medium"> N30,000,000 </span>. Save more to increase your eligibility amount.
        </p>
        <Button
          onClick={() => {
            onApply();
          }}
        >
          Apply for Loan
        </Button>
      </div>
    </PopupLayout>
  );
};

export default EligibilityPopUp;
