import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import { Dialog, Stack, TextField } from '@mui/material';
import MySelect from '../../form-elements/Select';

const AddNewAdminModal = ({toggle, open, onClick}) => {
    const router = useRouter();
    return (
      <Dialog onClose={toggle} open={open}>
          <div className="px-[2rem] pt-[2rem] pb-[3rem] rounded-[8px] md:w-[520px] w-full ">
            <div className="flex px-[4rem] flex-row  items-center   ">
                <p>New User</p>
                <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
            </div>
            <hr className='w-[full] mx-[auto] my-[1.5rem]  border-solid border border-gray-200' />
            {/* <div  className=' gap-[2rem] w-[full] px-[3rem] items-center flex flex-col'> */}
            <TextField name="id-name" type={"name"} placeholder=" " id="name" className="w-[100%] my-[1rem]" label="Full Name" variant="filled" />
            <TextField name="id-email" type={"email"} placeholder=" " id="email" className="w-[100%] mb-[1rem]" label="Email Address" variant="filled" />
            <MySelect  label=" Role" items={["Investment Admin", "Financial Admin", "Admin"]} className="my-[1rem] "></MySelect>
            <div className='my-[1rem]'>
                    <LoadingButton
                        onClick={onClick}
                        variant="contained"
                    >
                    create
                    </LoadingButton>
                    </div>
            {/* </div> */}
        </div>
    </Dialog>
  )
}

export default AddNewAdminModal;