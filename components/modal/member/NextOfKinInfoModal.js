import * as yup from "yup";
import React, {useState, useEffect} from 'react';
import { LoadingButton } from '@mui/lab';
import { Field, Form, Formik } from "formik";
import { Dialog, Stack, TextField } from '@mui/material';

const NextOfKinInfoModal = ({toggle, open, onClick, onClickBack, memberData, setMemberData, 
   
}) => {
    const [nokFirstName, setNokFirstName] =useState(memberData.nokFirstName);
    const [nokLastName, setNokLastName] =useState(memberData.nokLastName);
    const [isTrue, setIsTrue] =useState(false);
    const [nokEmail, setNokEmail] =useState(memberData.nokEmail);
    const [nokPhone, setNokPhone] =useState(memberData.nokPhone);
    const [nokLocation, setNokLocation] =useState(memberData.nokLocation);
    const [nokRelationship, setNokRelationship] =useState(memberData.nokRelationship);

    const registerValidationSchema = yup.object({
      nokFirstName: yup.string().required("Please add your next of kin first name"),
      nokLastName: yup.string().required("Please add your next of kin last name"),
      nokAddress: yup.string().required("Please add your next of kin Adddress"),
      nokLocation: yup.string().required("Please add your next of kin Location"),
      nokEmail: yup.string("Enter your email").email("Enter a valid email").required("Please add your next of kin Email"),
      nokRelationship: yup.string("How do you relate?").required("Please add your relationship with your next of kin "),
      nokPhone: yup.string().required("Please add your next of kin Phone number"),
    });

    useEffect(() => {

      if (isTrue) {
        onClick()
      }
      return ()=>{setIsTrue(false)}
    }, [isTrue])

    const handleLastSubmit=()=>{
      console.log('====================================');
      console.log(nokFirstName, nokLastName, nokEmail, nokRelationship, nokPhone, nokLocation);
      console.log('====================================');
    setMemberData({...memberData, nokFirstName, nokLastName, nokEmail, nokRelationship, nokPhone, nokLocation})
    setIsTrue(true);
  };
  return (
    <Dialog onClose={toggle} open={open} className='m-[auto] flex '>
        <div className="py-[2rem]  rounded-[8px] md:w-[400px] h-[600px] ">
          <div className="flex px-[4rem] flex-row  items-center   ">
              <p>Next of Kin- Step 3 of 3</p>
              <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
          </div>
          <hr className='w-[100%]  my-[2rem]  border-solid border border-gray-200' />
          <Stack gap={"2rem"} className='  px-[2rem]   '>
           <Formik
               initialValues={{
                nokEmail: memberData.nokEmail,
                nokFirstName: memberData.nokFirstName,
                nokLastName: memberData.nokLastName,
                nokPhone: memberData.nokPhone,
                nokRelationship: memberData.nokRelationship,
                nokLocation: memberData.nokLocation,
              }}
               validationSchema={registerValidationSchema}
          onSubmit={handleLastSubmit}
        >
          {({ errors, touched, }) => {
            return (
              <Form className="grid gap-[1.9rem]">

                <Field
                    as={TextField}
                    error={touched.nokFirstNamenokFirstName && errors.firstName}
                    helperText={touched.nokFirstName && errors.nokFirstName}
                    name="nokFirstName"
                    onChange={(e)=>setNokFirstName(e.target.value)} 
                    value={nokFirstName}
                    type={"text"}
                    id="nokFirstName"
                    label="First Name"
                    variant="filled"
                  />
                  <Field
                    as={TextField}
                    error={touched.nokLastName && errors.nokLastName}
                    helperText={touched.nokLastName && errors.nokLastName}
                    name="nokLastName"
                    onChange={(e)=>setNokLastName(e.target.value)} 
                    value={nokLastName}
                    type={"text"}
                    id="nokLastName"
                    label="Last Name"
                    variant="filled"
                  />
                  <Field as={TextField} 
                    error={touched.nokEmail && errors.nokEmail} 
                    onChange={(e)=>setNokEmail(e.target.value)} value={nokEmail}
                    helperText={touched.nokEmail && errors.nokEmail} 
                    name="nokEmail" type={"text"} id="nokEmail" label="Email"
                   />
                  <Field
                    as={TextField}
                    error={touched.nokPhone && errors.nokPhone}
                    helperText={touched.nokPhone && errors.nokPhone}
                    name="nokPhone"
                    onChange={(e)=>setNokPhone(e.target.value)} 
                    value={nokPhone}
                    type={"text"}
                    id="nokPhone"
                    label="Phone Number"
                  />
                  <Field
                    as={TextField}
                    error={touched.nokLocation && errors.nokLocation}
                    helperText={touched.nokLocation && errors.nokLocation}
                    onChange={(e)=>setNokLocation(e.target.value)}
                    name="nokLocation"
                    value={nokLocation} 
                    type={"text"} 
                    id="nokLocation" 
                    placeholder="Ikeja, Lagos" 
                    label="Location"
                  />
                  <Field
                    as={TextField}
                    error={touched.nokRelationship && errors.nokRelationship}
                    helperText={touched.nokRelationship && errors.nokRelationship}
                    name="nokRelationship"
                    onChange={(e)=>setNokRelationship(e.target.value)}
                    value={nokRelationship}
                    type={"text"}
                    id="nokRelationship" 
                    label="Relationship"
                  />
                  
                
              </Form>
            );
          }}
        </Formik> 
            
            <div className='w-[100%] gap-[2rem] flex flex-row'>
            <LoadingButton
                    onClick={onClickBack}
                    variant="contained"
                    className='bg-[#ABCDBD] text-[#137C4B] hover:bg-[#137C4B] hover:text-white'
                >
                    Back
                </LoadingButton>
            <LoadingButton
                    onClick={handleLastSubmit}
                    variant="contained"
                    
                >
                    Save
                </LoadingButton>
            </div>
        </ Stack>
        </div>
   </ Dialog>
  )
}

export default NextOfKinInfoModal;