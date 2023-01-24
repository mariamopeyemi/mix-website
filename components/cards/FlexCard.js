import React from 'react';
import Image from 'next/image';

const FlexCard = ({src, name, amount, status, date}) => {
  return (
    <div className='flex flex-row justify-between my-[1rem] w-[100%]'>
        <Image src={src} alt='img' width='50px' height='50px' />
        <div className='flex flex-col w-[80%] '>
        <div className='flex flex-row justify-between'>
            <p className="h-full body_heavy text-black-default flex items-center ">{name}</p>
            <p className="h-full flex items-center ml-[20px]">{amount}</p>
        </div>
        <div className='flex flex-row justify-between'>
            <p className="h-full text-[#9999B4] flex items-center ">{date}</p>
            <p className="h-full caption_heavy text-[#FF7115] flex items-center ml-[20px]">{status}</p>
        </div>
        </div>
    </div>
  )
}

export default FlexCard;