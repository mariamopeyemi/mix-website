import React from 'react';
import formatDate from '../../../utils/formatDate';
import CurrencySymbol from '../../general/CurrencySymbol';
import formatNumberWithCommas from '../../../utils/addCommas';

const FixedSavingsCard = ({
    startDate,
    amountLocked,
    endDate,
    statusOfPlan,
    amountTobeSaved,
    interestEarned,
}) => {
  return (
    // <div className='w-full bg-white p-[3rem] rounded-xl flex flex-col md:flex-row my-[3rem] '>

    <div className='bg-white p-[3rem] rounded-xl flex flex-row my-[3rem] '>
    <div className='flex flex-col gap-[3rem] border-r border-gray-200'>
        <div>
            <p className='text-[#9999B4]'>Target Amount</p>
            <p><CurrencySymbol/>{formatNumberWithCommas(amountTobeSaved)}</p>
        </div>
        <div>
            <p className='text-[#9999B4]'>Status of the plan </p>
            <p>{statusOfPlan}</p>
        </div>
    </div>
    <hr className=' border border-solid border-[#EBEBEB]  mx-[2rem] md:mx-[8rem]' />
    <div className='flex flex-col gap-[3rem] border-r border-gray-200'>
        <div>
            <p className='text-[#9999B4]'>Interest Earned - 10%</p>
            <p><CurrencySymbol/>{interestEarned}</p>
        </div>
        <div>
            <p className='text-[#9999B4]'>Start Date </p>
            <p>{formatDate(startDate)}</p>
        </div>
    </div>
    <hr className=' border border-solid border-[#EBEBEB]  mx-[2rem] md:mx-[8rem]' />
    <div className='flex flex-col gap-[3rem] border-r border-gray-200'>
        <div>
            <p className='text-[#9999B4]'>Amount to be locked</p>
            <p><CurrencySymbol/>{formatNumberWithCommas(amountLocked)}</p>
        </div>
        <div>
            <p className='text-[#9999B4]'>End Date </p>
            <p>{formatDate(endDate)}</p>
        </div>
    </div>
    
</div>
  )
}

export default FixedSavingsCard