import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import { Dialog, Stack } from '@mui/material';
import LabelTag from '../../buttons/LabelTag';
import FlexContent from '../../form-elements/FlexContent';
import DashedHr from '../../form-elements/DashedHr';

const FailedReceiptModal = ({toggle, open}) => {
    const router = useRouter();
    return (
      <Dialog onClose={toggle} open={open}>
          <div className="px-[2rem] pt-[1rem] pb-[3rem] rounded-[8px] md:w-[500px] w-full ">
            <div className="flex p-[0px] items-end ">
                <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
            </div>
            <hr className='mt-[1.5rem] mb-[3rem] border-solid border border-gray-200' />
            <Stack gap={"12px"} className='p-[2rem] mx-[5rem] my-[3rem] items-center flex flex-col border-solid rounded-xl border border-[#1215281A]'>
                <div className='flex flex-row justify-between w-full'>
                    <p className='text-[#1D1D1D] font-bold'>Payment Receipt</p>
                    <LabelTag text='Failed' status='error'></LabelTag>
                </div>
                <DashedHr className='!my-[1.5rem]' />
                <FlexContent contentLeft='Date: ' contentRight='01/3/2022' />
                <FlexContent contentLeft='Time: ' contentRight='13:00 pm' />
                <FlexContent contentLeft='Type: ' contentRight='Debit' />
                <FlexContent contentLeft='Payment  Id: ' contentRight='345335674' />
                <DashedHr className='!my-[1.5rem]' />
                <FlexContent contentLeft='Amount: ' contentRight='N5000' />
                
            </Stack>
            <div className=' mx-[5rem]  items-center'>
                <LoadingButton
                        onClick={() => {
                            // router.push("/");
                        }}
                        variant="contained"
                    >
                        Try Again
                    </LoadingButton>
            </div>
        </div>
    </Dialog>
  )
}

export default FailedReceiptModal;