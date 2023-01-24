import React from 'react';
import Image from 'next/image';
import MemberFilter from '../fillter/MemberFilter';


const Search = ({placeholder='Search User'}) => {
  return (
    <div>
        {/* <label className='caption_heavy text-black-default '>{label}</label> */}
        <div  className=" px-[16px]  flex flex-row justify-between border !w-[100%] h-[48px] bg-white  rounded-2xl border-black ">
            <div className='w-[90%] flex flex-row'>
                <Image src='/images/search.svg' alt='search' height='20px' width='20px' />
                <input
                    className="ml-[2rem] w-full text-[14px] border-white border-solid focus:border-white placeholder:text-black rounded-2xl"
                    type='search'
                    placeholder={placeholder}
                ></input>
            </div>
            <div className='my-[auto]'>
                <MemberFilter />
            </div>
        </div>
    </div>
  )
}

export default Search;