import React from "react";
import Label from "../../../general/Label";

const PaymentBreakDownTable = () => {
  const columnTitles = ["S/N", "Amount", "Payment Date", "Action", "Status"];
  const breakDown = [
    { amount: "N4000", date: "7/07/2022", action: "Paid", status: "Done" },
    { amount: "N20000", date: "7/07/2022", action: "Paid", status: "Done" },
    { amount: "N4000", date: "23/06/2022", action: "Paid", status: "Overdue" },
    { amount: "N4000", date: "7/07/2022", action: "Pay", status: "Pending" },
  ];
  const colorTypesStatusMap = {
    Done: "success",
    Pending: "warn",
    Overdue: "error",
    Active: "active",
  };
  return (
    <div className="min-w-[65rem]">
      <section className="grid grid-cols-[.1fr,_2fr,_2fr,_2fr,_2fr] items-center justify-items-end  rounded-primary px-[3rem] py-[1.6rem] bg-pv_bg whitespace-nowrap">
        {columnTitles.map((el, i) => {
          return (
            <span key={i} className=" text-[1.6rem] font-normal first:translate-x-[100%]  first:justify-self-end last:justify-self-end  last:-translate-x-[90%]">
              {el}
            </span>
          );
        })}
      </section>
      <section>
        {breakDown.map((el, i) => {
          return (
            <div
              key={i}
              className={`grid grid-cols-[.1fr,_2fr,_2fr,_2fr,_2fr] items-center justify-items-end  rounded-primary px-[3rem] py-[1rem] text-[1.6rem]  ${
                el?.status == "Overdue" ? " !text-error font-semibold" : " text-text"
              }`}
            >
              <span className="justify-self-end translate-x-[200%] w-[16px]">{++i}</span>
              <span className="">{el?.amount}</span>
              <span className="">{el?.date}</span>
              <span className={` font-semibold underline ${el?.status == "Overdue" ? " !text-error font-semibold" : " text-pv_dark"}`}>{el?.action}</span>
              <span className="justify-self-end ">
                <Label type={colorTypesStatusMap[el?.status]} text={el?.status}></Label>
              </span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PaymentBreakDownTable;
