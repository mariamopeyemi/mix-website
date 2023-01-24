import Image from 'next/image';
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import LoanCard from '../../../cards/LoanCard';
import React, { useState, useEffect } from "react";
import ManagerSwitcher from "../../.././ManagerSwitcher";
import {displayAllLoan} from "../../../../services/cooperative-admin.js";
// import AllLoan from "../AllLoan";
// import PendingLoan from "../PendingLoan";
// import ApprovedLoan from "../ApprovedLoan";
// import DeclinedLoan from "../DeclinedLoan";


const LOANS = [
    {title:"All (2000)", id:"ALL_LOAN"},
    {title:"Pending (400)", id:"PENDING_LOAN"},
    {title:"Approved (200)", id:"APPROVED_LOAN"},
    {title:"Declined (1400)", id:"DECLINED_LOAN"},
    
  ]
const PersonalLoan = () => {
    
    const router = useRouter();
    const [emptyLoan, setEmptyLoan] =useState(true);
    const [filterAll,       setFilterAll] =useState([]);
    const [filterPending, setFilterPending] =useState([]);
    const [filterApproved, setFilterApproved] =useState([]);
    const [filterDeclined, setFilterDeclined] =useState([]);
    const [activeTable, setActiveTable] = useState("ALL_LOAN");

      useEffect (() =>  {
        const handlePageLoad = async () => {
        try {
         const myData= await displayAllLoan();
         const testData= myData?.data;
            if (testData.length >= 1) {
              setEmptyLoan(false);
            } else {
              setEmptyLoan(true);
            }
         const personalData= myData.data.data;
         const newData= personalData.filter(obj => {
            return obj.loanType === 'personal';
          });

            //  all personal loan
            setFilterAll(newData);
            // pending personal loans
          const pending = newData.filter(obj => {
            return obj.coopApprovalStatus === 'pending';
          }); console.log(pending);

          // pending personal loans
          const approvedLoan = newData.filter(obj => {
            return obj.coopApprovalStatus === 'approved';
          });console.log(approvedLoan);
          
          // decline personal loans
          const declinedLoan = newData.filter(obj => {
            return obj.coopApprovalStatus === 'declined';
          });console.log(declinedLoan);
          
          setFilterPending(pending);
          setFilterApproved(approvedLoan);
          setFilterDeclined(declinedLoan);

        } catch (error) {
            // toast.error(myData?.message, { duration: 10000 });
        }
        }
      handlePageLoad()
      }, []);
      
      function view(id){
        router.push({
          pathname: '/cooperative/loan/view-personal',
          query: { id},
        })
      }
  return (

    <>
    <ManagerSwitcher
            handleChange={(item) => {
            setActiveTable(item);
            }}
            className='ml-[2rem]'
            items={LOANS}
        ></ManagerSwitcher>
    
    {emptyLoan ?
    <div className="mt-[15%] flex flex-col justify-center content-center ">
        <div className="items-center  mx-[auto]"><Image src='/images/loanempty.svg' alt='empty' width='150px' height='150px' /></div>
        <p className="items-center  mx-[auto]">No Loan Application</p>
      </div> : 
      <div className='flex flex-wrap gap-[1rem]'>
        {activeTable === "ALL_LOAN" && <>
            {filterAll?.map((item, index) => {
            return (
            <LoanCard
                key={index}
                rtContent='Date Needed' 
                text={item.coopApprovalStatus} status='warn'
                ltContent='Amount Request'
                userName={item.companyName}
                onClick={()=>view(item.id)} 
                lbContent={item.loanAmount}
                rbContent={item.dateNeeded}
                businessDesc={item.businessDesc}
                />
            );})}
        </>}
        {activeTable === "PENDING_LOAN" && <>
            {filterPending?.map((item, index) => {
            return (
            <LoanCard
                key={index}
                rtContent='Date Needed' 
                text={item.coopApprovalStatus} status='warn'
                ltContent='Amount Request'
                userName={item.companyName}
                onClick={()=>view(item.id)} 
                lbContent={item.loanAmount}
                rbContent={item.dateNeeded}
                businessDesc={item.businessDesc}
                />
            );})}
        </>}
        {activeTable === "APPROVED_LOAN"  && <>
            {filterApproved?.map((item, index) => {
            return (
            <LoanCard
                key={index}
                rtContent='Date Needed' 
                text={item.coopApprovalStatus} status='warn'
                ltContent='Amount Request'
                userName={item.companyName}
                onClick={()=>view(item.id)} 
                lbContent={item.loanAmount}
                rbContent={item.dateNeeded}
                businessDesc={item.businessDesc}
                />
            );})}
        </>}
        {activeTable === "DECLINED_LOAN" && <>
            {filterDeclined?.map((item, index) => {
            return (
            <LoanCard
                key={index}
                rtContent='Date Needed' 
                text={item.coopApprovalStatus} status='warn'
                ltContent='Amount Request'
                userName={item.companyName}
                onClick={()=>view(item.id)} 
                lbContent={item.loanAmount}
                rbContent={item.dateNeeded}
                businessDesc={item.businessDesc}
                />
            );})}
        </>}
      
      </div>
      }
      </>
  )
}

export default PersonalLoan;