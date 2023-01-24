import { Button, InputAdornment, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import PLVDesktopDatePicker from "../../../form-elements/PLVDesktopDatePicker";
import PLVMobileDateTimePicker from "../../../form-elements/PLVMobileDateTimePicker";
import PLVRadio from "../../../form-elements/PLVRadio";
import CurrencySymbol from "../../../general/CurrencySymbol";
import Hrule from "../../../general/Hrule";
import PLVSwitch from "../../../general/PLVSwitch";
import SvgIconWrapper from "../../../general/SvgIconWrapper";
import TabFilled from "../../../general/TabFilled";
import PopupLayout from "../../../layouts/PopupLayout";
import * as yup from "yup";
import { NumericFormat } from "react-number-format";
import formatNumberWithCommas from "../../../../utils/addCommas";
import PLVMenu from "../../../form-elements/PLVMenu";
import { updatePersonalGoalSavings } from "../../../../services/cooperative-members.js";
import toast from "react-hot-toast";
import { LoadingButton } from "@mui/lab";

const CreateValidationSchema = yup.object({
  // savingType: yup.string("Select saving type").required("Select saving type"),
  // title: yup.string("Enter saving title").required("This field is required"),
  // duration: yup.string("Select a duration").required("This field is required"),
  // startDate: yup.date("").required("Enter a start date").typeError("Enter a valid date"),
  // debitDate: yup.date("").when("autoDebit", {
  //   is: true,
  //   then: yup.date("").required("Enter a debit date").typeError("Enter a valid date"),
  // }),
  // amount: yup.string().required("Pls enter an amount"),
  autoDebit: yup.boolean(),
});

const AutoSavePopUp = ({ onAction = () => {}, onClose = () => {}, onOpenAddCard = () => {}, saving, onUpdateAutoSave = () => {} }) => {
  const autoSaveTypes = ["Daily", "Weekly", "Monthly"];
  const [autoSaveType, setAutoSaveType] = useState("Weekly");

  const onUpdate = async (values) => {
    console.log("updating...");

    const respData = await updatePersonalGoalSavings(values, saving?.id);
    if (respData?.status) {
      onUpdateAutoSave();
      onClose();
      toast.success("Autosave updated.");
    } else {
      toast.error(respData?.message);
    }
  };

  const calculateBreakDown = (amt, months, frq) => {
    // console.log(amt, months, frq);
    if (frq == "Daily") {
      return amt / (months * 30);
    }
    if (frq == "Weekly") {
      return amt / (months * 4);
    }
    if (frq == "Monthly") {
      return amt / months;
    }
  };
  return (
    <PopupLayout onClose={onClose} title="Set AutoSave">
      <Formik
        initialValues={{
          targetAmount: saving?.targetAmount,
          savingFrequency: saving?.savingFrequency || "Daily",
          autoDebit: saving?.autoDebit || false,
          debitDate: saving?.debitDate || "",
          duration: saving?.duration,
        }}
        validationSchema={CreateValidationSchema}
        onSubmit={onUpdate}
      >
        {({ isSubmitting, errors, touched, handleChange, values, setFieldValue, submitCount }) => {
          return (
            <Form className="grid gap-[1.6rem]">
              {/* <Field as={TextField} error={touched.title && errors.title} helperText={touched.title && errors.title} name="title" type={"text"} id="title" label="Title of Savings" variant="filled" />
              <div>
                <PLVMenu
                  onChange={(val) => {
                    setFieldValue("duration", val);
                  }}
                  error={submitCount >= 1 && errors.duration}
                  initText={values?.duration || "Duration"}
                  items={["1 months - 13% p.a", "2 months - 20% p.a", "3 months - 20% p.a"]}
                  className=" bg-input"
                ></PLVMenu>
              </div> */}
              <Field
                disabled
                as={NumericFormat}
                allowNegative={false}
                thousandSeparator
                error={errors?.amount && touched.amount}
                helperText={touched.amount && errors?.amount}
                isAllowed={(values) => {
                  const { formattedValue, floatValue } = values;
                  return formattedValue === "" || floatValue >= 0;
                }}
                InputProps={{
                  startAdornment: <InputAdornment position="start">&#8358;</InputAdornment>,
                }}
                name="targetAmount"
                // type={"number"}
                id="amount"
                label="Target Amount"
                variant="filled"
                customInput={TextField}
              />

              <>
                <Hrule className={""}></Hrule>
                <div className="flex items-center justify-between">
                  <p className=" text-label text-[1.6rem]">Auto debit option</p>

                  <PLVSwitch
                    label={values.autoDebit ? "On" : "Off"}
                    checked={values.autoDebit}
                    onChange={(e) => {
                      console.log(e.target?.checked);
                      setFieldValue("autoDebit", e.target?.checked);
                    }}
                    inputProps={{ "aria-label": "controlled" }}
                  ></PLVSwitch>
                </div>
                {values.autoDebit && (
                  <>
                    <TabFilled
                      onChange={(item) => {
                        setFieldValue("savingFrequency", item);
                      }}
                      active={values?.savingFrequency}
                      items={["Daily", "Weekly", "Monthly"]}
                    ></TabFilled>
                    <PLVMobileDateTimePicker
                      initialDate={values?.debitDate}
                      onChange={(date) => {
                        setFieldValue("debitDate", date);
                      }}
                      error={errors?.debitDate && submitCount >= 1}
                      helperText={submitCount >= 1 && errors?.debitDate}
                      label="Select debit date/time"
                    />
                    {values?.duration && values?.targetAmount && (
                      <div className="flex items-center justify-between">
                        <p className=" text-label text-[1.6rem]">{values?.savingFrequency} Breakdown</p>
                        <p className=" text-label text-[1.6rem]">
                          ~ <CurrencySymbol /> {formatNumberWithCommas(calculateBreakDown(parseInt(values?.targetAmount), parseInt(values?.duration?.split("m")[0]), values.savingFrequency))}/
                          {values?.savingFrequency == "Daily" && "day"}
                          {values?.savingFrequency == "Weekly" && "week"}
                          {values?.savingFrequency == "Monthly" && "month"}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </>

              <LoadingButton loading={isSubmitting} sx={{ mt: 2 }} type="submit">
                Save
              </LoadingButton>
            </Form>
          );
        }}
      </Formik>
    </PopupLayout>
  );
};

export default AutoSavePopUp;
