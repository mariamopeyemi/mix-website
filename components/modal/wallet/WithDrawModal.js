import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import { Dialog, Stack, TextField } from '@mui/material';

const WithDrawModal = ({toggle, open, onClick}) => {
    const router = useRouter();
    return (
      <Dialog onClose={toggle} open={open}>
          <div className="px-[2rem] pt-[2rem] pb-[3rem] rounded-[8px] md:w-[520px] w-full ">
            <div className="flex px-[4rem] flex-row  items-center   ">
                <p>Withdraw</p>
                <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
            </div>
            <hr className='w-[full] mx-[auto] my-[1.5rem]  border-solid border border-gray-200' />
            <Stack gap={"12px"} className='px-[3rem] items-center flex flex-col'>
                <TextField name="id-Amount" type={"name"} id="Amount" placeholder="N2,000" label="Amount" variant="filled" />
                <TextField name="id-Bank" type={"text"} id="Bank" placeholder="People's Bank" label="Bank Name" variant="filled" />
                <TextField name="id-Number" type={"tel"} id="AcctNo" placeholder="906598424" label="Account No." variant="filled" />
                <div className='w-[50%]'>
                    <LoadingButton
                        onClick={onClick}
                        variant="contained"
                    >
                    Withdraw
                    </LoadingButton>
                    </div>
            </Stack>
        </div>
    </Dialog>
  )
}

export default WithDrawModal;