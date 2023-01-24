import { useState } from "react";
import LabelTag from "../../buttons/LabelTag";

const AllTransaction = () => {
  
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
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto">Status</span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto">Action</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-[#666668] whitespace-nowrap !gap-8  ">
            <tr className="h-[52px] border-solid border border-gray-200 px-[0.4rem]">
              <td className="px-[16px] text-left ">
                <p className="h-full flex items-center">284738438958485</p>
              </td>
              <td className="px-[16px] text-left ">
                <p className="">22/09/2021 , 12:00am</p>
              </td>
              <td className="px-[16px] text-left ">
                <p className="">N40,000</p>
              </td>
              <td className="px-[16px] text-left ">
                <p className="">Debit</p>
              </td>
              <td className="px-[16px] text-left ">
                <LabelTag text='Pending' status='warn'></LabelTag> 
              </td>
              <td className="px-[16px] text-left ">
                <p className="underline cursor-pointer text-[#137C4B]">View</p>
              </td>
            </tr>
            <tr className="h-[52px] border-solid border border-gray-200 rounded-xl  px-[0.4rem]">
              <td className="px-[16px] text-left ">
                <p className="h-full flex items-center">284738438958485</p>
              </td>
              <td className="px-[16px] text-left ">
                <p className="">22/09/2021 , 12:00am</p>
              </td>
              <td className="px-[16px] text-left ">
                <p className="">N40,000</p>
              </td>
              <td className="px-[16px] text-left ">
                <p className="">Debit</p>
              </td>
              <td className="px-[16px] text-left ">
                <LabelTag text='Failed' status='error'></LabelTag> 
              </td>
              <td className="px-[16px] text-left ">
                <p className="underline cursor-pointer text-[#137C4B]">View</p>
              </td>
            </tr>
            <tr className="h-[52px] border-solid border border-gray-200 rounded-xl  px-[0.4rem]">
              <td className="px-[16px] text-left ">
                <p className="h-full flex items-center">284738438958485</p>
              </td>
              <td className="px-[16px] text-left ">
                <p className="">22/09/2021 , 12:00am</p>
              </td>
              <td className="px-[16px] text-left ">
                <p className="">N40,000</p>
              </td>
              <td className="px-[16px] text-left ">
                <p className="">Debit</p>
              </td>
              <td className="px-[16px] text-left ">
                <LabelTag text='Successful' status='success' ></LabelTag> 
              </td>
              <td className="px-[16px] text-left ">
                <p className="underline cursor-pointer text-[#137C4B]">View</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-[28px] flex justify-between items-center px-[20px] caption_light flex-wrap">
        {/* <p>showing result 1-6 of 17 items</p> */}
        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default AllTransaction;