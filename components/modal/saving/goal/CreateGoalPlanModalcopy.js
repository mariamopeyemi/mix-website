import React, { useState, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import Checkbox from "@mui/material/Checkbox";
import PLVMenu from "../../../form-elements/PLVMenu";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
	Button,
	Dialog,
	Autocomplete,
	Stack,
	InputAdornment,
	TextField,
} from "@mui/material";
import PLVDesktopDatePicker from "../../../form-elements/PLVDesktopDatePicker";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
	createGoalSavings,
	getAllCoopMember,
	addGoalSavingsMember,
} from "../../../../services/cooperative-admin.js/index.js";
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
	const [loading, setLoading] = useState(false);

	const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
	const checkedIcon = <CheckBoxIcon fontSize="small" />;
	const [members, setMembers] = useState([]);
	// const [coopMember, setCoopMember] = useState([]);
	const [fetchingMembers, setFetchingMembers] = useState(false);
	const [savingPlan, setSavingPlan] = useState(12);
	const [amount, setAmount] = useState();
	const [postMember, setPostMember] = useState([]);
	const [activeNav, setActiveNav] = useState("daily");
	const [inputValue, setInputValue] = useState({
		title: "",
		startDate: null,
		endDate: "2022-12-26T23:00:00.000Z",
		savingType: "self-management",
		targetAmount: "",
		duration: "",
		debitDate: null,
		memberNo: "",
		frequencyOfSavings: activeNav,
	});
