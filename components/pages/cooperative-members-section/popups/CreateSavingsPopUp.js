import { LoadingButton } from "@mui/lab";
import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputAdornment,
	Radio,
	RadioGroup,
	TextField,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import React, { useContext, useMemo, useState } from "react";
import PLVDesktopDatePicker from "../../../form-elements/PLVDesktopDatePicker";
import PLVMenu from "../../../form-elements/PLVMenu";
import SvgIconWrapper from "../../../general/SvgIconWrapper";
import PopupLayout from "../../../layouts/PopupLayout";
import {
	createFixedSavings,
	createGoalSavings,
	createPersonalFixedSavings,
	createPersonalGoalSavings,
} from "../../../../services/cooperative-members.js";
import toast from "react-hot-toast";
import { SavingsTypes } from "../../../../pages/cooperative-members/savings";
import Hrule from "../../../general/Hrule";
import PLVSwitch from "../../../general/PLVSwitch";
import TabFilled from "../../../general/TabFilled";
import { NumericFormat } from "react-number-format";
import PLVMobileDateTimePicker from "../../../form-elements/PLVMobileDateTimePicker";
import formatNumberWithCommas from "../../../../utils/addCommas";
import CurrencySymbol from "../../../general/CurrencySymbol";
import { AppContext } from "../../../../context/AppContextProvider";

const CreateValidationSchema = yup.object({
	savingType: yup.string("Select saving type").required("Select saving type"),
	title: yup.string("Enter saving title").required("This field is required"),
	duration: yup.string("Select a duration").required("This field is required"),
	startDate: yup
		.date("")
		.required("Enter a start date")
		.typeError("Enter a valid date"),
	debitDate: yup.date("").when("autoDebit", {
		is: true,
		then: yup
			.date("")
			.required("Enter a debit date")
			.typeError("Enter a valid date"),
	}),
	amount: yup.string().required("Pls enter an amount"),
	autoDebit: yup.boolean(),
	// amountSavedPerTime: yup.number().when("autoDebit", {
	//   is: true,
	//   then: yup.number().required("Required field").min(100, "Min amount per time 100").typeError("Enter a valid number"),
	// }),
	//   amountTobeSaved: yup.number().min(100, "Min amount 100.").required("Pls enter an amount").typeError("Enter a valid number"),
});

const CreateSavingsPopup = ({ onClose = () => {}, savingSummary, onAddCard = () => {}, onCreateSavings = () => {} }) => {
  const [loading, setLoading] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [activeSetting, setActiveSetting] = useState("Fixed Savings");
  const { settings } = useContext(AppContext);
  const activeDurations = useMemo(() => {
    if (activeSetting == "Fixed Savings") {
      return settings?.savings?.fixed?.durations?.map((el) => {
        return `${el?.month} months - ${el?.rate}% p.a`;
      });
    } else {
      return settings?.savings?.goal?.durations?.map((el) => {
        return `${el?.month} months - ${el?.rate}% p.a`;
      });
    }
  }, [activeSetting]);

	const onCreate = async (values) => {
		onCreateSavings(values);
		console.log("on create");
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
    <PopupLayout title="Create Plan" onClose={onClose}>
      <Formik
        initialValues={{
          savingType: savingSummary?.savingType || "Fixed Savings",
          title: savingSummary?.title || "",
          startDate: savingSummary?.startDate,
          duration: savingSummary?.duration,
          amount: savingSummary?.amount,
          // amountSavedPerTime: "",
          savingFrequency: savingSummary?.savingFrequency || "Daily",
          debitDate: savingSummary?.debitDate || "",
          autoDebit: savingSummary?.autoDebit || false,
        }}
        validationSchema={CreateValidationSchema}
        onSubmit={onCreate}
      >
        {({ isSubmitting, errors, touched, handleChange, values, setFieldValue, submitCount }) => {
          return (
            <Form className="grid gap-[1.6rem]">
              <FormControl>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="savingType" defaultValue={values?.savingType || "Fixed Savings"}>
                  <FormControlLabel
                    value="Fixed Savings"
                    control={
                      <Radio
                        onChange={(e) => {
                          setFieldValue("autoDebit", false);
                          handleChange(e);
                          setActiveSetting("Fixed Savings");
                        }}
                        color="black"
                      />
                    }
                    label="Fixed Savings"
                  />
                  <FormControlLabel
                    value="Goal Savings"
                    control={
                      <Radio
                        onChange={(e) => {
                          console.log("goa called");
                          setFieldValue("autoDebit", true);
                          handleChange(e);
                          setActiveSetting("Goal Savings");
                        }}
                        color="black"
                      />
                    }
                    label="Goal Savings"
                  />
                </RadioGroup>
              </FormControl>

							<Field
								as={TextField}
								error={touched.title && errors.title}
								helperText={touched.title && errors.title}
								name="title"
								type={"text"}
								id="title"
								label="Title of Savings"
								variant="filled"
							/>
							<PLVDesktopDatePicker
								initialDate={values.startDate}
								error={errors?.startDate && submitCount >= 1}
								helperText={submitCount >= 1 && errors?.startDate}
								onChange={(date) => {
									setFieldValue("startDate", date);
								}}
								label="Start date"
							></PLVDesktopDatePicker>

              <Field
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
                name="amount"
                // type={"number"}
                id="amount"
                label="Target Amount"
                variant="filled"
                customInput={TextField}
              />
              <div>
                <PLVMenu
                  onChange={(val) => {
                    setFieldValue("duration", val);
                  }}
                  error={submitCount >= 1 && errors.duration}
                  initText={values?.duration || "Duration"}
                  items={activeDurations}
                  className=" bg-input"
                ></PLVMenu>
              </div>
              {/* <Field
                as={TextField}
                error={errors?.amountTobeSaved}
                helperText={errors?.amountTobeSaved}
                InputProps={{
                  startAdornment: <InputAdornment position="start">&#8358;</InputAdornment>,
                }}
                name="amountTobeSaved"
                type={"number"}
                id="amount"
                label="Amount to be saved"
                variant="filled"
              /> 
              */}
							{values.savingType == "Goal Savings" && (
								<>
									<Hrule className={"mt-[1.4rem]"}></Hrule>
									<div className="flex items-center justify-between">
										<p className=" text-label text-[1.6rem]">
											Auto debit option
										</p>

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
											{values?.duration && values?.amount && (
												<div className="flex items-center justify-between">
													<p className=" text-label text-[1.6rem]">
														{values?.savingFrequency} Breakdown
													</p>
													<p className=" text-label text-[1.6rem]">
														~ <CurrencySymbol />{" "}
														{formatNumberWithCommas(
															calculateBreakDown(
																parseInt(values?.amount?.split(",").join("")),
																parseInt(values?.duration?.split("m")[0]),
																values.savingFrequency
															)
														)}
														/{values?.savingFrequency == "Daily" && "day"}
														{values?.savingFrequency == "Weekly" && "week"}
														{values?.savingFrequency == "Monthly" && "month"}
													</p>
												</div>
											)}
										</>
									)}
								</>
							)}
							<LoadingButton
								type="submit"
								loading={isSubmitting}
								variant="contained"
								sx={{ mt: 3 }}
							>
								Create
							</LoadingButton>
						</Form>
					);
				}}
			</Formik>
		</PopupLayout>
	);
};

export default CreateSavingsPopup;
