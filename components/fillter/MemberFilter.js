import React, {useState} from 'react';
import Image from 'next/image'

const MemberFilter = () => {
  const [first, setFirst] = useState(false);
  return (
    <div className='relative'>
      <div className='cursor-pointer  rounded-xl justify-between bg-white px-[20px] '
        onClick={()=>setFirst(!first)}
      >
            <Image src='/images/filter.svg' alt='filter' height='25px' width='25px' />
      </div>
      {first && <div className=' absolute right-0 w-[250px] my-[0.6rem]  '>
      <div className='bg-white py-[1rem] rounded-xl'>
          <div className='mb-6 px-[3rem] flex justify-between '>
            <label className='text-[#137C4B] '>Filter By</label>
            <label className=' underline text-[#EBEBEB] '>Reset Filters</label>
          </div>
          <div className='mb-6 px-[3rem] flex justify-between hover:text-[#9999B4] hover:bg-[#F8FAFC] '>
            <label className=''>Active Users</label>
          </div>
          <div className='mb-6 px-[3rem] flex justify-between hover:text-[#9999B4] hover:bg-[#F8FAFC]'>
            <label className=''>Inactive Users</label>
          </div>
          <div className='mb-6 px-[3rem] flex justify-between hover:text-[#9999B4] hover:bg-[#F8FAFC]'>
            <label className=''>Blocked Users</label>
          </div>
        </div>
        </div>}
    </div>
  )
}

export default MemberFilter;
