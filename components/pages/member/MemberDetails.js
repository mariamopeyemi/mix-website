import React from 'react';
import Image from 'next/image';

const MemberDetails = (
    { firstName,
        lastName,
        email,
        gender,
        state,
        address,
        phoneNumber,}
) => {
   
  return (
    <div className='flex flex-col my-[3rem] gap-[2rem] '>
        <div className='flex flex-row justify-between p-[3rem] pr-[4rem] bg-white rounded-xl'>
            <Image src='/images/member-avatar.svg' alt='investor' width='190px' height='145px' />
            <div className='flex flex-col gap-[3rem] '>
                <div className='flex flex-col gap-[0.1rem] '>
                    <p className='text-[#9999B4]  '>First Name</p>
                    {/* <p className=' text-[#666668]'> Winner</p> */}
                    <p className=' text-[#666668]'> {firstName}</p>
                </div>
                <div className='flex flex-col gap-[0.1rem] '>
                    <p className='text-[#9999B4]  '>Gender</p>
                    {/* <p className=' text-[#666668]'> Female</p> */}
                    <p className=' text-[#666668]'> {gender}</p>
                </div>
            </div>
            <div className='flex flex-col gap-[3rem] '>
                <div className='flex flex-col gap-[0.1rem] '>
                    <p className='text-[#9999B4]  '>Last Name</p>
                    {/* <p className=' text-[#666668]'> Okpere</p> */}
                    <p className=' text-[#666668]'> {lastName}</p>
                </div>
                <div className='flex flex-col gap-[0.1rem] '>
                    <p className='text-[#9999B4]  '>State</p>
                    {/* <p className=' text-[#666668]'> Lagos State</p> */}
                    <p className=' text-[#666668]'> {state}</p>
                </div>
            </div>
            <div className='flex flex-col gap-[3rem] '>
                <div className='flex flex-col gap-[0.1rem] '>
                    <p className='text-[#9999B4]  '>Phone Number</p>
                    {/* <p className=' text-[#666668]'> 08023848383</p> */}
                    <p className=' text-[#666668]'> {phoneNumber}</p>
                </div>
                <div className='flex flex-col gap-[0.1rem] '>
                    <p className='text-[#9999B4]  '>Address</p>
                    {/* <p className=' text-[#666668]'> 25 Okojie Strt, Ikeja.</p> */}
                    <p className=' text-[#666668]'> {address}</p>
                </div>
            </div>
            <div className='flex flex-col gap-[3rem] '>
                <div className='flex flex-col gap-[0.1rem] '>
                    <p className='text-[#9999B4]  '>Email Address</p>
                    {/* <p className=' text-[#666668]'> winnerokpere@gmail.com</p> */}
                    <p className=' text-[#666668]'>{email}</p>
                </div>
            </div>
    </div>
    </div>
  )
}

export default MemberDetails