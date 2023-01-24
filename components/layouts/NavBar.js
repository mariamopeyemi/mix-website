// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const NavBar = () => {
//   return ( 
//     <Box className='h-[8vh] bg-red-200 flex text-center justify-center'>
//       <Typography className='my-[auto] '>NAV BAR</Typography>
//     </Box>
//   )
// }

// export default NavBar

import { useRouter } from "next/router";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from "next/image";

const pages = ['About', 'Our Work', 'Career', 'Blog'];
const settings = ['About', 'Account', 'Dashboard', 'Logout'];

function newPage() {
    console.log('huaweiiii')
}


const page = [
    { name: "About", link: `/yebox/about`, },
    { name: "Our Works", link: `/yebox/works`,  },
    { name: "Career", link: `/yebox/career`,  },
    { name: "Blog", link: `/yebox/blog`,  },
]

function NavBar() {

  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  function goToContact() {
    router.push('/yebox/contact')
    }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className='bg-[#111111] px-[2rem]'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Container>
        <Tooltip title="Home"> 
        <Image 
             onClick={
                ()=>{router.push('/yebox')}
            }
             src='/img/yeboxLogo.svg' alt='Brand logo' width='80p' height='80px' className="cursor-pointer" />
        </Tooltip >
        </Container>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {page.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} 
                >
                  <Typography onClick={
                    ()=>{router.push(page.link)}
                  } textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {page.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} 
                >
                  <Typography onClick={
                    ()=>{router.push(page.link)}
                  } textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            <Button
                onClick={goToContact}
                sx={{ my: 2, color: 'white', display: 'block' }}
                className='w-[150px] bg-gradient-to-r from-[#638D33] to-[#89C149] rounded-[20px] text-white'
			>
                Talk to us
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/*  */}
        
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;