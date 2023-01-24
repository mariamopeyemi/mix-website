import React from "react";
import EmptyState from "../../../general/EmptyState";
import Label from "../../../general/Label";
import PlainContainerTitle from "../../../layouts/PlainContainerTitle";

const InvestApplication = ({ className }) => {
  let colorMap = { Pending: "warn", Approved: "success", Declined: "error" };
  let investment = [
    // { status: "Pending", date: "Today", name: "Casava Farm", img: "/cassava.png" },
    // { status: "Approved", date: "May 14th", name: "Cashew Nut Plantation", img: "/cashew.png" },
    // { status: "Declined", date: "May 14th", name: "Cashew Nut Plantation", img: "/cashew.png" },
  ];
  return (
    <PlainContainerTitle
      className={`${className} pb-[4rem] min-h-[300px]`}
      title="Investment Application"
      actionText={<span className=" font-rubik text-[#137C4B] text-[1.8rem] font-semibold">View All</span>}
    >
      {investment &&
        investment?.length != 0 &&
        investment.map((inv, i) => {
          return (
            <div className=" flex items-center mt-[3.2rem]" key={i}>
              <img src={inv.img} className="w-[4.7rem] h-[4.7rem] rounded-full"></img>
              <div className="flex flex-col ml-[1.6rem] mr-auto">
                <p className=" mt-2 text-[1.5rem] font-medium text-text">{inv.name}</p>
                <p className="text-label font-medium text-[1.4rem]">{inv.date}</p>
              </div>
              <Label type={colorMap[inv.status]} text={inv.status}></Label>
            </div>
          );
        })}

      {(!investment || investment?.length == 0) && <EmptyState className={" min-h-[300px]"} imgClassName=" !h-[8rem]" caption={"No investment application."} img={"/empty-savings.png"}></EmptyState>}
    </PlainContainerTitle>
  );
};

export default InvestApplication;
