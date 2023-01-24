import React from 'react';
import Image from 'next/image'

const NotificationFlexCard = ({src, date, notificationTitle, notificationBody, view='View request'}) => {
  return (
    <div className='flex flex-row py-[1rem] gap-[2rem] ' >
              <div>
                <Image src={src} alt='user' width='45px' height='45px' />
              </div>
              <div className='flex flex-col text-[14px] '>
                <p className='text-[#666668] '>{notificationTitle}<span className='text-[#9999B4] ml-[1rem]'> {notificationBody}</span><span className='text-[#137C4B] underline cursor-pointer ml-[1rem] '> {view}</span></p>
                <p className='text-[#9999B4]'>{date}</p>
              </div>
            </div>
  )
}

export default NotificationFlexCard