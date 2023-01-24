import React from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
import { Dialog, InputAdornment, Stack, TextField } from "@mui/material";
import { createFixedSavings } from "../../../../services/cooperative-admin.js";
import PLVDesktopDatePicker from "../../../form-elements/PLVDesktopDatePicker";
import { Field, Formik, Form } from "formik";

const CreateFixedPlanModal = ({
	activeTab,
	toggle,
	name,
	trigger,
	setTrigger,
}) => {
	const state = activeTab === name;
	const INITIALVAL = {
		title: "",
		startDate: null,
		endDate: null,
		amountTobeSaved: "",
	};
	const fixFormValidationSchema = Yup.object({
		title: Yup.string().required("title is required"),
		amountTobeSaved: Yup.string().required("amount is required"),
		startDate: Yup.date("")
			.required("Enter a start date")
			.typeError("Enter a valid date"),
		endDate: Yup
			.date("")
			.min(Yup.ref("startDate"), "End date can not be less than start date")
			.required("Enter an end date")
			.typeError("Enter a valid date"),
	});

	const handleSubmit = async (values) => {
		try {
			await createFixedSavings(values);
			console.log(values, "this is fixed?");
			toggle(!toggle);
			setTrigger(!trigger);
			toast.success("fixed savings created successfully");
		} catch (error) {
			// toast.error("Error creating fixed savings. Try again later");
			toast.error(data?.message, { duration: 10000 });
		}
	};
	return (
		<Dialog onClose={() => toggle("")} open={state}>
			<div className="pt-[2rem] pb-[3rem] rounded-[8px] md:w-[450px] w-full ">
				<div className="flex px-[4rem] items-end mb-8 ">
					<p>Create Fixed Plan</p>
					<span
						onClick={() => toggle("")}
						className="text text-[28px] text-black ml-[auto] cursor-pointer"
					>
						&#215;
					</span>
				</div>
				<hr className="w-[100%] mx-[auto] my-[2rem] border-solid border border-gray-200" />
				<Formik
					initialValues={INITIALVAL}
					validationSchema={fixFormValidationSchema}
					//   onSubmit={(values) => console.log(values, "she doesnt work well")}
					onSubmit={handleSubmit}
				>
					{({
						errors,
						touched,
						values,
						submitCount,
						setFieldValue,
						isSubmitting,
					}) => {
						return (
							<Form className="grid gap-[1.9rem]">
								<Stack
									gap={"3rem"}
									className="px-[4rem] items-center flex flex-col"
								>
									<Field
										as={TextField}
										id="title"
										label="Title of Savings"
										name="title"
										//   value={e.target.value}
										//   onChange={(e)=>console.log(e.target.value, 'huawei')}
										error={touched.title && errors.title}
										helperText={touched.title && errors.title}
									/>
									<Field
										as={TextField}
										id="amountTobeSaved"
										label="Amount to be locked"
										name="amountTobeSaved"
										error={touched.amountTobeSaved && errors.amountTobeSaved}
										helperText={
											touched.amountTobeSaved && errors.amountTobeSaved
										}
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													&#8358;
												</InputAdornment>
											),
										}}
									/>
									<PLVDesktopDatePicker
										initialDate={values.startDate}
										error={errors?.startDate && submitCount >= 1}
										helperText={submitCount >= 1 && errors?.startDate}
										onChange={(date) => {
											setFieldValue("startDate", date);
										}}
										label="Start date"
										name="startDate"
									></PLVDesktopDatePicker>
									<PLVDesktopDatePicker
										initialDate={values.endDate}
										error={errors?.endDate && submitCount >= 1}
										helperText={submitCount >= 1 && errors?.endDate}
										onChange={(date) => {
											setFieldValue("endDate", date);
										}}
										label="End Date"
										name="endDate"
									></PLVDesktopDatePicker>

									<div className="w-[100%]">
										<LoadingButton
											type="submit"
											loading={isSubmitting}
											// onClick={handleSubmit}
											variant="contained"
										>
											Lock
										</LoadingButton>
									</div>
								</Stack>
							</Form>
						);
					}}
				</Formik>
			</div>
		</Dialog>
	);
};

export default CreateFixedPlanModal;
