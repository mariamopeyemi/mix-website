import React from 'react';
// import PrimaryBtn from '../buttons/PrimaryBtn';
import { Box, Typography } from '@mui/material';

const Blurb = ({title, details, sn, circle, square}) => {
  return (
    <Box className=' md:w-[500px]'>
      {circle && <div className='mb-6 p-[0.5rem] text-center w-[50px] h-[50px] rounded-[50%] bg-black'>
      <Typography className='sub-title-light '> {sn} </Typography>
      </div>}
      { square && <div className='mb-6 p-[0.5rem] text-center w-[50px] h-[50px]  bg-black'>
      <Typography className='sub-title-light '> {sn} </Typography>
      </div>}
        
        <Typography className='md:title-dark sub-title-dark text-black mb-6'> {title} </Typography>
        <Typography className='body3_dark text-greyText mb-6'> {details} </Typography>
        {/* <PrimaryBtn text={btnText} /> */}
    </Box>
  )
}

export default Blurb;