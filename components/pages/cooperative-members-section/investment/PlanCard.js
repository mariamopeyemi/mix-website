import Link from "next/link";
import React from "react";
import Hrule from "../../../general/Hrule";
import Label from "../../../general/Label";
import SvgIconWrapper from "../../../general/SvgIconWrapper";
import PlainContainer from "../../../layouts/PlainContainer";

const PlanCard = ({ plan, ...props }) => {
  const colorTypesStatusMap = {
    Completed: "success",
    Moderate: "warn",
    Aggressive: "error",
    Conservative: "blue",
  };
  return (
    <PlainContainer isStrechedMobile={false} className={"shadow flex flex-col"}>
      <div className="flex items-center justify-between mb-[1.2rem]">
        <img src={"/cassava.png"} className="w-[3.7rem] h-[3.7rem] rounded-full"></img>

        <Label type={colorTypesStatusMap[plan?.status]} text={plan?.status}></Label>
      </div>
      <p className=" font-rubik font-medium text-[1.8rem]">{plan?.name}</p>
      <div className=" text-label text-[1.5rem] font-medium">
        <span className="text-pv_primary text-[1.6rem]">{plan?.return} &nbsp;</span>
        <span>returns in &nbsp;</span>
        <span>{plan?.duration} </span>
      </div>
      <Hrule className={"my-[1.6rem]"}></Hrule>
      <div className="grid grid-cols-2 ">
        <div className="grid gap-[.4rem] font-medium">
          <p className="text-[1.4rem] text-label">Per Slot</p>
          <p className="text-[1.6rem] text-[#B548C6] font-semibold">{plan?.amountRequested}</p>
        </div>
        <div className="grid gap-[.4rem] font-medium justify-self-end">
          <p className="text-[1.4rem] text-label">Investors</p>
          <p className="text-[1.6rem] text-text">{plan?.investors}</p>
        </div>
      </div>
      <div className="mt-[1.6rem] flex items-center ">
        <Link href={`/cooperative-members/investment/plans/${plan?.name}?status=${plan?.status}&label=${colorTypesStatusMap[plan?.status]}&name=${plan?.name}`}>
          <a className=" text-pv_primary font-semibold flex items-center w-full justify-between group">
            View Details <SvgIconWrapper className={" !h-[1.5rem] group-hover:translate-x-2 transition-all"} iconName={"chevron-arrow"}></SvgIconWrapper>
          </a>
        </Link>
      </div>
    </PlainContainer>
  );
};

export default PlanCard;
