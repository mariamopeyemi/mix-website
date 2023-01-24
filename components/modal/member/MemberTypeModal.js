import React from 'react';
import { Dialog } from '@mui/material';
// import PopupLayout from '../../layouts/PopupLayout';

const MemberTypeModal = ({existingMember, newMember, open, toggle}) => {
  return (
    <Dialog onClose={toggle} open={open} className='m-[auto] flex '>
        <div className=" rounded-[8px]  md:w-[400px] w-full ">
          <div className="flex px-[2rem] flex-row  items-center   ">
                <p>Add User</p>
                <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
          </div>
          <hr className='w-[full] mx-[auto] my-[0.5rem]  border-solid border border-gray-200' />
          
               {/* <PopupLayout withBorder={true} title="Add User" onClose={onClose}> */}
          <div className='flex flex-row justify-between'>
            <div className="flex flex-row justify-between gap-[2rem] p-[2rem] rounded-[8px]  md:w-[400px] w-full ">
              <div onClick={newMember} className='cursor-pointer bg-[#F0F2F3] rounded-xl p-[2rem] w-[150px] h-[100px] text-center '>Click to add New User</div>
              <div onClick={existingMember} className='cursor-pointer bg-[#F0F2F3] rounded-xl p-[2rem] w-[150px] h-[100px] text-center '>Click to add Exisiting User</div>
            </div>
          </div>
        </div>
        {/* </PopupLayout> */}
      </Dialog>
  )
}

export default MemberTypeModal;