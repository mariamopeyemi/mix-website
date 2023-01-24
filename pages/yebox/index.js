import React from 'react';
import * as Yup from "yup";
import Image from 'next/image';
import { LoadingButton } from "@mui/lab";
import { Container, Divider, TextField , Stack, TextareaAutosize,  } from "@mui/material";
import { Box, Typography } from '@mui/material';
import { Field, Formik, Form } from "formik";
// import PrimaryBtn from '../../components/buttons/PrimaryBtn';
import Blurb from '../../components/cards/Blurb';
import AppStructure from '../../components/layouts/AppStruct';
import { Label } from '@mui/icons-material';
import SliderComp from '../../components/Slider';
import MobileSliderComp from '../../components/MobileSlider';
import Blurb2 from '../../components/cards/Blurb2';


const Index = () => {
  const INITIALVAL = {
		title: "",
		startDate: null,
		endDate: null,
		amountTobeSaved: "",
	};
	const formValidationSchema = Yup.object({
		title: Yup.string().required("title is required"),
		amountTobeSaved: Yup.string().required("amount is required"),
		startDate: Yup.date("")
			.required("Enter a start date")
			.typeError("Enter a valid date"),
		endDate: Yup
			.date("")
			.min(Yup.ref("startDate"), "End date can not be less than start date")
			.required("Enter an end date")
			.typeError("Enter a valid date"),
	});
  const handleSubmit = async (values) => {
		try {
			// await createFixedSavings(values);
			console.log(values, "this is fixed?");
		} catch (error) {
			// toast.error("Error creating fixed savings. Try again later");
			toast.error(data?.message, { duration: 10000 });
		}
	};
  return (
    <AppStructure>
      
      <div className=' flex flex-col text-center align-middle h-[auto] pb-[6rem] gap-[4rem] p-[2rem] md:p-[10rem] bg-[#111111]'>
      {/* <div className='bg-gradient-to-r from-black to-[#89C149]  flex flex-col text-center align-middle h-[auto] pb-[6rem] gap-[4rem] p-[2rem] md:p-[10rem] bg-[#111111]'> */}
        <Box  className='flex items-center  flex-col '>
        <div  className=' '>
        {/* <div  className='bg-gradient-to-r from-black to-[#89C149] h-[150px] w-[150px] rounded-[50%] '> */}
          <img src='img/mini-cube.png' alt='movement' className=' w-[100px] h-[100px] '/>
        </div>
        <div></div>
        {/* <div  className='rand absolute h-[150px] w-[150px] rounded-[50%] '>uuiii</div> */}
        
          <Typography className='title-light py-0 md:w-[30%] '>
          Get A Trusted Team To Build Your Dream Software.
          </Typography>
          <Typography className='body3_dark text-white md:w-[45%] justify-start'>
          Our highly skilled product designers, engineers, product managers, and product experts create custom software solutions that fit your unique needs.
        </Typography>
        <div className=" w-[200px] mt-[4rem]">
					  <LoadingButton
              className='hover:bg-black hover:border-[#638D33]  bg-gradient-to-r from-[#638D33] to-[#89C149] rounded-[20px] text-white hover:text-black'
								// onClick={handleSubmit}
							variant="contained"
							>
								Let’s make magic
						</LoadingButton>
				</div>
        <div  className='flex flex-col my-[4rem] gap-[2rem] items-center'>
          <img src='img/emptyCube.svg' alt='movement' className='myDIV w-[100px] h-[100px] md:w-[230px] md:h-[230px]  '/>
        </div>
        <div  className='flex relative h-[250px] flex-col my-[4rem] gap-[2rem] items-center'>
        <img src='img/cube.png' alt='movement' className='absolute w-[260px] h-[260px] md:w-[500px] md:h-[500px] '/>
        <div  className='hidden md:flex rand absolute top-[200px]  md:w-[300px] md:h-[300px] items-center  rounded-[50%] '>uuiii</div>
       
        </div>
       </Box>
       
      </div>
      <div  className='hidden md:flex faint absolute top-[300px]  md:w-[100px] md:h-[100px] items-center  rounded-[50%] '>uuiii</div>
      <div  className='hidden md:flex faint absolute top-[700px] right-[100px]  md:w-[100px] md:h-[100px] items-center  rounded-[50%] '>uuiii</div>
      <div  className='hidden md:flex faint absolute top-[2100px] right-[100px]  md:w-[120px] md:h-[120px] items-center  rounded-[50%] '>uuiii</div>
      {/* <div  className='bg-red-100 absolute top-[1200px] right-[100px]  md:w-[120px] md:h-[120px] items-center  rounded-[50%] '>uuiii</div> */}
       
      <div className=' flex flex-row h-[auto]  p-[2rem] gap-[4rem] md:px-[10rem] bg-black'>
       <Box  className='flex md:w-[50%] gap-4 md:pt-[20rem] flex-col '>
          <Typography className='body3_light  md:w-[70%] text-[#89C149]'>
          INCREASE YOUR VELOCITY
          </Typography>
          <Typography className='title-light md:w-[60%] '>
          Build, Launch and scale your application across various channels within a short time.
          </Typography>
          
          <div className="w-[50%] mt-[2rem]">
            <LoadingButton
            className='bg-black w-[200px] border-[#638D33] hover:bg-gradient-to-r  from-[#638D33] to-[#89C149] rounded-[20px] text-white'
              // onClick={handleSubmit}
                variant="outlined"
              >
                Let’s make magic
						</LoadingButton>
				  </div>
        </Box>
        <div  className='hidden pt-[25rem] md:flex md:justify-end md:w-[50%] '>
        {/* <img src='img/empty2.svg' alt='movement' className='myDIV w-[500px] h-[600px] '/> */}
        <img src='img/empty2.svg' alt='movement' className='spinner-slower w-[500px] h-[600px] '/>
        {/* <img src='img/emptyPyramid.svg' alt='movement' className='w-[500px] h-[600px] '/> */}
      </div>
      </div>
      <div className=' flex flex-col h-[auto] pb-[6rem] md:h-[90vh] gap-[4rem] p-[2rem] md:p-[10rem] bg-black'>
        <Box  className='flex md:w-[50%] gap-4 flex-col '>
          <Typography className='body3_light  md:w-[70%] text-[#89C149]'>
            OUR CLIENTS
          </Typography>
          <Typography className='title-light md:w-[60%] '>
            Proof That You’re In Good Hands
          </Typography>
          <Typography className='body3_dark text-[#A9AD9F] my-[4rem] md:w-[60%] justify-start'>
            We are proud to have partnered with top brands to create and deliver high quality solutions and services to meet users needs.
          </Typography>
        </Box>
        <Box  className='flex gap-[4rem] md:flex-col flex-row justify-center '>
          <div className='flex flex-col md:flex-row gap-[2rem] md:gap-0 justify-between '
          >
            <Image width='150px' height='50px' src='/img/kudibarLogo.svg' alt='movement'/>
            <Image width='150px' height='50px' src='/img/kennisLogo.svg' alt='movement'/>
            <Image width='150px' height='50px' src='/img/kvLogo.svg' alt='movement'/>
            <Image width='150px' height='50px' src='/img/yeboraLogo.svg' alt='movement'/>
            <Image width='150px' height='50px' src='/img/xerobugLogo.svg' alt='movement'/>
         </div>
          <div className='flex flex-col md:flex-row gap-[2rem] md:gap-0 justify-between ' 
          >
            <Image width='150px' height='50px' src='/img/hbLogo.svg' alt='movement'/>
            <Image width='150px' height='50px' src='/img/gtbLogo.svg' alt='movement'/>
            <Image width='150px' height='50px' src='/img/zenithLogo.svg' alt='movement'/>
            <Image width='150px' height='50px' src='/img/unionLogo.svg' alt='movement'/>
            <Image width='150px' height='50px' src='/img/parallexLogo.svg' alt='movement'/>
         </div>
        </Box>
      </div>

      <div className=' flex flex-col h-[auto] gap-[4rem] p-[2rem] md:p-[10rem] bg-[#E5E5E5]'>
      <Box  className='flex md:w-[50%] gap-4 flex-col '>
          <Typography className='body3_light  md:w-[70%] text-[#89C149]'>
          HOW WE WORK
          </Typography>
          <Typography className='title-light !text-black md:w-[60%] '>
          Our Simple 3-step<br/> work plan
          </Typography>
        </Box>
        <Box className='flex gap-[3rem] flex-col md:flex-row'>
        <Blurb 
          circle='true'
          title='Requirements gathering' 
          details='Our first step is to gather and document the requirements for the software. 
            This may involve conducting user research, conducting stakeholder interviews, and analyzing data to understand the problem 
            that the software is intended to solve.' 
          sn='1'/>
        <Blurb 
          square='true'
          title='Design and development' 
          details='The next step involves designing and developing the software, which involves 
            creating wireframes, mockups, and other visual aids to help stakeholders and collaborators understand the proposed solution. 
            As soon as the requirements have been understood, 
            the development team will begin coding and implementing the design.' 
          sn='2'/>
        <Blurb 
          circle='true'
          title='Testing and deployment' 
          details='The final step is to test and deploy the software. It involves writing test cases, conducting unit tests, 
          and system testing to ensure that the software is bug-free and meets the requirements. After passing all the tests, 
          the software is deployed to production.' 
          sn='3'/>
        </Box>
      </div>

      {/* <div className='justify-between flex flex-col h-[auto] gap-[4rem] p-[2rem] md:p-[10rem] bg-white'>
        <div className='justify-between flex flex-col md:flex-row h-[auto] gap-[4rem] p-[2rem] md:p-[10rem] bg-white'>
          <Box  className='flex md:w-[50%] gap-4 flex-col '>
            <Typography className='body3_light  md:w-[70%] text-[#89C149]'>
            TESTIMONIALS
            </Typography>
            <Typography className='title-light !text-black md:w-[60%] '>
            Our Impact <br/>speaks for itself
            </Typography>
          </Box>
          <Box className='flex gap-[2rem]'>
          <Image width='50px' height='50px' src='/img/leftNav.svg' alt='movement'/>
          <Image width='50px' height='50px' src='/img/rightNav.svg' alt='movement'/>
          </Box>
        </div>
        <Box  className='flex md:w-[50%] gap-4 flex-col '>
        <Blurb2
          title='“World renowned team of experts doing amazing things”' 
          name='Mr. Wale Ojo' 
          firm='Microsoft Nigeria'
          />
        </Box>
      </div> */}
    <div className='hidden md:flex flex-col text-center align-middle h-[auto] pb-[6rem] gap-[4rem] p-[2rem] md:p-[10rem] bg-white '>
      <SliderComp />
    </div>
    <div className='md:hidden  flex flex-col text-center align-middle h-[auto] pb-[6rem]  p-[2rem] md:p-[10rem] bg-red-500'>
      <MobileSliderComp />
    </div>
      <div className=' flex flex-col md:flex-row h-[auto] gap-[4rem]  bg-[#000000]'
      >
    
      <Box  className='flex md:w-[50%] gap-4 flex-col p-[2rem] md:p-[10rem]'>
        <Typography className='body3_light  md:w-[70%] text-[#89C149]'>
        BUILDING THE NEXT UNICORN
        </Typography>
        <Typography className='title-light md:w-[70%] '>
        Building our own <br/>
        innovations and <br/>
        software is also one of<br/>
         our key offerings.<br/>
        </Typography>
        <div className="w-[50%] mt-[2rem]">
					<LoadingButton
           className='bg-black w-[200px] border-[#638D33] hover:bg-gradient-to-r  from-[#638D33] to-[#89C149] rounded-[20px] text-white'
						// onClick={handleSubmit}
							variant="outlined"
						>
							Let’s make magic
						</LoadingButton>
				</div>
      </Box>
      <div  className='hidden md:flex md:justify-end md:w-[50%] '>
        <img src='img/pyramid.png' alt='movement' className='w-[500px] h-[600px] '/>
      </div>
      </div>

      <div className=' flex flex-col md:flex-row h-[auto] gap-[4rem] p-[2rem] md:p-[10rem] bg-[#000000]'
      >
    
      <Box  className='flex md:w-[70%] gap-4 flex-col '>
        <Typography className='body3_light  md:w-[70%] text-[#89C149]'>
        READY WHEN YOU ARE
        </Typography>
        <Typography className='title-light md:w-[70%] '>
        Get Started
        </Typography>
        <Typography className='body3_dark text-white my-[4rem] md:w-[60%] justify-start'>
          Join dozens of corporates, fast-growing startups scaling their teams, 
          accessing new market opportunities and building brilliant products with Yebox.
        </Typography>
      </Box>
      <Box  className='flex md:w-[70%] gap-4 flex-col md:flex-row'>
        <Formik
					initialValues={INITIALVAL}
					validationSchema={formValidationSchema}
					//   onSubmit={(values) => console.log(values, "she doesnt work well")}
					onSubmit={handleSubmit}
				>
					{({
						errors,
						touched,
						isSubmitting,
					}) => {
						return (
							<Form className="w-[100%]">
								<Stack
									gap={"1rem"}
									className="px-[4rem] flex flex-col"
								>
                  <Typography >FULL NAME</Typography>
									<Field
                    // sx={{ backgroundColor: "blue" }}
										as={TextField}
										name="full_name"
										// error={touched.title && errors.title}
										// helperText={touched.title && errors.title}
									/>
                  <Typography>COMPANY</Typography>
									<Field
										as={TextField}
										name="company_name"
										// error={touched.amountTobeSaved && errors.amountTobeSaved}
										// helperText={
										// 	touched.amountTobeSaved && errors.amountTobeSaved
										// }
									/>
                  <Typography>EMAIL</Typography>
									<Field
										as={TextField}
                    className='bg-[#111111] border-3 '
										name="email"
                    type='email'
										// error={touched.amountTobeSaved && errors.amountTobeSaved}
										// helperText={
										// 	touched.amountTobeSaved && errors.amountTobeSaved
										// }
									/>
                  <Typography>HOW MAY WE HELP YOU?</Typography>
									<Field
										as={TextareaAutosize}
                    minRows={6}
                    className='bg-[#111111] border-0 '
										name="what_you_need"
										// error={touched.amountTobeSaved && errors.amountTobeSaved}
										// helperText={
										// 	touched.amountTobeSaved && errors.amountTobeSaved
										// }
									/>

									<div className="w-[50%] mt-[2rem]">
										<LoadingButton
                      className='hover:bg-black hover:border-[#638D33]  bg-gradient-to-r from-[#638D33] to-[#89C149] rounded-[20px] text-white hover:text-black'
											type="submit"
											loading={isSubmitting}
											// onClick={handleSubmit}
											variant="contained"
										>
											Submit form
										</LoadingButton>
									</div>
								</Stack>
							</Form>
						);
					}}
				</Formik>
      </Box>
      </div>
    </AppStructure >
  )
}

export default Index