import React from 'react';
import CreditScoreCard from '../../cards/CreditScoreCard';

const CreditScore = () => {
  return (
    <div className='bg-white p-[3rem] rounded-xl flex flex-col my-[3rem] !min-h-[40rem]'>

        <div className='flex flex-col xl:flex-row justify-between items-center'>

                    <p className='items-start text-[#666668] text-[24px] '>Credit Score</p>
                    <p className='text-[#666668]  '>Calculation is based on the savings of the applicant</p>
        </div>
        <hr className=' border-solid border-[#EBEBEB] my-[2rem]  ' />
        <div className={`flex flex-wrap gap-[2rem] w-full `}>
            <CreditScoreCard excellent={true} />
            <CreditScoreCard verygood={true} />
            <CreditScoreCard good={true}  />
            <CreditScoreCard fair={true}  />
            <CreditScoreCard poor={true}   />
            <CreditScoreCard verybad={true}  />
        </div>
            
    </div>
  )
}

export default CreditScore;