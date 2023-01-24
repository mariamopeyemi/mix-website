import React from "react";
import EmptyState from "../../../general/EmptyState";
import Label from "../../../general/Label";
import TextLabel from "../../../general/TextLabel";
import PlainContainerTitle from "../../../layouts/PlainContainerTitle";

const LoanApplication = ({ className }) => {
  let colorMap = { Pending: "warn", Approved: "success", Declined: "error" };
  let loans = [
    // { status: "Pending", date: "Today", name: "Business Loan", amt: "N300,000" },
    // { status: "Approved", date: "May 14th", name: "Samtech Lmtd Loan", amt: "N600,000" },
    // { status: "Declined", date: "May 14th", name: "Samtech Lmtd Loan", amt: "N200,000" },
  ];
  return (
    <PlainContainerTitle className={className} title="Loan Application" actionText={<span className=" font-rubik text-[#137C4B] text-[1.8rem] font-semibold">View All</span>}>
      {loans &&
        loans?.length != 0 &&
        loans.map((loan, i) => {
          return (
            <div className=" flex items-center justify-between mt-[3.2rem]" key={i}>
              <div className="flex flex-col ml-[1.6rem]">
                <p className=" text-[1.5rem] font-medium text-text ">{loan.name}</p>
                <p className="text-label font-medium text-[1.4rem]">{loan.date}</p>
              </div>
              <div className="flex flex-col ml-[1.6rem]">
                <p className=" text-[1.5rem] font-medium text-text mb-[.8rem]">{loan.amt}</p>
                <TextLabel className={"text-[1.55rem]"} type={colorMap[loan.status]} text={loan.status}></TextLabel>
              </div>
            </div>
          );
        })}
      {(!loans || loans?.length == 0) && <EmptyState className={" min-h-[300px]"} imgClassName=" !h-[8rem]" caption={"No loan application."} img={"/empty-savings.png"}></EmptyState>}
    </PlainContainerTitle>
  );
};

export default LoanApplication;
