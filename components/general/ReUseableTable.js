import React from "react";
import formatNumberWithCommas from "../../utils/addCommas";
import CurrencySymbol from "./CurrencySymbol";
import Label, { colorTypes } from "./Label";

const ReUseableTable = ({
  headers = ["Transaction ID", "Date", "Amount", "Type", "Status", "Action"],
  rows = [
    { name: "284738438958485", date: "22/09/2021 , 12:00am", amount: "40,000", type: "Debit", status: { color: "active", name: "Active" }, action: "View" },
    { name: "284738438958485", date: "22/09/2021 , 12:00am", amount: "40,000", type: "Debit", status: { color: "warn", name: "Warn" }, action: "View" },
  ],
  totalPage = 0,
  currentPage = 0,
  rowPerPage = 10,
  className,
  onPrev = () => {},
  onNext = () => {},
}) => {
  const colStyle = { gridTemplateColumns: `repeat(${headers?.length}, minmax(0, 1fr))` };

  return (
    <div className={`bg-white rounded-secondary p-[2.8rem] px-[2rem] ${className}`}>
      {/* Header */}
      <header style={{ ...colStyle }} className="grid items-center justify-items-center px-[1.4rem] mb-[1.6rem]">
        {headers?.map((item, i) => {
          return (
            <span className="text-[1.6rem] font-rubik text-text font-medium first:justify-self-start" key={i}>
              {item}
            </span>
          );
        })}
      </header>
      {/* Body */}
      <div className="grid gap-[1.6rem]">
        {rows.map((row, i) => {
          return (
            <div key={i} style={{ ...colStyle }} className=" rounded-secondary grid items-center border-border border border-solid h-[51px] px-[1.4rem] justify-items-center  capitalize">
              {Object.entries(row).map(([key, value], i) => {
                if (key == "status") {
                  return (
                    <div key={i} className="first:justify-self-start">
                      <Label type={value.color}>{value.name}</Label>
                    </div>
                  );
                } else if (key == "action") {
                  return (
                    <span key={i} className="text-[1.4rem] text-pv_primary  underline-offset-4 underline first:justify-self-start cursor-pointer capitalize">
                      {value}
                    </span>
                  );
                } else if (key == "amount") {
                  return (
                    <span key={i} className="text-[1.4rem] text-text first:justify-self-start capitalize">
                      <CurrencySymbol /> {formatNumberWithCommas(value)}
                    </span>
                  );
                } else {
                  return (
                    <span
                      title={value}
                      key={i}
                      className="text-[1.4rem] text-text first:justify-self-start text-center capitalize overflow-hidden text-ellipsis block whitespace-nowrap w-full cursor-pointer"
                    >
                      {value}
                    </span>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
      {/* Footer */}
      <footer className="flex justify-between items-center text-text font-medium text-[1.4rem] mt-[2.6rem] px-[2rem]">
        <div>Rows per page: {rowPerPage}</div>
        <div>
          {currentPage > 1 && (
            <span className=" text-[2rem] font-medium cursor-pointer" onClick={onPrev}>
              &laquo;{" "}
            </span>
          )}
          <span className="mx-[1.5rem]">
            {currentPage} of {totalPage}
          </span>
          {currentPage < totalPage && (
            <span className=" text-[2rem] font-medium cursor-pointer" onClick={onNext}>
              &raquo;
            </span>
          )}
        </div>
      </footer>
    </div>
  );
};

export default ReUseableTable;
