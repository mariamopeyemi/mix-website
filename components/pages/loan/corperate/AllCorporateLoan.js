import React from 'react';
import { useRouter } from "next/router";
import InvestmentCard from '../../../cards/InvestmentCard';

const AllCorporateLoan = () => {
    const router = useRouter();
    function view(){
        router.push('/cooperative/loan/view-corporate')
    }
  return (
    <div className='flex flex-wrap gap-[1rem]'>
        <InvestmentCard 
          userName='Company name'
          text='Pending' status='warn' 
          onClick={view} 
          ltContent='Amount Request' 
          lbContent='N300,000' 
          rtContent='Date Needed' 
          rbContent='23/05/2022'/>
        <InvestmentCard 
          userName='Company name'
          text='Pending' status='warn' 
          onClick={view} 
          ltContent='Amount Request' 
          lbContent='N300,000' 
          rtContent='Date Needed' 
          rbContent='23/05/2022'/>
        <InvestmentCard 
          userName='Company name'
          text='Declined' status='error' 
          onClick={view} 
          ltContent='Amount Request' 
          lbContent='N300,000' 
          rtContent='Date Needed' 
          rbContent='23/05/2022'/>
        <InvestmentCard 
          userName='Company name'
          text='Declined' status='error' 
          onClick={view} 
          ltContent='Amount Request' 
          lbContent='N300,000' 
          rtContent='Date Needed' 
          rbContent='23/05/2022'/>
        <InvestmentCard 
          userName='Company name'
          text='Approved' status='success' 
          onClick={view} 
          ltContent='Amount Request' 
          lbContent='N300,000' 
          rtContent='Date Needed' 
          rbContent='23/05/2022'/>
        <InvestmentCard 
          userName='Company name'
          text='Approved' status='success' 
          onClick={view} 
          ltContent='Amount Request' 
          lbContent='N300,000' 
          rtContent='Date Needed' 
          rbContent='23/05/2022'/>
        <InvestmentCard 
          userName='Company name'
          text='Pending'
           status='warn' 
          ltContent='Amount Request' 
          lbContent='N300,000' 
          rtContent='Date Needed' 
          rbContent='23/05/2022'/>
        <InvestmentCard 
          userName='Company name'
          text='Pending'
           status='warn' 
          ltContent='Amount Request' 
          lbContent='N300,000' 
          rtContent='Date Needed' 
          rbContent='23/05/2022'/>
        <InvestmentCard 
          userName='Company name'
          text='Pending'
           status='warn' 
          ltContent='Amount Request' 
          lbContent='N300,000' 
          rtContent='Date Needed' 
          rbContent='23/05/2022'/>
    </div>
  )
}

export default AllCorporateLoan;