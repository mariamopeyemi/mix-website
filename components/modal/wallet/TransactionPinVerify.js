import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import { Dialog, Stack } from '@mui/material';

const TransactionVerifyModal = ({toggle, open}) => {
    const router = useRouter();
    return (
      <Dialog onClose={toggle} open={open}>
          <div className="px-[2rem] pt-[2rem] pb-[3rem] rounded-[8px] md:w-[520px] w-full ">
            <div className="flex p-[0px] items-end ">
                <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
            </div>
            <Stack gap={"12px"} className='px-[3rem] items-center flex flex-col'>
                <p className="text-black flex text-center w-[70%]">Enter 4 digit verification code sent to your number (+234568793024)</p>
                <Image src='/auth/lock-key.svg' alt='lock' width='150px' height='200px' />
                <div></div>
                <div className='w-[50%]'>
                <LoadingButton
                    onClick={() => {
                        router.push("/signin");
                      }}
                    variant="contained"
                >
                    Verify
                </LoadingButton>
                </div>
            </Stack>
        </div>
    </Dialog>
  )
}

export default TransactionVerifyModal;