import React from 'react';
import { useRouter } from "next/router";
import InvestmentCard from '../../cards/InvestmentCard';

const ApprovedInvestment = () => {
  const router = useRouter();
  function view(){
      router.push('/cooperative/investment/view')
  }
  return (
    <div className='flex flex-wrap gap-[1rem]'>
    <InvestmentCard text='Approved' status='success' onClick={view} />
    <InvestmentCard text='Approved' status='success' onClick={view} />
    <InvestmentCard text='Approved' status='success' onClick={view} />
    <InvestmentCard text='Approved' status='success' onClick={view} />
</div>
  )
}

export default ApprovedInvestment