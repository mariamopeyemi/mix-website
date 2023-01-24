import React from 'react';
// import PrimaryBtn from '../buttons/PrimaryBtn';
import { Box, Typography } from '@mui/material';

const Blurb2 = ({title, name, firm}) => {
  return (
    <Box className=' testCard md:w-[400px] p-[4rem] flex flex-col items-start'>
        <Typography className='body1_dark mb-6 text-start'> {title} </Typography>
        <Typography className='body2_dark text-black mb-2'> {name} </Typography>
        <Typography className='body3_dark text-greyText mb-6'> {firm} </Typography>
        {/* <PrimaryBtn text={btnText} /> */}
    </Box>
  )
}

export default Blurb2;