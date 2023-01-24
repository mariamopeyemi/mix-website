import { LoadingButton } from "@mui/lab";
import { Button, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useContext, useRef, useState } from "react";
import { NigeriaStates } from "../../../../consts/NigeriaStates";
import { AuthContext } from "../../../../context/AuthContextProvider";
import useHandleFileUpload from "../../../../hooks/useHandleFileUpload";
import { getUserProfile, updateProfile } from "../../../../services/cooperative-members.js";
import PLVMenu from "../../../form-elements/PLVMenu";
import PLVRadio from "../../../form-elements/PLVRadio";
import SvgIconWrapper from "../../../general/SvgIconWrapper";
import Upload from "../../../general/Upload";
import * as yup from "yup";
import PlainContainer from "../../../layouts/PlainContainer";
import { uploadFile } from "../../../../services/generalService";
import toast from "react-hot-toast";

const PersonalInfo = () => {
  const { fileObjs, fileUrls, fileInputRef, handleFileUpload, filePickerTrigger } = useHandleFileUpload();
  const [idType, setIdType] = useState("NIN");
  const [uploading, setUploading] = useState(false);
  const [uploadedImgsUrls, setUploadedImgsUrls] = useState([]);
  const { user, setUser } = useContext(AuthContext);
  const PersonalInfoInitialValue = {
    email: user?.email || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    middleName: user?.middleName || "",
    phoneNumber: user?.phoneNumber || "",

    gender: user?.gender || "",
    state: user?.state || "",
    lga: null,
    address: user?.address || "",
    driverLicense: user?.driverLicense || "",
    nin: user?.nin || "",
    voterCard: user?.voterCard || "",
    internationalPasspord: user?.internationalPasspord || "",
  };
  const documentTypes = ["NIN", "Drivers Lincense", "Passport", "Voters Card Back"];

  const docFieldsHash = {
    NIN: "nin",
    "Drivers Lincense": "driverLicense",
    Passport: "internationalPasspord",
    "Voters Card Back": "voterCard",
  };

  const personalValidationSchema = yup.object({
    email: yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
    // phoneNumber: yup.string().required("Phone number is required"),
    firstName: yup.string("Enter your firstName").required("Firstname is required"),
    lastName: yup.string("Enter your lastName").required("Lastname is required"),
  });

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

  const onUploadFile = async (fileObj, type) => {
    console.log("fileob", fileObj);
    if (fileObj) {
      setUploading(true);
      const uploadDataResp = await uploadFile(fileObj, type);
      if (uploadDataResp.success) {
        toast.success(uploadDataResp?.message, { duration: 5000 });
      } else {
        toast.error(uploadDataResp?.message, { duration: 5000 });
      }
      setUploading(false);
      const updateDataResp = await onUpdate({ [docFieldsHash[type]]: uploadDataResp.data.path });
    }
  };

  return (
    <div className="grid gap-[1.6rem]">
      <PlainContainer className={" p-[3.6rem]"}>
        <div className="flex items-center flex-wrap gap-[1rem]">
          {fileUrls[0] ? (
            <img className="w-[8.1rem] h-[8.1rem] rounded-full bg-pv_bg  mr-[4rem] object-cover" alt="profile-picture" src={fileUrls[0]}></img>
          ) : (
            <div className="w-[8.1rem] h-[8.1rem] rounded-full bg-pv_bg  mr-[4rem]"></div>
          )}
          <input ref={fileInputRef} className=" hidden" multiple={true} onChange={handleFileUpload} id={"file-upload"} type={"file"}></input>
          <Button startIcon={<SvgIconWrapper className={"!w-[2rem] !h-[2rem]"} iconName={"add-circle"}></SvgIconWrapper>} onClick={filePickerTrigger} className="mr-[3.2rem] w-[15.3rem] h-[4.1rem]">
            Upload New
          </Button>
          <Button variant="outlined" color="error" className="mr-[8rem] w-[12.2rem] hover:bg-transparent h-[4.1rem]">
            Delete
          </Button>
          <p className="text-text text-[1.6rem] ">Upload image files with extensions jpg.png.gif or svg</p>
        </div>
      </PlainContainer>

      {/* Form Main */}
      <Formik enableReinitialize={true} initialValues={PersonalInfoInitialValue} validationSchema={personalValidationSchema} onSubmit={onUpdate}>
        {({ isSubmitting, errors, touched, handleChange, values, setFieldValue }) => {
          return (
            <Form>
              <PlainContainer className={" mb-[1.6rem]"}>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-[1.7rem]">
                  <Field
                    as={TextField}
                    error={touched.firstName && errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    name="firstName"
                    type={"text"}
                    id="firstName"
                    label="First Name"
                    variant="filled"
                  />
                  <Field as={TextField} label="Middle Name (optional)" name={"middleName"} id="Middle Name (optional)" />
                  <Field
                    as={TextField}
                    error={touched.lastName && errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    name="lastName"
                    type={"text"}
                    id="lastName"
                    label="Last Name"
                    variant="filled"
                  />
                  <Field disabled={true} as={TextField} error={touched.email && errors.email} helperText={touched.email && errors.email} name="email" type={"email"} id="Email" label="Email" />
                  <Field as={TextField} label="Address" name="address" id="Address" />
                  <PLVMenu
                    initText={values?.gender || "Gender"}
                    onChange={(val) => {
                      setFieldValue("gender", val);
                    }}
                    items={["Male", "Female"]}
                  ></PLVMenu>
                  <PLVMenu
                    initText={values?.state || "State"}
                    onChange={(val) => {
                      setFieldValue("state", val);
                    }}
                    items={NigeriaStates}
                  ></PLVMenu>
                  <Field as={TextField} type={"number"} label="Phone Number" name="phoneNumber" id="phone" />
                </div>
              </PlainContainer>

              {/* ID */}
              <PlainContainer>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[1rem] mb-[1.6rem]">
                  {documentTypes.map((el, i) => {
                    return (
                      <div
                        onClick={() => {
                          setIdType(el);
                          setUploadedImgsUrls([]);
                        }}
                        className="h-[5.6rem] rounded-primary bg-pv_bg flex items-center justify-between p-[1.6rem] "
                        key={i}
                      >
                        <a
                          href={values[docFieldsHash[el]] || "#"}
                          rel="noreferrer"
                          target={values[docFieldsHash[el]] ? "_blank" : ""}
                          className={`text-label text-[1.6rem]  ${values[docFieldsHash[el]] ? "cursor-pointer underline underline-offset-1" : " cursor-default"}`}
                        >
                          {el}
                        </a>
                        <PLVRadio isChecked={idType == el}></PLVRadio>
                      </div>
                    );
                  })}
                </div>
                <div className="grid grid-cols-2 gap-[1.6rem]">
                  {uploadedImgsUrls[0] && <img className="h-[14.9rem] w-full object-cover rounded-primary" alt="uploads" src={uploadedImgsUrls[0]} />}
                  <Upload
                    onUpload={(fileObjs, fileUrls) => {
                      onUploadFile(fileObjs[0], idType);
                      setUploadedImgsUrls(fileUrls);
                    }}
                    boxClassName={"!h-[14.9rem] "}
                    caption={
                      <span>
                        Click this area to upload {idType} {uploading ? <span className=" font-semibold block">Uploading...</span> : ""}
                      </span>
                    }
                  ></Upload>
                </div>
              </PlainContainer>
              <LoadingButton loading={isSubmitting} type="submit" className="max-w-[20.6rem] mt-[2rem]">
                Update
              </LoadingButton>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
