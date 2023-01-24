import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import { Dialog, Stack, TextField } from '@mui/material';

const TopUpModal = ({toggle, open, onClick}) => {
    const router = useRouter();
    return (
      <Dialog onClose={toggle} open={open}>
          <div className=" pt-[2rem] pb-[3rem] rounded-[8px] md:w-[500px] w-full ">
            <div className=" px-[4rem] flex items-end mb-8 ">
                <p>Top Up</p>
                <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
            </div>
            <hr className='w-[105%] mx-[auto] my-[2rem] border-solid border border-gray-200' />
            <Stack gap={"3rem"} className='px-[4rem] items-center flex flex-col'>
                <TextField name="id-amount" type={"text"} id="Amount" label="Amount" variant="filled" />

                <div className='w-[100%]'>
                <LoadingButton
                    onClick={onClick}
                    variant="contained"
                >
                    Top Up
                </LoadingButton>
                </div>
      
            </Stack>
        </div>
    </Dialog>
  )
}

export default TopUpModal;