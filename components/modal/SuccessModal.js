import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import { Dialog, Stack, TextField } from '@mui/material';

const SuccessModal = ({toggle, open, msg, btnText,}) => {
  return (
    <Dialog onClose={toggle} open={open}>
        <div className="pt-[2rem] pb-[3rem] rounded-[8px] md:w-[500px] w-full ">
          <div className="px-[4rem] flex  items-end mb-8 ">
              <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
          </div>
          <div className='mx-[auto] text-center '>
            <Image src='/images/success-confetti.svg' alt='success' width='200px' height='200px' />
           </div>
          <Stack gap={"3rem"} className=' px-[4rem] items-center flex flex-col'>
              <p className='w-[70%] items-center text-center text-[#9999B4] '>{msg}</p>
              <div className='w-[100%]'>
              <LoadingButton
                  onClick={toggle}
                  variant="contained"
              >
                 {btnText}
              </LoadingButton>
              </div>
    
          </Stack>
      </div>
  </Dialog>
  )
}

export default SuccessModal;

