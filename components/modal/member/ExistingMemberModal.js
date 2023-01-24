import toast from "react-hot-toast";
import { LoadingButton } from '@mui/lab';
import Checkbox from '@mui/material/Checkbox';
import React, {useEffect, useState} from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Dialog , Stack, Autocomplete, TextField} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {getAllMember, addCoopMember} from '../../../services/cooperative-admin.js';


const ExistingMemberModal = ({open, toggle}) => {

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  // state to get all planvest members from endpoint to dropdown
  const [member,setMember] = useState([])
  // to set state of fetched existing members
  const [existingMember, setExistingMember] = useState([]);
  // check if endpoint works
  const [fetchingMembers, setFetchingMembers] = useState(false);
  // state to send selected member from gotten existing mem
  const [postMember, setPostMember] = useState([]);

  const handleRetrieve = async () => {
    // this func handles sending or posting of selected existing mem
    const output= postMember?.selectedExistingMembers?.map(element=> element.id);
    console.log(output);
    const returnValue = {
      "users": output
    }
    await addCoopMember(returnValue)
    toast.success('successfully added to cooperative', {duration:10000})
    toggle(!toggle)
    
  };


const handleSelectChange=(e, newVal)=>{
  // handles the changed existing member
  setPostMember({ ...postMember, selectedExistingMembers: newVal});
}


useEffect(()=>{
  // this fetches all the existing mem on platform
  (async () => {
    try {
      setFetchingMembers(true);
      const res = await getAllMember() ;
      // console.log(res.data.data, "RES")
      setMember(res.data.data)
      
    } catch (error) {
      // console.log(error.message, "ERR in member")
      toast.error('error adding member to cooperative', {duration:10000})
    } finally{
      setFetchingMembers(false)
    }
  })()

},[])
console.log(member, 'the names')


  return (
    <Dialog onClose={toggle} open={open} className='m-[auto] flex '>
    <div className=" rounded-[8px] md:w-[400px] w-full h-[350px] ">
      <div className="flex px-[2rem] flex-row items-center ">
        <p>Add Existing User</p>
        <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
      </div>
      <hr className='w-[full] mx-[auto] my-[0.5rem]  border-solid border border-gray-200' />
      
      <div className='flex flex-col p-[2rem] gap-[2rem]'>

         

      <p  > Please select members</p  >
       {!fetchingMembers?   
       <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        // defaultValue={existingMember}
        onChange={
          handleSelectChange
        }
        // getOptionSelected={(option, value) => option.id === value.id}
        
        options={member}
        disableCloseOnSelect
        getOptionLabel={(option) => (option.firstName + " " + option.lastName)}
        renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {(option.firstName + " " + option.lastName)}
        </li>
      )}
      style={{ width: '100%' }}
      renderInput={(params) => (
        <TextField sx={{'& .MuiInputBase-root': {paddingTop:0}}} {...params} placeholder="Select members"  />
      )}
    /> : <>loading...</>}

     <div>
            </div>
          <LoadingButton
              // onClick={handleSelectedMembers}
              onClick={handleRetrieve}
              variant="contained"
              className='mt-[1rem]'
            >
            Save
          </LoadingButton>
      </div>

    </div>
  </Dialog>
  )
}

export default ExistingMemberModal;