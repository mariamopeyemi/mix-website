import React, {useState} from 'react';
import Image from 'next/image'

const Filter = () => {
  const [first, setFirst] = useState(false);
  return (
    <div className='relative'>
      <div className='cursor-pointer items-center flex flex-row w-[200px] h-[48px] rounded-xl justify-between bg-white px-[20px] '
        onClick={()=>setFirst(!first)}
      >
          <p className=''>Monthly</p>
          <p className='text-[20px] mb-[2rem] '>	&#8964;</p>
      </div>
      {first && <div className=' absolute right-0 w-[200px] my-[0.6rem] '>
      <div className='bg-white p-[3rem] rounded-xl'>
          <div className='mb-6  flex justify-between '>
            <label className=''>Daily</label>
            <input type='radio' value='Daily' className='cursor-pointer' />
          </div>
          <div className='mb-6 flex justify-between'>
            <label className=''>Monthly</label>
            <input type='radio' value='Monthly' className='cursor-pointer' />
          </div>
        </div>
        </div>}
    </div>
  )
}

export default Filter;
