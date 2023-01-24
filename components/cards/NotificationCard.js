import React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';

const NotificationCard = ({notificationtitle, notificationbody, date, span, onClick, withBtn=''}) => {
  return (
    <div className='bg-white rounded-xl p-[2rem] flex flex-col md:flex-row items-center '>
        <div className='flex flex-row w-[60%] gap-[3rem] md:gap-0'>
        <div className='w-[25%] flex flex-row items-center gap-[2rem] '>
            <input type='checkbox' />
            <Image src='/images/useravatar.svg' alt='user' width='65px' height='65px'  />
        </div>
        <div className='flex flex-col w-[75%] items-start'>
            <p className='text-[#000000] font-semibold'> {notificationtitle} <span className=' font-normal text-[#9999B4] ml-[2rem]'>{date}</span></p>
            <p className='text-[#666668]'> {notificationbody} <span className='font-semibold text-[#137C4B] ml-[1rem] underline cursor-pointer' onClick={onClick}>{span}</span></p>
        </div>
        </div>
        { withBtn && <div className="flex flex-row w-[60%] md:w-[40%] gap-[2rem]">
              <Button variant="contained" color='success' className='bg-[#C2E3D4] hover:text-white text-[#137C4B] rounded-[8px]' >Accept</Button>
              <Button variant="contained" color='error' className='bg-[#EEACB7] hover:text-white text-[#C31331] rounded-[8px]' >Decline</Button>
        </div>}
    </div>
  )
}

export default NotificationCard