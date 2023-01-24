
import React, {useState} from 'react';
import * as yup from "yup";
// import toast from "react-hot-toast";
import { LoadingButton } from '@mui/lab';
import { Field, Form, Formik } from "formik";
import { Dialog, Stack, TextField } from '@mui/material';


const PersonalDetailsModal = ({toggle, open, onClick, memberData, setMemberData,

}) => {
  const [firstName, setFirstName] = useState(memberData.firstName)
  const [lastName, setLastName] =useState(memberData.lastName);
  const [email, setEmail] =useState(memberData.email);
  const [gender, setGender] =useState(memberData.gender);
  const [phoneNumber, setPhoneNumber] =useState(memberData.phoneNumber);
  const [address, setAddress] =useState(memberData.address);
  const [state, setState] =useState(memberData.state);

  const registerValidationSchema = yup.object({
    firstName: yup.string("Enter your first name").required("Please add your first name"),
    lastName: yup.string("Enter your last name").required("Please add your last name"),
    address: yup.string("Enter your Address").required("Please add an address"),
    state: yup.string("Enter your State").required("Please add an email"),
    gender: yup.string().required("Please select your gender"),
    email: yup.string("Enter your email").email("Enter a valid email").required("Please add an email"),
    phoneNumber: yup.string().required("Please add your Phone number"),
  });
  const handleSubmit=()=>{
    setMemberData({...memberData, firstName, lastName, email, gender, state, phoneNumber, address})
    onClick()
    
  };


  return (
    <Dialog onClose={toggle} open={open}>
        <div className="py-[1rem] px-[auto] rounded-[8px] md:w-[450px] w-full h-[600px] ">
          <div className="flex px-[4rem] flex-row  items-center   ">
              <p>Personal Details - Step 1 of 3</p>
              <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
          </div>
          <hr className='w-[full] mx-[auto] my-[1rem]  border-solid border border-gray-200' />
          
          <Stack gap={"1rem"} className='  px-[4rem]   '>
          <Formik
               initialValues={{
                email: memberData.email,
                firstName: memberData.firstName,
                lastName: memberData.lastName,
                phoneNumber: memberData.phoneNumber,
                state: memberData.state,
                gender: memberData.gender,
                address: memberData.address,
              }}
               validationSchema={registerValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, }) => {
            return (
              <Form className="grid gap-[1.9rem]">

                <Field
                    as={TextField}
                    error={touched.firstName && errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    name="firstName"
                    onChange={(e)=>setFirstName(e.target.value)} 
                    value={firstName}
                    type={"text"}
                    id="firstName"
                    label="First Name"
                    variant="filled"
                  />
                  <Field
                    as={TextField}
                    error={touched.lastName && errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    name="lastName"
                    onChange={(e)=>setLastName(e.target.value)} 
                    value={lastName}
                    type={"text"}
                    id="lastName"
                    label="Last Name"
                    variant="filled"
                  />
                  <Field as={TextField} 
                    error={touched.email && errors.email} 
                    onChange={(e)=>setEmail(e.target.value)} value={email}
                    helperText={touched.email && errors.email} 
                    name="email" type={"email"} id="email" label="Email"
                   />
                   <div className='flex flex-col gap-[3rem]' >
                      <select onChange={(e)=>setGender(e.target.value)} value={gender}  className="selectedType">
                          <option value=""> Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                      </select>
                   </div>
                 <Field
                    as={TextField}
                    error={touched.phoneNumber && errors.phoneNumber}
                    helperText={touched.phoneNumber && errors.phoneNumber}
                    name="phoneNumber"
                    onChange={(e)=>setPhoneNumber(e.target.value)} 
                    value={phoneNumber}
                    type={"text"}
                    id="phoneNumber"
                    label="Phone Number"
                  />
                  <Field
                    as={TextField}
                    error={touched.state && errors.state}
                    helperText={touched.state && errors.state}
                    name="state"
                    onChange={(e)=>setState(e.target.value)}
                    value={state}
                    type={"text"}
                    id="state" 
                    label="State"
                  />
                  <Field
                    as={TextField}
                    error={touched.address && errors.address}
                    helperText={touched.address && errors.address}
                    onChange={(e)=>setAddress(e.target.value)}
                    name="address"
                    value={address} 
                    type={"text"} 
                    id="address" 
                    placeholder="House 2 Afolabi Cl. Lagos" 
                    label="Address"
                  />
                
              </Form>
            );
          }}
        </Formik> 
            <LoadingButton
                    onClick={handleSubmit}
                    variant="contained"
                    className='mt-[1rem]'
                    // type="submit"
                >
                    Save & Continue
                </LoadingButton>
        </ Stack>
        </div>
       
   </ Dialog>
  )
}

export default PersonalDetailsModal;
// {
//   "firstName": "",
//   "lastName": "",
//   "email": "",
//   "phoneNumber": "",
//   "password": "",
//   "transactionPin": "",
//   "gender": "",
//   "state": "",
//   "lga": "",
//   "address": "",
//   "driverLicense": "",
//   "nin": "",
//   "voterCard": "",
//   "internationalPasspord": "",
//   "nokFirstName": "",
//   "nokLastName": "",
//   "nokPhone": "",
//   "nokEmail": "",
//   "nokLocation": "",
//   "nokRelationship": ""
// }
