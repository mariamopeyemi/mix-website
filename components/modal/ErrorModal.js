import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import { Dialog, Stack, TextField } from '@mui/material';

const ErrorModal = ({toggle, open,}) => {
  return (
    <Dialog onClose={toggle} open={open}>
        <div className="pt-[2rem] pb-[3rem] rounded-[8px] md:w-[500px] w-full ">
          <div className="px-[4rem] flex  items-end mb-8 ">
              <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
          </div>
          <div className='mx-[auto] text-center '>
            <Image src='/images/cancel.svg' alt='success' width='100px' height='100px' />
           </div>
          <Stack gap={"3rem"} className='mt-[2rem] px-[4rem] items-center flex flex-col'>
              <p className='w-[70%] items-center text-center text-[#9999B4] '>Opps! an error has occured</p>
              <div className='w-[100%]'>
              <LoadingButton
                //   onClick={onClick}
                  variant="contained"
              >
                  Try Again
              </LoadingButton>
              </div>
    
          </Stack>
      </div>
  </Dialog>
  )
}

export default ErrorModal;