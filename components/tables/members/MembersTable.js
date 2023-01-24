import { useState } from "react";
import LabelTag from "../../buttons/LabelTag";

const MembersTable = ({members, viewClick, editClick}) => {

  // console.log(members, "MEMBERS IN TABLE")

  
  return (
    <div className=" bg-white p-[2.4rem] rounded-[1.2rem]">
     
      <div className="w-[100%] overflow-x-scroll scroll_hide">
        <table className=" w-full border-l border-gray-lighter border-collapse">
          <thead className="text-bl text-black-light whitespace-nowrap bg-gray-lightest-2 caption_heavy h-[48px] font-medium">
            <tr>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto">Name</span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto">Gender</span>
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
            {members?.map(({firstName, lastName,id, gender})=>(<tr key={id} className="h-[52px] border-solid border border-gray-200 px-[0.4rem]">
              <td className="px-[16px] text-left ">
                <p className="h-full flex items-center">{firstName +" "+ lastName}</p>
              </td>
              <td className="px-[16px] text-left ">
                <p className="">{gender}</p>
              </td>
              <td className="px-[16px] text-left ">
                 <LabelTag text='Active' status='success'></LabelTag> 
              </td>
              <td className="p-[16px]   flex flex-row gap-[2rem] ">
                <p onClick={()=>viewClick(id)} className="underline cursor-pointer text-[#137C4B]">View</p>
                {/* <p onClick={()=>editClick(id)} className="underline cursor-pointer text-[#FF7115]">Edit</p> */}
              </td>
            </tr>))}
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

export default MembersTable;