import React from 'react';
import { useRouter } from "next/router";
import InvestmentCard from '../../cards/InvestmentCard';

const AllInvestment = () => {
    const router = useRouter();
    function view(){
        router.push('/cooperative/investment/view')
    }
  return (
    <div className='flex flex-wrap gap-[1rem]'>
        <InvestmentCard text='Pending' status='warn' onClick={view} />
        <InvestmentCard text='Pending' status='warn' onClick={view} />
        <InvestmentCard text='Declined' status='error' onClick={view} />
        <InvestmentCard text='Declined' status='error' onClick={view} />
        <InvestmentCard text='Approved' status='success' onClick={view} />
        <InvestmentCard text='Approved' status='success' onClick={view} />
        <InvestmentCard text='Pending' status='warn' />
        <InvestmentCard text='Pending' status='warn' />
        <InvestmentCard text='Pending' status='warn' />
    </div>
  )
}

export default AllInvestment;