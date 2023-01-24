import React, { useState, useEffect, useMemo, useContext} from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import Checkbox from "@mui/material/Checkbox";
import PLVMenu from "../../../form-elements/PLVMenu";
import formatNumberWithCommas from "../../../../utils/addCommas";
import CurrencySymbol from "../../../general/CurrencySymbol";
import { AppContext } from "../../../../context/AppContextProvider";

import {
	Button,
	Dialog,
	Autocomplete,
	Stack,
	InputAdornment,
	TextField,
} from "@mui/material";
import PLVDesktopDatePicker from "../../../form-elements/PLVDesktopDatePicker";
import {
	createGoalSavings,
	getAllCoopMember,
	addGoalSavingsMember,
} from "../../../../services/cooperative-admin.js/index.js";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const CreateGoalPlanModal = ({
	activeTab,
	toggle,
	name,
	trigger,
	setTrigger,
}) => {
	// alaf state and activetab
	const state = activeTab === name;
	const [members, setMembers] = useState([]);
	const [fetchingMembers, setFetchingMembers] = useState(false);
	const [savingPlan, setSavingPlan] = useState(12);
	const [amount, setAmount] = useState();
	const [postMember, setPostMember] = useState([]);
	const [activeNav, setActiveNav] = useState("daily");
	const [activeSetting, setActiveSetting] = useState("Goal Savings");

	// const [inputValue, setInputValue] = useState({
	// 	title: "",
	// 	startDate: null,
	// 	endDate: "2022-12-26T23:00:00.000Z",
	// 	savingType: "self-management",
	// 	targetAmount: "",
	// 	duration: "",
	// 	debitDate: null,
	// 	memberNo: "",
	// 	frequencyOfSavings: "weekly",
	// });
	//   calculate duration by diff of end n start divided by 30 in months n round up with ceil to nearest whole
	// const myDateDiff = inputValue.endDate - inputValue.startDate;
	// const myMonthlyDuration = myDateDiff / 30;
	// const myDuration = Math.ceil(myMonthlyDuration);

	// to calculate amount paid by each members
	
	const { settings } = useContext(AppContext);
  	const activeDurations = useMemo(() => {
    if (activeSetting == "Goal Savings") {
      return settings?.savings?.goal?.durations?.map((el) => {
        return `${el?.month} months - ${el?.rate}% p.a`;
      });
    } else {
      return settings?.savings?.goal?.durations?.map((el) => {
        return `${el?.month} months - ${el?.rate}% p.a`;
      });
    }
  }, [activeSetting]);
//   just comment line 67-78 and 47 and 336 then uncomment 337 to 343

	useEffect((values) => {
		let perMember =
		Number(values?.targetAmount) / Number(values?.memberNo);
		const setDuration = Number(parseInt(values?.duration?.split("m")[0]));
		const freSavings = () => {
			if (setDuration === "3" && activeNav === "daily") {
				setSavingPlan(perMember / 90);
			} else if (setDuration === "6" && activeNav === "daily") {
				setSavingPlan(perMember / 180);
			} else if (setDuration === "9" && activeNav === "daily") {
				setSavingPlan(perMember / 270);
			} else if (setDuration === "12" && activeNav === "daily") {
				setSavingPlan(perMember / 360);
			} else if (setDuration === "3" && activeNav === "weekly") {
				setSavingPlan(perMember / 12);
			} else if (setDuration === "6" && activeNav === "weekly") {
				setSavingPlan(perMember / 24);
			} else if (setDuration === "9" && activeNav === "weekly") {
				setSavingPlan(perMember / 36);
			} else if (setDuration === "12" && activeNav === "weekly") {
				setSavingPlan(perMember / 48);
			} else if (setDuration === "3" && activeNav === "monthly") {
				setSavingPlan(perMember / 3);
			} else if (setDuration === "6" && activeNav === "monthly") {
				setSavingPlan(perMember / 6);
			} else if (setDuration === "9" && activeNav === "monthly") {
				setSavingPlan(perMember / 9);
			} else if (setDuration === "12" && activeNav === "monthly") {
				setSavingPlan(perMember / 12);
			}
		};
		freSavings();
		
		const amountPerMem = savingPlan;
		setAmount(amountPerMem);
		console.log('--------------');
		console.log(amount, 'is amount', amountPerMem, 'is per mem', activeNav, 'is nav', setDuration, 'is current dur', perMember, 'is per meb cost');
		console.log('----------');
	}, [
		activeNav,
		amount,
		// values.duration,
		// setDuration,
		// frequencyOfSavings,
		// perMember,
		savingPlan,
	]);
	const handleSubmit = async () => {
		try {
			// this is to post cooperative members added to goal to the endpoint
			// const output= postMember?.selectedExistingMembers?.map(element=> element.id);
			// console.log(output, 'innit me');
			// const returnValue = {
			// "users": output
			// }
			// addGoalSavingsMember(returnValue)
			// toast.success('successfully added members to savings', {duration:10000})
			// this is to send data to create form then close modal on toggle and set to empty state again
			await createGoalSavings(inputValue);
			console.log("this is goal savings?");
			toggle(!toggle);
			setInputValue({
				title: "",
				startDate: null,
				endDate: "2022-12-26T23:00:00.000Z",
				savingType: "",
				targetAmount: "",
				// duration: myDuration,
				duration: "",
				debitDate: null,
				frequencyOfSavings: "",
				memberNo: "",
			});
			setTrigger(!trigger);
			// this set trigger is shared btw create and display.
			// it makes the display page reload automatically after each create endpoint is called
			// unlike using the window dot reload which wasnt giving me my preferred output
			// setLoading(true);
			// window.location.reload();
		} catch (error) {
			toast.error(inputValue?.message, { duration: 10000 });
		}
	};

	const onApply = async (values) => {
		console.log(values, "this is goal?");
		console.log(parseInt(values?.duration?.split("m")[0]),
			"this is goal duration?");
		console.log(values.duration[0], 'namibia',);
		try {
			await createGoalSavings(values);
			console.log("this is goal savings");
			toggle(!toggle);
			setTrigger(!trigger);
			// this set trigger is shared btw create and display.
			// it makes the display page reload automatically after each create endpoint is called
			// unlike using the window dot reload which wasnt giving me my preferred output
			// setLoading(true);
			// window.location.reload();
		} catch (error) {
			toast.error(values?.message, { duration: 10000 });
		}
		
	};

	useEffect(() => {
		(async () => {
			try {
				setFetchingMembers(true);
				const res = await getAllCoopMember();
				console.log(res, "RES");
				setMembers(res.data.data);
			} catch (error) {
				console.log(error.message, "ERR in members");
			} finally {
				setFetchingMembers(false);
				// console.log(members, "SKIIII")
			}
		})();
	}, []);
	const toad = new Date().toDateString();
	const goalFormValidationSchema = yup.object({
		savingType: yup.string("Select saving type").required("Select saving type"),
		title: yup.string().required("title is required"),
		duration: yup.string("Select a duration").required("This field is required"),
		targetAmount: yup.string().required("amount is required"),
		memberNo: yup.string().required("Number of members is required"),
		// duration: yup.string().required("duration is required"),
		startDate: yup.date("")
			.required("Enter a start date")
			.typeError("Enter a valid date")
			.min(yup.ref('toad'), "End date can not be less than today's date"),
			// .min(yup.ref(new Date('')), "End date can not be less than today's date"),
			
		debitDate: yup.date("")
			.required("Enter a date")
			.typeError("Enter a valid date")
			.min(yup.ref("startDate"), "Debit date can not be less than Start date")
			
	});
	return (
		<Dialog
			onClose={() => toggle("")}
			open={state}
			scroll="body"
			sx={{ boxShadow: "none" }}
			// className="scroll_hide"
		>
			<Formik
				initialValues={{
					title: "",
					startDate: null,
					endDate: "2022-12-26T23:00:00.000Z",
					savingType: "self-management",
					targetAmount: "",
					duration: "",
					debitDate: null,
					memberNo: "",
					frequencyOfSavings: "weekly",
				}}
				validationSchema={ goalFormValidationSchema}
				onSubmit={onApply}
			>
				{({
					errors,
					touched,
					values,
					submitCount,
					handleChange,
					setFieldValue,
					isSubmitting,
				}) => {
					return (
						<div className="px-[2rem] pt-[2rem] pb-[3rem] rounded-[8px] md:w-[450px] w-full  ">
							<div className="flex px-[2rem] items-end mb-8 ">
								<p>Create Goal Plan</p>
								<span
									onClick={() => toggle("")}
									className="text text-[28px] text-black ml-[auto] cursor-pointer"
								>
									&#215;
								</span>
							</div>
							<Form className="">

								<div
								className="p-[2rem] flex flex-col gap-[3rem]">
									<RadioGroup
										aria-labelledby="demo-radio-buttons-group-label"
										defaultValue="self-management"
										name="savingType"
										row
										// value={savingType}
										onChange={(e) =>
											setFieldValue({ savingType: e.target.value })
										}
									>
										<FormControlLabel
											value="self-management"
											control={<Radio color="black"
											/>}
											onChange={(e)=> {setFieldValue(e.target.value); handleChange(e);}}
											label="Self Management"
										/>
										<FormControlLabel
											value="third-party"
											control={<Radio color="black" />}
											onChange={(e)=> {setFieldValue(e.target.value); handleChange(e);}}
											label="Third-Party Management"
										/>				
									</RadioGroup>
								</div>
									<Stack
										gap={"3rem"}
										className=" w-[100%] px-[2rem] items-start flex flex-col"
									>
										<Field
											as={TextField}
											id="title"
											label="Title of Savings"
											name="title"
											error={touched.title && errors.title}
											helperText={touched.title && errors.title}
										/>
										<Field
											as={TextField}
											id="targetAmount"
											label="Amount to be saved"
											name="targetAmount"
											error={touched.targetAmount && errors.targetAmount}
											helperText={
												touched.targetAmount && errors.targetAmount
											}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														&#8358;
													</InputAdornment>
												),
											}}
										/>
										<Field
											as={TextField}
											id="memberNo"
											label="How many members"
											name="memberNo"
											error={touched.memberNo && errors.memberNo}
											helperText={
												touched.memberNo && errors.memberNo
											}
										/>
										<hr className="w-full border-solid border-gray-200" />

										{/* <div> */}
											<PLVMenu
												onChange={(val) => {
													setFieldValue("duration", val);
												}}
												error={submitCount >= 1 && errors.duration}
												initText={values?.duration || "Duration"}
												items={
													// activeDurations
													[
													"3 months - 13% p.a",
													"6 months - 20% p.a",
													"9 months - 20% p.a",
													"12 months - 20% p.a",
													"24 months - 20% p.a",
												]
											}
												className="bg-input col-span-3 md:col-span-1"
											></PLVMenu>
										{/* </div> */}
										{/* <select
											// onChange={(e) =>
											// 	setFieldValue({ ...inputValue, duration: e.target.value })
											// }
											// value={duration}
											className="selectedType"
										>
											<option value="">Select Duration</option>
											<option value="3">3 months - 5% p.a</option>
											<option value="6">6 months - 7.5% p.a</option>
											<option value="9">9 months - 13% p.a</option>
											<option value="12">12 months - 20% p.a</option>
										</select> */}
										<PLVDesktopDatePicker
											initialDate={values.startDate}
											error={errors?.startDate && submitCount >= 1}
											helperText={submitCount >= 1 && errors?.startDate}
											onChange={(date) => {
												setFieldValue("startDate", date);
											}}
											label="Start date"
											name="startDate"
										/>
										
										<hr className="w-full border-solid border-gray-200" />
										<p className="text-[#9999B4] ">Frequency of savings</p>
										<div className="w-full flex justify-between items-center">
											<div
												onClick={() => setActiveNav("daily")}
												className={
													activeNav === "daily"
														? `bg-[#137C4B] focus:bg-[#137C4B] px-[3.5rem] py-[1.5rem] rounded-xl  cursor-pointer active:bg-black focus:text-white text-[#fff]`
														: `bg-[#E7EBED] px-[3.5rem] py-[1.5rem] rounded-xl cursor-pointer`
												}
											>
												Daily
											</div>
											<div
												onClick={() => setActiveNav("weekly")}
												className={
													activeNav === "weekly"
														? `bg-[#137C4B] focus:bg-[#137C4B] px-[3.5rem] py-[1.5rem] rounded-xl cursor-pointer active:bg-black focus:text-white text-[#fff]`
														: `bg-[#E7EBED] px-[3.5rem] py-[1.5rem] rounded-xl cursor-pointer`
												}
											>
												Weekly
											</div>
											<div
												onClick={() => setActiveNav("monthly")}
												className={
													activeNav === "monthly"
														? `bg-[#137C4B] focus:bg-[#137C4B] px-[3.5rem] py-[1.5rem] rounded-xl cursor-pointer active:bg-black focus:text-white text-[#fff]`
														: `bg-[#E7EBED] px-[3.5rem] py-[1.5rem] rounded-xl cursor-pointer`
												}
											>
												Monthly
											</div>
										</div>
										
										{values.savingType  == "self-management" && (
											<PLVDesktopDatePicker
												initialDate={values.debitDate}
												error={errors?.debitDate && submitCount >= 1}
												helperText={submitCount >= 1 && errors?.debitDate}
												onChange={(date) => {
													setFieldValue("debitDate", date);
												}}
												label="Debit date"
												name="debitDate"
											/>
											)}
										{values.savingType  == "third-party" && (
												<PLVDesktopDatePicker
												initialDate={values.debitDate}
												error={errors?.debitDate && submitCount >= 1}
												helperText={submitCount >= 1 && errors?.debitDate}
												onChange={(date) => {
													setFieldValue("debitDate", date);
												}}
												label="Select collection date"
												name="debitDate"
											/>
										)}
										<div className="w-full flex flex-row justify-between">
											<p>Amount per member</p>
											{/* <p>&#8358;
											<CurrencySymbol />{" "}
											{formatNumberWithCommas(
												Math.round(amount) / activeNav
											)}
											</p> */}
											<p>
												<CurrencySymbol />{" "} {Math.round(amount)}/ {activeNav}
											</p>
										</div>
										<div className="w-[100%]">
											<LoadingButton
												type="submit"
												loading={isSubmitting}
												variant="contained"
												className="mt-[2rem]"
											>
												Create
											</LoadingButton>
										</div>
									</Stack>
							</Form>
						</div>
					);
				}}
			</Formik>
		</Dialog>
	);
};

export default CreateGoalPlanModal;

