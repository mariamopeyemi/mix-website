import Image from 'next/image';
import { useRouter } from "next/router";
import React, { useState } from "react";
import ManagerSwitcher from "../../../ManagerSwitcher.js";
import AllCorporateLoan from "../corperate/AllCorporateLoan";
import PendingCorporateLoan from "../corperate/PendingCorporateLoan";
import ApprovedCorporateLoan from "../corperate/ApprovedCorporateLoan";
import DeclinedCorporateLoan from "../corperate/DeclinedCorporateLoan";


const LOANS = [
    {title:"All (2000)", id:"ALL_LOAN"},
    {title:"Pending (400)", id:"PENDING_LOAN"},
    {title:"Approved (200)", id:"APPROVED_LOAN"},
    {title:"Declined (1400)", id:"DECLINED_LOAN"},
    
  ]

const CorperateLoan = () => {
    const [activeTable, setActiveTable] = useState("ALL_LOAN");
    const [emptySavings, setEmptySavings] =useState(true);
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
                <p className="items-center  mx-[auto]">No Corperate Loan Application</p>
              </div> : 
              <>
                {activeTable == "ALL_LOAN" && <AllCorporateLoan />}
                {activeTable == "PENDING_LOAN" && <PendingCorporateLoan />}
                {activeTable == "APPROVED_LOAN" && <ApprovedCorporateLoan />}
                {activeTable == "DECLINED_LOAN" && <DeclinedCorporateLoan />}
              
              </>
              }
              </>
  )
}

export default CorperateLoan