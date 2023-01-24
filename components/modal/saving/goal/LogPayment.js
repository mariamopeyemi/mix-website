import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import Checkbox from '@mui/material/Checkbox';
import { Dialog, Stack,Autocomplete, TextField } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const LogPaymentModal = ({toggle, open, onClick}) => {

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
    // const router = useRouter();
    return (
      <Dialog onClose={toggle} open={open}>
          <div className=" pt-[2rem] pb-[3rem] rounded-[8px] md:w-[400px] w-full ">
            <div className=" px-[4rem] flex items-end mb-8 ">
                <p>Log In Payment</p>
                <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
            </div>
            <hr className='w-[105%] mx-[auto] my-[2rem] border-solid border border-gray-200' />
            <Stack gap={"3rem"} className='px-[4rem] items-center flex flex-col'>
                <TextField name="id-amount" type={"text"} id="Amount" label="Amount" variant="filled" />
                <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        defaultValue={''}
                        onChange={''}
                        options={''}
                        disableCloseOnSelect
                        // getOptionLabel={(option) => (option.firstName + " " + option.lastName)}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {/* {(option.firstName + " " + option.lastName)} */}
                            </li>
                        )}
                        style={{ width: '100%' }}
                        renderInput={(params) => (
                            <TextField sx={{'& .MuiInputBase-root': {paddingTop:0}}} {...params} placeholder="Select members"  />
                        )}
                        />
                <div className='w-[100%]'>
                <LoadingButton
                    onClick={onClick}
                    variant="contained"
                >
                    Save
                </LoadingButton>
                </div>
      
            </Stack>
        </div>
    </Dialog>
  )
}

export default LogPaymentModal;