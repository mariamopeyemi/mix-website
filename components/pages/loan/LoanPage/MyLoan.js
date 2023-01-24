import Image from 'next/image';
import React, { useState } from "react";
import ManagerSwitcher from "../../.././ManagerSwitcher";
import AllLoan from "../AllLoan";
import PendingLoan from "../PendingLoan";
import ApprovedLoan from "../ApprovedLoan";
import DeclinedLoan from "../DeclinedLoan";


const LOANS = [
    {title:"All (2000)", id:"ALL_LOAN"},
    {title:"Pending (400)", id:"PENDING_LOAN"},
    {title:"Approved (200)", id:"APPROVED_LOAN"},
    {title:"Declined (1400)", id:"DECLINED_LOAN"},
    
  ]
const MyLoan = () => {
    const [emptySavings, setEmptySavings] =useState(true);
    const [activeTable, setActiveTable] = useState("ALL_LOAN");
  return (

    <>
    <ManagerSwitcher
            handleChange={(item) => {
            setActiveTable(item);
            }}
            className='ml-[2rem]'
            items={LOANS}
        ></ManagerSwitcher>
    
    {emptySavings ?
    <div className="mt-[15%] flex flex-col justify-center content-center ">
        <div className="items-center  mx-[auto]"><Image onClick={()=>setEmptySavings(!emptySavings)} src='/images/loanempty.svg' alt='empty' width='150px' height='150px' /></div>
        <p className="items-center  mx-[auto]">No Loan Application</p>
      </div> : 
      <>
        {activeTable === "ALL_LOAN" && <AllLoan />}
        {activeTable === "PENDING_LOAN" && <PendingLoan />}
        {activeTable === "APPROVED_LOAN" && <ApprovedLoan />}
        {activeTable === "DECLINED_LOAN" && <DeclinedLoan />}
      
      </>
      }
      </>
  )
}

export default MyLoan;