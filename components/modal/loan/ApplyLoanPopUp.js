import { Button, InputAdornment, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthContextProvider";
import PLVDesktopDatePicker from "../../form-elements/PLVDesktopDatePicker";
import PLVMenu from "../../form-elements/PLVMenu";
import Hrule from "../../general/Hrule";
import TabFilled from "../../general/TabFilled";
import Upload from "../../general/Upload";
import PopupLayout from "../../layouts/PopupLayout";
import { Dialog} from '@mui/material';


const ApplyLoanPopUp = ({ onClose, onApplyLoan = () => {}, loanDetails, open,  }) => {
  const [loanType, setLoanType] = useState("Personal Loan");
  const { user } = useContext(AuthContext);
  let personalFields = {
    loanType: loanDetails?.type || "personal",
    dateNeeded: loanDetails?.dateNeeded || "",
    loanDuration: loanDetails?.loanDuration || "3 Months",
    loanAmount: loanDetails?.loanAmount || null,
    repayment: loanDetails?.repayment || "Daily",
    reasonForLoan: loanDetails?.reasonForLoan || "",
    // cooperativeId: user.cooperatives[0]?.id || "d0136219-324d-47e6-9437-c8beb2691ea7",
  };

  let cooperativeFields = {
    loanType: loanDetails?.type || "corporate",
    dateNeeded: loanDetails?.dateNeeded || "",
    loanDuration: loanDetails?.loanDuration || "3 Months",
    loanAmount: loanDetails?.loanAmount || null,
    repayment: loanDetails?.repayment || "Daily",
    // cooperativeId: user.cooperatives[0]?.id || "d0136219-324d-47e6-9437-c8beb2691ea7",

    companyName: loanDetails?.companyName || "",
    typeOfBusiness: loanDetails?.typeOfBusiness || "",
    businessDesc: loanDetails?.businessDesc || "",
    documents: [],
    uploadedVCFrontFilesObj: null,
    uploadedVCBackFilesObj: null,
  };

  const onProceed = (values) => {
    console.log(values);

    for (let val in values) {
      if (!values[val]) {
        console.log(val);
        toast.error(`All fields are required - *${val.toLocaleLowerCase()}`);
        return;
      }
    }

    onApplyLoan(values);
  };
  return (
    <Dialog onClose={onClose} open={open}>
    <PopupLayout title="Apply for Loan" onClose={onClose}>
      <Formik enableReinitialize={true} initialValues={loanType == "Personal Loan" ? personalFields : cooperativeFields} onSubmit={onProceed}>
        {({ isSubmitting, errors, touched, handleChange, values, setFieldValue, submitCount }) => {
          return (
            <Form className="grid gap-[1.6rem]">
              <PLVMenu
                onChange={(type) => {
                  setLoanType(type);
                  console.log(type == "Personal Loan" ? "personal" : "corporate");
                  setFieldValue("loanType", type == "Personal Loan" ? "personal" : "corporate");
                }}
                items={["Personal Loan", "Cooperate Loan"]}
                className=" bg-input"
              ></PLVMenu>
              {loanType == "Cooperate Loan" && (
                <>
                  <Field as={TextField} id="Company Name" label="Company Name" name="companyName" />
                  <Field as={TextField} id="Type of Business" label="Type of Business" name="typeOfBusiness" />
                  <Field as={TextField} label="Business Description" name="businessDesc" multiline={true} minRows={3} maxRows={6} />
                  <Upload
                    onUpload={(fileObjs) => {
                      setFieldValue("uploadedVCFrontFilesObj", fileObjs[0]);
                    }}
                    specCaption={"700px by 1500px JPEG or PNG "}
                    accept="image/png,  image/jpeg"
                    displayImgContClass={"grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))]"}
                    showDisplayImgs={true}
                    boxClassName={"mb-0"}
                    caption="Click this area to upload Voter’s card front"
                  ></Upload>
                  <Upload
                    onUpload={(fileObjs) => {
                      setFieldValue("uploadedVCBackFilesObj", fileObjs[0]);
                    }}
                    specCaption={"700px by 1500px JPEG or PNG "}
                    accept="image/png,  image/jpeg"
                    displayImgContClass={"grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))]"}
                    multiple={false}
                    showDisplayImgs={true}
                    boxClassName={"mb-0"}
                    caption="Click this area to upload Voter’s card back"
                  ></Upload>
                </>
              )}
              {loanType != "Cooperate Loan" && (
                <>
                  <Field as={TextField} label="Reason for loan" name="reasonForLoan" multiline={true} minRows={3} maxRows={6} />
                </>
              )}
              <Hrule className={"mt-[1.4rem]"}></Hrule>

              <Field
                as={TextField}
                InputProps={{
                  startAdornment: <InputAdornment position="start">&#8358;</InputAdornment>,
                  endAdornment: (
                    <InputAdornment position="start">
                      <span className="text-text">Max: 30,000,000</span>
                    </InputAdornment>
                  ),
                }}
                name="loanAmount"
                type={"number"}
                id="Loan Amount"
                label="Loan Amount"
                variant="filled"
              />
              <PLVDesktopDatePicker
                initialDate={values.dateNeeded}
                onChange={(date) => {
                  setFieldValue("dateNeeded", date);
                }}
                label="Date Needed"
              ></PLVDesktopDatePicker>
              <Hrule className={"my-[1.4rem]"}></Hrule>
              <TabFilled
                onChange={(duration) => {
                  setFieldValue("loanDuration", duration);
                }}
                active={values.loanDuration}
                label={"Loan Duration"}
                items={["3 Months", "6 Months", "12 Months"]}
              ></TabFilled>
              <TabFilled
                onChange={(item) => {
                  setFieldValue("repayment", item);
                }}
                active={values.repayment}
                label={"Repayments"}
                items={["Daily", "Weekly", "Monthly"]}
              ></TabFilled>
              <Button type="submit" sx={{ mt: 3 }}>
                Next
              </Button>
            </Form>
          );
        }}
      </Formik>
    </PopupLayout>
    </Dialog>
  );
};

export default ApplyLoanPopUp;
