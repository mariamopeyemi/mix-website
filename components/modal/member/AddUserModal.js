import toast from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
import Checkbox from "@mui/material/Checkbox";
import React, { useEffect, useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Dialog, Stack, Autocomplete, TextField, Box } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
	getAllMember,
	inviteMember,
} from "../../../services/cooperative-admin.js";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import Chip from "../../form-elements/Chip.js";

const AddUserModal = ({ open, toggle, trigger,
	setTrigger, }) => {
	// state for handling button
	const [activeType, setActiveType] = useState("Email");
	// state for handling email typed÷
	const [inputValue, setInputValue] = useState(" ");
	// state for getting typed email to display
	const [inputMem, setInputMem] = useState([]);
	// const [tags, setTags] = useState([]);

	const handleDelete = (i) => {
		console.info("You clicked the delete icon.");
		const newTags = inputMem.filter((el, index) => index != i);
		setInputMem(newTags);
	  };
	const handleChange = (e) => {
		setInputValue(e.target.value);
		console.log(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputMem) {
			let storeData = [...inputMem];
			storeData.push(inputValue);
			setInputMem(storeData);
			console.log(storeData, "does workk");
		} else {
			let storeData = [];
			storeData.push(inputValue);
			setInputMem(storeData);
		}
    setInputValue('')
	};
  const handleRetrieve = async () => {
	
    const returnValue = {
			emails: inputMem,
		};
    console.log(returnValue, 'the emails together')
		await inviteMember(returnValue);
		toast.success("successfully sent invite to join cooperative", { duration: 10000 });
		setTrigger(!trigger);
		toggle(!toggle);
	};



	return (
		<Dialog onClose={toggle} open={open} className="m-[auto] flex ">
			<div className=" rounded-[8px] md:w-[450px] w-full h-[470px] ">
				<div className="flex px-[2rem] flex-row items-center ">
					<p>Add User</p>
					<span
						onClick={toggle}
						className="text text-[28px] text-black ml-[auto] cursor-pointer"
					>
						&#215;
					</span>
				</div>
				<hr className="w-[full] mx-[auto] my-[0.5rem]  border-solid border border-gray-200" />
				<div className="flex flex-col p-[2rem] gap-[1rem]">
					<p>
						{" "}
						New members will join your cooperative once they accept your invite.
					</p>
					<div className=" h-[5.1rem] grid grid-flow-col gap-[2rem] mb-[1rem] max-w-[350px] scroll_hide min-h-max">
						<button
							className={`h-[5.1rem] w-[153px] rounded-primary font-rubik font-medium  px-[3.5rem] border-0  cursor-pointer ${
								activeType != "Phone Number"
									? "text-white bg-black"
									: " border border-black  text-black bg-white"
							}`}
							onClick={() => setActiveType("Email")}
						>
							Email
						</button>
						<button
							className={`h-[5.1rem] w-[153px] rounded-primary font-rubik font-medium  px-[1.5rem] border-0  cursor-pointer ${
								activeType == "Phone Number"
									? "text-white bg-black"
									: " border border-black  text-black bg-white"
							}`}
							onClick={() => setActiveType("Phone Number")}
						>
							Phone Number
						</button>
					</div>
					<Box component="form" onSubmit={handleSubmit}
						sx={{
							backgroundColor: "#F0F2F3",
							height: "200px",
						}}
					>
						<TextField
							type="email" id="email" name="email"
							onChange={handleChange}
							value={inputValue}
							placeholder="Type email"
						/>
            		<Box
						sx={{
							display:'flex',
							flexWrap:'wrap',
						}}
					>	
						{inputMem.map((item, i) => (
							<Chip
							action={() => {
								handleDelete(i);
							}}
							key={i}
							text={item}
							/>
						))}
          			</Box>
					</Box>

					<LoadingButton
						onClick={handleRetrieve}
						variant="contained"
						className="mt-[1rem]"
					>
						Send
					</LoadingButton>
				</div>
			</div>
		</Dialog>
	);
};

export default AddUserModal;
