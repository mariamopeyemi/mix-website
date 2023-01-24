import React, {useState} from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import { CalendarPicker, LoadingButton } from "@mui/lab";
import { Box, Dialog, Stack, TextareaAutosize, TextField } from '@mui/material';
import Calender from '../../form-elements/Calender';

const DeclineModal = ({toggle, open}) => {
    const router = useRouter();
    const [passType, setPassType] = useState("password");

    return (
        <Dialog onClose={toggle} open={open}>
        <div className="pt-[2rem] pb-[3rem] rounded-[8px] md:w-[500px] w-full ">
          <div className="flex px-[4rem] items-end mb-8 ">
              <p>Reasons for Declining</p>
              <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
          </div>
          <hr className='w-[105%] mx-[auto] my-[2rem] border-solid border border-gray-200' />
          <Stack gap={"3rem"} className='px-[4rem] items-center flex flex-col'>
             
            {/* <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                 <TextField
                    id="filled-multiline-static"
                    label="Type Here"
                    multiline
                    rows={4}
                    defaultValue="Type Here"
                    variant="filled"
                    className='border border-solid border-green-400 '
                    />reasonsForDecline
            </Box>    */}
            <TextareaAutosize placeholder='Type Here' 
                className='w-full !h-[200px] bg-[#F0F2F3] rounded-xl p-[2rem]'
            />
              <div className='w-[100%]'>
              <LoadingButton
                  onClick={() => {
                      // router.push("/signin");
                    }}
                  variant="contained"
              >
                  Send
              </LoadingButton>
              </div>
    
          </Stack>

      </div>
  </Dialog>
  )
}

export default DeclineModal;