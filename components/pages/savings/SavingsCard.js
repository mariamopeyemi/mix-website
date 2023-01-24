import React from 'react';
import formatDate from '../../../utils/formatDate';
import formatNumberWithCommas from '../../../utils/addCommas';
import CurrencySymbol from '../../general/CurrencySymbol';

const SavingsCard = ({
    startDate,
    endDate,
    amountSaved,
    statusOfPlan,
    targetAmount,
    interestEarned,
    interestPercent,
    amountPaid,
    debitDate,
    frequencyOfSavings,
}) => {

    // formatDate(startDate)
    // formatDate(endDate)
  return (
    <div className='w-full bg-white p-[3rem] rounded-xl flex flex-col md:flex-row my-[3rem] '>

            <div className='md:w-[30%] flex flex-col gap-[1rem] mt-[1rem] '>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>
                    <p className='text-[#9999B4]'>Target Amount</p>
                    <p><CurrencySymbol/>{formatNumberWithCommas(targetAmount)}</p>
                </div>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>
                    <p className='text-[#9999B4]'>Amount saved </p>
                    <p><CurrencySymbol/>{formatNumberWithCommas(amountSaved)}</p>
                </div>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>

                    <p className='text-[#9999B4]'>Status of the plan </p>
                    <p>{statusOfPlan}</p>
                </div>
            </div>
            <hr className=' hidden md:block border border-solid border-[#EBEBEB]  mx-[2rem] md:mx-[4rem]' />

            <div className='md:w-[30%] flex flex-col gap-[1rem] mt-[1rem] border-r border-gray-200'>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>
                    <p className='text-[#9999B4]'>Interest Earned - {interestPercent}%</p>
                    <p><CurrencySymbol/>{interestEarned}</p>
                </div>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>
                    <p className='text-[#9999B4]'>Start Date </p>
                    <p>{formatDate(startDate)}</p>
                </div>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>

                    <p className='text-[#9999B4]'>End Date </p>
                    <p>{formatDate(endDate)}</p>
                    {/* <p>30/11/2021</p> */}
                </div>
            </div>
            <hr className=' hidden md:block border border-solid border-[#EBEBEB]  mx-[2rem] md:mx-[4rem]' />

            <div className='md:w-[40%] flex flex-col gap-[1rem] mt-[1rem] border-r border-gray-200'>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>
                    <p className='text-[#9999B4]'>Frequency of Savings</p>
                    {/* <p>Monthly</p> */}
                    <p>{frequencyOfSavings}</p>
                </div>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>
                    <p className='text-[#9999B4]'>Debit Date/Time</p>
                    {/* <p>21st of every month by 4pm</p> */}
                    <p>{formatDate(debitDate)}</p>
                </div>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>

                    <p className='text-[#9999B4]'>Amount to be paid</p>
                    <p><CurrencySymbol/>{formatNumberWithCommas(amountPaid)}</p>
                </div>
                
            </div>
            
        </div>
  )
}

export default SavingsCard