// to calculate amount paid by each members
	const perMember =
		Number(inputValue.targetAmount) / Number(inputValue.memberNo);

	useEffect(() => {
		const freSavings = () => {
			if (inputValue.duration === "3" && activeNav === "daily") {
				setSavingPlan(perMember / 90);
			} else if (inputValue.duration === "6" && activeNav === "daily") {
				setSavingPlan(perMember / 180);
			} else if (inputValue.duration === "9" && activeNav === "daily") {
				setSavingPlan(perMember / 270);
			} else if (inputValue.duration === "12" && activeNav === "daily") {
				setSavingPlan(perMember / 360);
			} else if (inputValue.duration === "3" && activeNav === "weekly") {
				setSavingPlan(perMember / 12);
			} else if (inputValue.duration === "6" && activeNav === "weekly") {
				setSavingPlan(perMember / 24);
			} else if (inputValue.duration === "9" && activeNav === "weekly") {
				setSavingPlan(perMember / 36);
			} else if (inputValue.duration === "12" && activeNav === "weekly") {
				setSavingPlan(perMember / 48);
			} else if (inputValue.duration === "3" && activeNav === "monthly") {
				setSavingPlan(perMember / 3);
			} else if (inputValue.duration === "6" && activeNav === "monthly") {
				setSavingPlan(perMember / 6);
			} else if (inputValue.duration === "9" && activeNav === "monthly") {
				setSavingPlan(perMember / 9);
			} else if (inputValue.duration === "12" && activeNav === "monthly") {
				setSavingPlan(perMember / 12);
			}
		};
		freSavings();

		const amountPerMem = savingPlan;
		setAmount(amountPerMem);
	}, [
		activeNav,
		inputValue.duration,
		inputValue.frequencyOfSavings,
		perMember,
		savingPlan,
	]);
	console.log(inputValue.duration, 'jjvvvjj');
	console.log(inputValue.frequencyOfSavings, 'frequently');
	console.log("test");

	const handleSubmit = async ( e, value) => {
		// console.log(setInputValue.title, 'wopert')
		console.log(inputValue, 'this doesnt work', e, 'updatte')
		
		try {
			await createGoalSavings(inputValue);
			console.log("this is goal savings?");
			toggle(!toggle);
			setInputValue({
				title: "",
				startDate: null,
				// endDate: "2022-12-26T23:00:00.000Z",
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

	return (
		<Dialog
			onClose={() => toggle("")}
			open={state}
			scroll="body"
			sx={{ boxShadow: "none" }}
			className="scroll_hide"
		>
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
				<div className="p-[2rem] flex flex-col gap-[3rem]">
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="female"
						name="radio-buttons-group"
						row
						value={inputValue.savingType}
						onChange={(e) =>
							setInputValue({ ...inputValue, savingType: e.target.value })
						}
					>
						<FormControlLabel
							value="self-management"
							control={<Radio color="black" />}
							label="Self Management"
						/>
						<FormControlLabel
							value="third-party"
							control={<Radio color="black" />}
							label="Third-Party Management"
						/>
					</RadioGroup>
				</div>
				
					<Stack
						gap={"3rem"}
						className=" w-[100%] px-[2rem] items-start flex flex-col"
					>
						{/* <Field
								as={TextField}
								error={touched.title && errors.title}
								helperText={touched.title && errors.title}
								name="title"
								type={"text"}
								id="title"
								label="Title of Savings"
								variant="filled"
							/> */}
						<TextField
							name="title"
							onChange={(e) =>
								setInputValue({ ...inputValue, title: e.target.value })
							}
							value={inputValue.title}
							type="text"
							id="title"
							label="Title of Savings"
							variant="filled"
						/>
						<TextField
							name="savings"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">&#8358;</InputAdornment>
								),
							}}
							onChange={(e) =>
								setInputValue({ ...inputValue, targetAmount: e.target.value })
							}
							value={inputValue.targetAmount}
							type="text"
							id="savings"
							label="Amount to be saved"
							variant="filled"
						/>
						<TextField
							name="memberNo"
							onChange={(e) =>
								setInputValue({ ...inputValue, memberNo: e.target.value })
							}
							value={inputValue.memberNo}
							type="text"
							id="memberNo"
							label="How many members"
							variant="filled"
						/>
						<hr className="w-full border-solid border-gray-200" />
						<PLVMenu
							// onChange={(val) => {
							// 	setFieldValue("duration", val);
							// }}
							onChange={(e,) => {
								console.log("Change is ", e);
								setInputValue({ ...inputValue, duration: e });
							  }}
							value={inputValue.duration}
							className=" col-span-3 md:col-span-1"
							initText={"Duration"}
							items={["3 months - 5% p.a", "6 months - 7.5% p.a", "9 months - 13% p.a", "12 months - 20% p.a"]}
						></PLVMenu>
						<div>
							{/* <select
							onChange={(e) =>
								setInputValue({ ...inputValue, duration: e.target.value })
							}
							value={inputValue.duration}
							className="selectedType"
						>
							<option value="">Select Duration</option>
							<option value="3">3 months - 5% p.a</option>
							<option value="6">6 months - 7.5% p.a</option>
							<option value="9">9 months - 13% p.a</option>
							<option value="12">12 months - 20% p.a</option>
						</select> */}
						</div>
						<PLVDesktopDatePicker
							onChange={(e) => setInputValue({ ...inputValue, startDate: e })}
							value={inputValue.startDate}
							label="start Date"
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
						{inputValue.savingType == "self-management" && (
						<PLVDesktopDatePicker
							onChange={(e) => setInputValue({ ...inputValue, debitDate: e })}
							value={inputValue.debitDate}
							label="Select debit date"
						/>)}
						{inputValue.savingType == "third-party" && (
						<PLVDesktopDatePicker
						onChange={(e) => setInputValue({ ...inputValue, debitDate: e })}
						value={inputValue.debitDate}
						label="Select collection date"
						/>)}
						<div className="w-full flex flex-row justify-between">
							<p>Amount per member</p>
							<p>
								&#8358;{Math.round(amount)}/ {activeNav}
							</p>
						</div>
						<div className="w-[100%]">
						<LoadingButton
											onClick={handleSubmit}
											variant="contained"
											className="mt-[2rem]"
										>
											Create
										</LoadingButton>
						</div>
					</Stack>
				
			</div>
		</Dialog>
	);
};

export default CreateGoalPlanModal;

