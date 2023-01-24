import React from 'react';
import Image from 'next/image';

const InvestmentDetails = (
    {
        roi,
        startDate,
        endDate,
        location,
        duration,
        companyName,
        targetAmount,
        availableUnit,
        amountPerUnit,
        titleOfBusiness,
        establishmentDate,
      }
    ) => {
  return (
    <div className='flex flex-col my-[3rem] gap-[2rem]'>

        <div className='flex flex-wrap p-[2rem] gap-[1rem] md:flex-row md:gap-[3rem] md:p-[3rem] bg-white rounded-xl'>

            <Image src='/images/investor.svg' alt='investor' width='80px' height='80px' />
            <div className='flex flex-col gap-[2rem] my-[1rem]'>
                <p className=' text-[#666668]'> {companyName}</p>
                <p className='text-[#9999B4]  '>{titleOfBusiness}</p>

            </div><hr className='hidden md:block border border-solid border-[#EBEBEB] ' />
            <div className='flex flex-col gap-[2rem] my-[1rem]'>
                <p className='text-[#9999B4]  '>Application Date: <span className='ml-[0.3rem] text-[#666668]'> 23/05/2022</span></p>
                <p className='text-[#9999B4]  '>Location: <span className='ml-[0.3rem] text-[#666668]'> {location}</span></p>
            </div><hr className='hidden md:block border border-solid border-[#EBEBEB] ' />

            <div className='flex flex-col gap-[2rem] my-[1rem]'>
                <p className='text-[#9999B4]  '>Establishment Date: <span className='ml-[0.3rem] text-[#666668]'> {establishmentDate}</span></p>
                <p className='text-[#9999B4]  '>Target Amount: <span className='ml-[0.3rem] text-[#666668]'> {targetAmount}</span></p>
            </div>
        </div>

        <div className='flex flex-wrap md:flex-row justify-between p-[3rem] bg-white rounded-xl'>

            <p className='text-[#9999B4]  '>ROI: <span className='ml-[0.3rem] text-[#666668]'> {roi}</span></p>
            <p className='text-[#9999B4]  '>Start Date: <span className='ml-[0.3rem] text-[#666668]'> {startDate}</span></p>
            <p className='text-[#9999B4]  '>End Date: <span className='ml-[0.3rem] text-[#666668]'> {endDate}</span></p>
            <p className='text-[#9999B4]  '>Duration: <span className='ml-[0.3rem] text-[#666668]'> {duration}</span></p>
            <p className='text-[#9999B4]  '>Slots: <span className='ml-[0.3rem] text-[#666668]'> {availableUnit}</span></p>
            <p className='text-[#9999B4]  '>Amount per slot: <span className='ml-[0.3rem] text-[#666668]'> {amountPerUnit}</span></p>
        </div>
    </div>
  )
}

export default InvestmentDetails