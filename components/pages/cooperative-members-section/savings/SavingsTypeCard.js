import React from "react";
import formatNumberWithCommas from "../../../../utils/addCommas";
import CurrencySymbol from "../../../general/CurrencySymbol";

const SavingsTypeCard = ({ className, type, status, amount, ...props }) => {
  return (
    <div {...props} className={" rounded-secondary p-[3.2rem] py-[2.4rem] " + className}>
      <div className="flex items-center mb-[1.6rem] justify-between">
        <span className=" text-[1.4rem] font-medium text-label">{type} Savings</span>
        <span className=" text-[1.4rem] font-medium text-label capitalize">{status}</span>
      </div>
      <p className=" font-medium text-[2.4rem] text-pv_dark">
        <CurrencySymbol></CurrencySymbol>
        {formatNumberWithCommas(amount)}
      </p>
    </div>
  );
};

export default SavingsTypeCard;
