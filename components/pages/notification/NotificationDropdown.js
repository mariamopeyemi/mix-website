import React, {useState} from 'react';
import Image from 'next/image'
import NotificationFlexCard from './NotificationFlexCard';
import { useRouter } from 'next/router';

const NotificationDropdown = () => {
  const router = useRouter();
  const [first, setFirst] = useState(false);
  function viewNotification(){
    router.push('/cooperative/notification')
  }
  return (
    <div className='relative'>
      <div className='cursor-pointer  '
        onClick={()=>setFirst(!first)}
      >
          <Image src='/images/notification.svg' alt='user' width='30px' height='30px' className="cursor-pointer" />
      </div>
      {first && <div className=' absolute w-[400px] right-0 z-20 my-[0.6rem] ' >
          <div className='bg-white p-[3rem] rounded-xl'>
            <div className='flex flex-row justify-between '>
              <p className='text-[#666668]'>Notifications</p>
              <p className='text-[#137C4B]'>Mark all as read</p>
            </div>
            <hr className=' mx-[auto] my-[2rem] border-solid border border-gray-200' />
            <div className='flex flex-col gap-[1rem] '>
              <NotificationFlexCard
                src='/images/useravatar.svg' date='2 days ago' notificationTitle='Wallet' notificationBody='has been top-up with N100,000' view='View wallet'
              />
              <NotificationFlexCard
                src='/images/useravatar.svg' date='2 days ago' notificationTitle='Wallet' notificationBody='has been top-up with N100,000' view='View wallet'
              />
            </div>
          </div>
          <div onClick={viewNotification} className='bg-[#137C4B] text-white w-[100%] py-[2rem] rounded-b-lg flex justify-center items-center cursor-pointer '>All Notifications</div>
        </div>}
    </div>
  )
}

export default NotificationDropdown;
