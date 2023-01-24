import { useState } from "react";
import LabelTag from "../../../buttons/LabelTag";
import CurrencySymbol from "../../../general/CurrencySymbol";
import formatNumberWithCommas from "../../../../utils/addCommas";

const TransactionTab = (
  {status='pending', text='warn',
    type= "credit",
    transactionTypeId= "284738438958485",
    amount= 50000,
    onClick
  },
  rows = [
    { transactionTypeId: "284738438958485", date: "22/09/2021 , 12:00am", amount: "N40,000", type: "debit", status: "active", },
    { transactionTypeId: "284738438958485", date: "22/09/2021 , 12:00am", amount: "N40,000", type: "credit", status: "warn", },
  ],
) => {
  
  return (
    <div className=" bg-white p-[2.4rem] rounded-[1.2rem]">
     
      <div className="w-[100%] overflow-x-scroll scroll_hide">
        <table className=" w-full border-l border-gray-lighter border-collapse">
          <thead className="text-bl text-black-light whitespace-nowrap bg-gray-lightest-2 caption_heavy h-[48px] font-medium">
            <tr>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto">Transaction ID</span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto">Date</span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto">Amount</span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto">Type</span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto">Status</span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto">Action</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-[#666668] whitespace-nowrap !gap-8  ">
          {/* {rows?.map((row, i) => { */}
              <tr  className="h-[52px] border-solid border border-gray-200 px-[0.4rem]">
                  <td className="px-[16px] text-left ">
                    <p className="h-full flex items-center">{transactionTypeId}</p>
                  </td>
                  <td className="px-[16px] text-left ">
                  <p className="">22/09/2021 , 12:00am</p>
                  {/* <p className="">{date}</p> */}
                  </td>
                  <td className="px-[16px] text-left ">
                    <p className=" flex items-center">
                      <CurrencySymbol />
                      {formatNumberWithCommas(amount)}
                    </p>
                  </td>
                  <td className="px-[16px] text-left ">
                    <p className="">{type}</p>
                  </td>
                  {/* {type === debit && */}
                  <td className="px-[16px] text-left ">
                    <LabelTag text={text} status={status}></LabelTag> 
                  </td>
                  {/* } */}
                  <td className="px-[16px] text-left ">
                    <p className="underline cursor-pointer text-[#137C4B]" onClick={onClick}>View</p>
                  </td>
            </tr>
          {/* })} */}
          </tbody>
        </table>
      </div>
      <div className="mt-[28px] flex justify-between items-center px-[20px] caption_light flex-wrap">
        <p>showing result 1-6 of 17 items</p>
        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default TransactionTab;

// import React from "react";
// import Label from "./Label";

// const ReUseableTable = ({
//   headers = ["Transaction ID", "Date", "Amount", "Type", "Status", "Action"],
//   rows = [
//     { name: "284738438958485", date: "22/09/2021 , 12:00am", amount: "N40,000", type: "Debit", status: "active", action: "View" },
//     { name: "284738438958485", date: "22/09/2021 , 12:00am", amount: "N40,000", type: "Debit", status: "warn", action: "View" },
//   ],
//   totalPage,
//   className,
// }) => {
//   const colStyle = { gridTemplateColumns: `repeat(${headers?.length}, minmax(0, 1fr))` };
//   return (
//     <div className={`bg-white rounded-secondary p-[2.8rem] px-[2rem] ${className}`}>
//       {/* Header */}
//       <header style={{ ...colStyle }} className="grid items-center justify-items-center px-[1.4rem] mb-[1.6rem]">
//         {headers?.map((item, i) => {
//           return (
//             <span className="text-[1.6rem] font-rubik text-text font-medium first:justify-self-start" key={i}>
//               {item}
//             </span>
//           );
//         })}
//       </header>
//       {/* Body */}
//       <div className="grid gap-[1.6rem]">
//         {rows.map((row, i) => {
//           return (
//             <div key={i} style={{ ...colStyle }} className=" rounded-secondary grid items-center border-border border border-solid h-[51px] px-[1.4rem] justify-items-center ">
//               {Object.entries(row).map(([key, value], i) => {
//                 if (key == "status") {
//                   return (
//                     <div key={i} className="first:justify-self-start">
//                       <Label type={value}>{value}</Label>
//                     </div>
//                   );
//                 } else if (key == "action") {
//                   return (
//                     <span key={i} className="text-[1.4rem] text-pv_primary  underline-offset-4 underline first:justify-self-start cursor-pointer">
//                       {value}
//                     </span>
//                   );
//                 } else {
//                   return (
//                     <span key={i} className="text-[1.4rem] text-text first:justify-self-start">
//                       {value}
//                     </span>
//                   );
//                 }
//               })}
//             </div>
//           );
//         })}
//       </div>
//       {/* Footer */}
//       <footer className="flex justify-between items-center text-text font-medium text-[1.4rem] mt-[2.6rem]">
//         <div>Rows per page: 10</div>
//         <div>
//           <span>1 of 26</span>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ReUseableTable;
