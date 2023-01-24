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