import React from 'react';
import Image from 'next/image';
import { LoadingButton } from '@mui/lab';

const LoanDetails = ({personal, corporate, unColoredBtnTitle='Decline', coloredBtnTitle='Approve', loading, coloredBtnClick, unColoredBtnClick,}) => {
  return (
    <div className='flex flex-col my-[3rem] gap-[2rem]'>

        <div className='flex  flex-col md:flex-row justify-between p-[3rem] bg-white rounded-xl'>

            <div className='flex flex-row  gap-[2rem] items-center'>
            <Image src='/images/investor.svg' alt='investor' width='80px' height='80px' />
            <div className='flex flex-col gap-[1rem] my-[1rem]'>
                <p className=' text-[#666668]'>Company name</p>
                <p className='text-[#9999B4]  '>Loan amount request: <span className='text-[#FF7115]'>N300,000 </span></p>
            </div>
            </div>
           {corporate && <div className='flex flex-col items-end gap-[1rem] my-[1rem]'>
                <p className='text-[#9999B4]  '>Location: <span className='ml-[0.3rem] text-[#666668]'> Abuja</span></p>
                <p className='text-[#9999B4]  '>Business type: <span className='ml-[0.3rem] text-[#666668]'> Agriculture</span></p>
            </div>}

           {personal && <div className='w-[full] md:w-[40%] flex  md:flex-row md:items-end gap-[1rem] my-[1rem]'>

                <div className='w-[48%]'>
                    <LoadingButton
                        onClick={coloredBtnClick}
                        loading={loading}
                        variant="contained"
                    >
                        {coloredBtnTitle}
                    </LoadingButton>
                </div>
                
                <div className='w-[48%]'>
                    <LoadingButton
                        onClick={unColoredBtnClick}
                        loading={loading}
                        className={`bg-[#C31331] hover:bg-red-400`}
                        variant="contained"
                    >
                        {unColoredBtnTitle}
                    </LoadingButton> 
                </div>
        
            </div>}
        </div>
        <div className='bg-white p-[3rem] rounded-xl flex flex-col my-[3rem] !min-h-[40rem]'>

            <div className='flex flex-col md:flex-row justify-between'>

                    <p className='items-start text-[#9999B4]  '>Date Needed: <span className='ml-[0.3rem] text-[#1D1D1D]'> 01/06/2022</span></p>
                    <p className='text-[#9999B4]  '>Loan Duration:  <span className='ml-[0.3rem] text-[#1D1D1D]'> 6 Months</span></p>
                    <p className='text-[#9999B4]  '>Proposed Repayment Date: <span className='ml-[0.3rem] text-[#1D1D1D]'> 23/05/2022</span></p>
            </div>
            <hr className=' border-solid border-[#EBEBEB] my-[2rem] ' />
            <p className='text-[#9999B4]  '>Velit, egestas non proin sed elementum, a, molestie eu. Ut donec eget adipiscing nullam lectus egestas. Purus a congue metus, vulputate ut enim. 
                Rhoncus ultricies volutpat faucibus pretium, tortor scelerisque. Ut cursus proin cursus sit pretium nulla. Tincidunt nunc, tristique dolor vulputate id suspendisse pharetra nibh. 
                Lorem scelerisque adipiscing donec facilisi aliquam. Commodo lacus vehicula ultricies interdum euismod massa mattis mus sapien. Sagittis risus, amet, tortor in neque fringilla tellus hac. 
                Leo elit in tortor sit mi viverra sed adipiscing. Mi habitant arcu semper quisque. Felis potenti turpis commodo fames orci. Sed nullam elementum at donec aliquam orci cursus lorem. 
                Mattis et morbi fermentum suspendisse viverra elit fermentum pellentesque adipiscing. Vestibulum, vitae orci netus nisl. Ornare lobortis nunc vulputate nulla. Ultricies lectus.</p>
                
        </div>
    </div>
  )
}

export default LoanDetails;