import React from 'react';
import Image from 'next/image';

const CreditScoreCard = ({excellent, verygood, good, fair, poor, verybad }) => {
  return (
    <>
        { excellent &&
        <div className={`h-[70px] w-full md:w-[48%] flex flex-row justify-between rounded-xl items-center py-[1rem] px-[2rem] bg-[#00B050]`}>
            <div className='text-white font-bold '>80-100% (Excellent)</div>
            <Image src='/images/check.svg' alt='me' width='35px' height='35px' />
        </div>
        }
        { verygood &&
        <div className={` h-[70px] w-full md:w-[48%] flex flex-row justify-between rounded-xl items-center py-[1rem] px-[2rem] bg-[#FFC000]`}>
            <div className='text-white font-bold '>60-80% (Very Good)</div>
            
        </div>
        }
        { good &&
        <div className={` h-[70px] w-full md:w-[48%] flex flex-row justify-between rounded-xl items-center py-[1rem] px-[2rem] bg-[#FA621C]`}>
            <div className='text-white font-bold '>40-60% (Good)</div>
            
        </div>
        }
        { fair &&
        <div className={` h-[70px] w-full md:w-[48%] flex flex-row justify-between rounded-xl items-center py-[1rem] px-[2rem] bg-[#92D050]`}>
            <div className='text-white font-bold '>20-40% (Fair)</div>
            
        </div>
        }
        { poor &&
        <div className={` h-[70px] w-full md:w-[48%] flex flex-row justify-between rounded-xl items-center py-[1rem] px-[2rem] bg-[#F4B183]`}>
            <div className='text-white font-bold '>10-20% (Poor)</div>
            
        </div>
        }
        { verybad &&
        <div className={` h-[70px] w-full md:w-[48%] flex flex-row justify-between rounded-xl items-center py-[1rem] px-[2rem] bg-[#FF0000]`}>
            <div className='text-white font-bold '>0-10% (Very Bad)</div>
            
        </div>
        }
    </>
  )
}

export default CreditScoreCard