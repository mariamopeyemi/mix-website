import React from 'react';
import Image from 'next/image';
import LabelTag from '../buttons/LabelTag';


// {
//     "loanType": [
//       "personal, cooperative"
//     ],
//     "companyName": "",
//     "typeOfBusiness": "",
//     "businessDesc": "",
//     "documents": [],
//     "dateNeeded": "",
//     "loanDuration": "",
//     "loanAmount": null,
//     "repayment": "",
//     "reasonForLoan": ""
//   }

const LoanCard = ({
    status, 
    text, 
    onClick, 
    userName='Alhiyu Sambara', 
    ltContent='Business Name', 
    lbContent='Sambara Farms',
    rtContent='Application Date', 
    rbContent='23/05/2022',
    businessDesc='Sambara farms is a livestock farm. We rear cows, goats, sheeps and have a poultry.'
}) => {
return (

    <div className='w-[320px] bg-white p-[3rem] rounded-xl ' >

        <div className='flex flex-row justify-between'>
            <Image src='/images/investor.svg' alt='img' width='35px' height='35px' />
            <LabelTag text={text} status={status}></LabelTag> 
        </div>
        <div className='flex flex-col mt-[2rem] gap-[1rem] '>
            <p className='items-start text-[#1D1D1D] font-bold '>{userName}</p>

            <p className='w-[full] items-start text-[#9999B4] text-[14px] '>{businessDesc}<span onClick={onClick} className='text-[#137C4B]  cursor-pointer'>Read More</span></p>

        </div>
        <hr className=' border-solid border-[#EBEBEB] my-[0.5rem] ' />
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col my-[0.5rem] '>
                <p className='items-start text-[#9999B4]  '>{ltContent}</p>
                <p className=' items-start text-[#1D1D1D] '>{lbContent} </p>
            </div>
            <div className='flex flex-col my-[0.5rem] '>
                <p className='items-start text-[#9999B4]  '>{rtContent}</p>
                <p className=' items-start text-[#1D1D1D] '>{rbContent}</p>
            </div>
        </div>
    </div>
  )
}

export default LoanCard;