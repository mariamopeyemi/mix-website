import { Button, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import PLVMenu from "../../../form-elements/PLVMenu";
import PlainContainer from "../../../layouts/PlainContainer";
import * as yup from "yup";
import { LoadingButton } from "@mui/lab";
import { NigeriaStates } from "../../../../consts/NigeriaStates";
import { AuthContext } from "../../../../context/AuthContextProvider";
import { getUserProfile, updateProfile } from "../../../../services/cooperative-members.js";
import toast from "react-hot-toast";

const nokValidationSchema = yup.object({
  nokEmail: yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
  nokPhone: yup
    .string()
    .matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  nokFirstName: yup.string("").required("Firstname is required"),
  nokLastName: yup.string("").required("Lastname is required"),
  nokRelationship: yup.string("").oneOf(["Sibling", "Mother", "Father", "Uncle", "Aunty"]).required("Relationship must be one of the following values: Sibling, Mother, Father, Uncle, Aunty"),
});

const NextOfKin = () => {
  const { user, setUser } = useContext(AuthContext);

  const onUpdate = async (values) => {
    const data = await updateProfile(values);
    if (data.status) {
      toast.success(data?.message, { duration: 5000 });
    } else {
      toast.error(data?.message, { duration: 5000 });
    }
    const userRespData = await getUserProfile();
    if (userRespData?.status) {
      setUser(userRespData?.data);
    }
  };
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{
          nokFirstName: user?.nokFirstName || "",
          nokLastName: user?.nokLastName || "",
          nokPhone: user?.nokPhone || "",
          // userType: user?.email || "",
          nokEmail: user?.nokEmail || "",
          nokLocation: user?.nokLocation || "",
          nokRelationship: user?.nokRelationship || "",
        }}
        validationSchema={nokValidationSchema}
        onSubmit={onUpdate}
      >
        {({ isSubmitting, errors, touched, handleChange, values, setFieldValue, submitCount }) => {
          return (
            <Form>
              <PlainContainer className={"mb-[3.2rem]"}>
                <div className="grid  gap-[1.7rem]">
                  <Field
                    error={touched.nokFirstName && errors.nokFirstName}
                    helperText={touched.nokFirstName && errors.nokFirstName}
                    as={TextField}
                    label="First Name"
                    name="nokFirstName"
                    id="Full Name"
                  />
                  <Field error={touched.nokLastName && errors.nokLastName} helperText={touched.nokLastName && errors.nokLastName} as={TextField} label="Last Name" name="nokLastName" id="Full Name" />
                  <Field error={touched.nokEmail && errors.nokEmail} helperText={touched.nokEmail && errors.nokEmail} as={TextField} label="Email" type="email" name="nokEmail" id="Email " />
                  <Field as={TextField} label="Address" name="Address" id="Address" />
                  <PLVMenu
                    initText={values?.nokLocation || "Location"}
                    onChange={(val) => {
                      setFieldValue("state", val);
                    }}
                    items={NigeriaStates}
                  ></PLVMenu>
                  <div>
                    <PLVMenu
                      error={submitCount > 0 && errors.nokRelationship}
                      initText={values?.nokRelationship || "Relationship"}
                      onChange={(val) => {
                        setFieldValue("nokRelationship", val);
                      }}
                      items={["Sibling", "Mother", "Father", "Uncle", "Aunty"]}
                    ></PLVMenu>
                  </div>
                  <Field error={touched.nokPhone && errors.nokPhone} helperText={touched.nokPhone && errors.nokPhone} as={TextField} type={"text"} label="Phone" name="nokPhone" id="nokPhone" />
                </div>
              </PlainContainer>
              <LoadingButton type="submit" loading={isSubmitting} className="max-w-[20.6rem]">
                Update
              </LoadingButton>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default NextOfKin;
