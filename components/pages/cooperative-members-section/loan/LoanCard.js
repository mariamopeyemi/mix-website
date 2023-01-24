import Link from "next/link";
import React from "react";
import formatNumberWithCommas from "../../../../utils/addCommas";
import formatDate from "../../../../utils/formatDate";
import CurrencySymbol from "../../../general/CurrencySymbol";
import Hrule from "../../../general/Hrule";
import Label from "../../../general/Label";
import PlainContainer from "../../../layouts/PlainContainer";

const LoanCard = ({ loan, ...props }) => {
  const colorTypesStatusMap = {
    completed: "success",
    pending: "warn",
    declined: "error",
    active: "active",
  };
  return (
    <PlainContainer isStrechedMobile={false} className={"shadow !h-auto flex flex-col"}>
      <div className="flex items-center justify-between mb-[1.2rem]">
        <p className=" font-rubik font-medium text-[1.8rem]">{loan?.companyName ?? "Personal"}</p>
        <Label type={colorTypesStatusMap[loan?.coopApprovalStatus]} text={loan?.coopApprovalStatus}></Label>
      </div>
      <div className=" text-label text-[1.5rem] font-medium">
        <span
          style={{
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
            "text-overflow": "ellipsis",
            overflow: "hidden",
          }}
        >
          {loan?.reasonForLoan || loan?.businessDesc}{" "}
        </span>
        <Link href={`/cooperative-members/loan/${loan?.id}?status=${loan?.coopApprovalStatus}&label=${colorTypesStatusMap[loan?.coopApprovalStatus]}`}>
          <a className=" text-pv_primary block text-end">Read More</a>
        </Link>
      </div>
      <Hrule className={"my-[1.6rem]"}></Hrule>
      <div className="grid grid-cols-2 ">
        <div className="grid gap-[.4rem] font-medium">
          <p className="text-[1.4rem] text-label">Amount Request</p>
          <p className="text-[1.4rem] text-text">
            <CurrencySymbol />
            {formatNumberWithCommas(loan?.loanAmount)}
          </p>
        </div>
        <div className="grid gap-[.4rem] font-medium justify-self-end">
          <p className="text-[1.4rem] text-label">Date Needed</p>
          <p className="text-[1.4rem] text-text">{formatDate(loan?.dateNeeded)}</p>
        </div>
      </div>
    </PlainContainer>
  );
};

export default LoanCard;
