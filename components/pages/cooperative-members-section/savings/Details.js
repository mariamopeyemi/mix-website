import React from "react";
import formatNumberWithCommas from "../../../../utils/addCommas";
import CurrencySymbol from "../../../general/CurrencySymbol";
import PlainContainerTitle from "../../../layouts/PlainContainerTitle";

const Box = ({ title, subTitle }) => {
  return (
    <div className={" rounded-secondary p-[1.6rem] bg-pv_bg"}>
      <div className="flex items-center mb-[.8rem] justify-between">
        <span className=" text-[1.4rem] font-medium text-label">{title}</span>
      </div>
      <p className=" font-medium text-[1.6rem] text-pv_dark capitalize">{subTitle}</p>
    </div>
  );
};

const Details = ({ saving, type }) => {
  return (
    <PlainContainerTitle isStrechedMobile={false} title="Details">
      <div className=" grid grid-cols-2 grid-flow-row gap-[.8rem] mt-[2.4rem]">
        <Box title="Saving Type" subTitle={type}></Box>
        <Box title="Duration" subTitle={saving?.duration}></Box>
        <Box title="Interest" subTitle={`${saving?.interestPercent || 0}%`}></Box>
        <Box
          title={saving?.targetAmount ? "Target Amount" : "Amount to be Saved"}
          subTitle={
            <span>
              <CurrencySymbol />
              {formatNumberWithCommas(saving?.targetAmount ? saving?.targetAmount : saving.amountTobeSaved) ?? 0}
            </span>
          }
        ></Box>
        <Box
          title="Total Interest Earned"
          subTitle={
            <span>
              <CurrencySymbol />
              {saving?.interestEarned ?? 0}
            </span>
          }
        ></Box>
        <Box title="Status" subTitle={saving?.statusOfPlan}></Box>
      </div>
    </PlainContainerTitle>
  );
};

export default Details;
