import Link from "next/link";
import React from "react";
import formatDate from "../../../../utils/formatDate";
import Hrule from "../../../general/Hrule";
import Label from "../../../general/Label";
import PlainContainer from "../../../layouts/PlainContainer";

const ApplicationCard = ({ application, ...props }) => {
  const colorTypesStatusMap = {
    completed: "success",
    pending: "warn",
    declined: "error",
    active: "active",
  };
  return (
    <PlainContainer isStrechedMobile={false} className={"shadow flex flex-col !h-auto"}>
      <div className="flex items-center justify-between mb-[1.2rem]">
        <p className=" font-rubik font-medium text-[1.8rem]">{application?.companyName}</p>
        <Label type={colorTypesStatusMap[application?.planvestApprovalStatus]} text={application?.planvestApprovalStatus}></Label>
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
          {application?.description}{" "}
        </span>
        <Link href={`/cooperative-members/investment/applications/${application?.id}?status=${application?.planvestApprovalStatus}&label=${colorTypesStatusMap[application?.planvestApprovalStatus]}`}>
          <a className=" text-pv_primary text-end block">Read More</a>
        </Link>
      </div>
      <Hrule className={"my-[1.6rem]"}></Hrule>
      <div className="grid grid-cols-2 ">
        <div className="grid gap-[.4rem] font-medium">
          <p className="text-[1.4rem] text-label">ROI</p>
          <p className="text-[1.4rem] text-text">{application?.roi}%</p>
        </div>
        <div className="grid gap-[.4rem] font-medium justify-self-end">
          <p className="text-[1.4rem] text-label">Establishment Date</p>
          <p className="text-[1.4rem] text-text">{formatDate(application?.establishmentDate)}</p>
        </div>
      </div>
    </PlainContainer>
  );
};

export default ApplicationCard;
