import { Box, 
    Container, 
    Typography} 
    from '@mui/material';
import React from 'react';

import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Image from 'next/image';
// import {IconContext} from "react-icons";
// import { BsWhatsapp } from 'react-icons/bs';
// import { FiTwitter } from 'react-icons/fi';
// import { FaFacebookF } from 'react-icons/fa';
// import { BsInstagram } from 'react-icons/bs';
// import { AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='h-[auto] md:px-[10rem] bg-[#111111] text-white flex flex-col ' >
    <Box sx={{
        display: 'flex',
        flexDirection: {md:'row', xs:'column'},
        justifyContent:'space-between',
        // textAlign:'center',
        alignItems:'center',
        marginTop:'6vh',
        // marginBottom:'4vh',
        // backgroundColor: {md:'red', xs:'greenyellow'},
        }}
        >
        <Container >
            <img src='/img/yeboxLogo.svg' alt='Brand logo' className='w-[80px] h-[80px]' />
        </Container>
        <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: {md:'flex-end', xs:'space-between'}, gap: {md:'4rem', xs:'2rem'},  }}>
            <Typography >info@yebox.com</Typography>
            <Typography >+234-916-299-4549</Typography>
        </Container>
    </Box>
    <hr className='bg-[#2E3228] h-[2px] border-0 my-[2rem] ' />
    {/* <Divider sx={{
        color: 'white',
    }} /> */}
    <Box sx={{
        display: 'flex',
        flexDirection: {md:'row', xs:'column'},
        justifyContent:'space-between',
        marginTop:{md:'6vh', xs:'0vh'},
        gap: {md:'0px', xs:'1rem'},
        marginBottom:'4vh',
        // backgroundColor: {md:'red', xs:'greenyellow'},
        }}
        >
        <Container><p className=' text-[#C5C8BA]'> &#169; {" "} {new Date().getFullYear()} Yebox Technologies. All Right Reserved  </p></Container>
        <Container sx={{display: 'flex', gap: {md:'4rem', xs:'1rem'}, justifyContent: {md:'flex-end', xs:'flex-start'}, width:{md:'30%', xs:'100%'}}}>
            <img src='/img/linkedin.svg' alt='Brand logo' className='w-[25px] h-[25px]' />
            <img src='/img/twitter.svg' alt='Brand logo' className='w-[25px] h-[25px]' />
            <img src='/img/ig.svg' alt='Brand logo' className='w-[25px] h-[25px]' />
        </Container>
    </Box>
    </div>
  )
}

export default Footer;