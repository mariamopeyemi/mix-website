import React, {useRef} from 'react';
import Image from 'next/image';

const AddMediaFileCard = ({uploading, toUpload, fileType,
  // multiple = true,
  // accept = "image/png, image/gif, image/jpeg",
}) => {
  // const fileInputRef = useRef(null);
  // const accessibilityClick = () => {
  //   fileInputRef.current.click();
  // };
  function handleFileUpload(){
    console.log('to upload file');
  }
  return (
    <div>
        {uploading &&
        <div className='w-[full] bg-white rounded-xl p-[3rem] flex flex-col items-center'>
            <Image src='/images/addFile.svg' alt='Add File' width='20px' height='20px' />
            <div className='flex flex-row w-[auto] items-center gap-[2rem]'>
                <div className="w-[200px] bg-gray-300 h-3 rounded-xl">
                    <div className="!bg-[#137C4B] h-3 w-[50%] rounded-xl " ></div>
                </div>
                <p>50%</p>
            </div>
            <p  className=''>Uploading....</p>
            </div>}
        {toUpload && 
        <div className='w-[full] bg-white rounded-xl px-[2rem] py-[3rem] flex flex-col items-center'>
          {/* <input  id={"file-upload"} type={"file"}></input> */}
          {/* <input ref={fileInputRef} accept={accept} className="hidden" multiple={multiple} onChange={handleFileUpload} id={"file-upload"} type={"file"}></input> */}
            {/* <div className='flex flex-col items-center cursor-pointer' onClick={accessibilityClick}> */}
            <div className='flex flex-col items-center cursor-pointer' >
              <Image src='/images/addFile.svg' alt='Add File' width='20px' height='20px' />
              <p className='text-[16px] text-[#137C4B] text-center'>Click this area to upload <span>{fileType}</span></p>
              <p>700px by 1500px JPEG or PNG </p>
            </div>
        </div>}
    </div>
  )
}

export default AddMediaFileCard