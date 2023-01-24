import React from 'react';
import Image from 'next/image';

const Calender = ({ label }) => {
  
  return (
  //   <div className="flex items-center justify-center">
  //     <label className=" text-black flex mb-[8px]">{label}</label>
  //   <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
  //     <input type="text"
  //       className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
  //       placeholder="Select a date" />
  //     <label htmlFor="floatingInput" className="text-gray-700">Select a date</label>
  //     <button className="datepicker-toggle-button" data-mdb-toggle="datepicker">
  //     <Image src='/images/Calendar.svg' alt='date' width='25px' height='25px' className='cursor-pointer' />
  //     </button>
  //   </div>
  // </div>
  <div className="flex items-center justify-center">
  <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
    <input type="text"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" data-mdb-toggle="datepicker" />
    <label htmlFor="floatingInput" className="text-gray-700">Select a date</label>
  </div>
</div>
  );
};

export default Calender;
