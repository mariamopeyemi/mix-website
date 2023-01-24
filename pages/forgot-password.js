import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import OnboardingLayout from "../components/layouts/OnboardingLayout";
import ShowPassword from "../components/form-elements/ShowPassword";
import { useRouter } from "next/router";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
import { initiateForgotPassword } from "../services/cooperative-members.js";
import toast from "react-hot-toast";
import * as yup from "yup";

const Signin = () => {
  const [passType, setPassType] = useState("password");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    email: yup.string("").required("This field is required"),
  });

  const onInitiateForgotPassword = async (values) => {
    const data = await initiateForgotPassword({ ...values, origin: window.location.hostname.includes("localhost") ? `${window.location.hostname}:${window.location.port}` : window.location.hostname });
    if (data.status) {
      toast.success(data?.message ?? "Please check your email!", { duration: 10000 });
    } else {
      toast.error(data?.message, { duration: 10000 });
    }
  };
  return (
    <OnboardingLayout>
      <div className="max-w-[49.2rem] w-full  h-full flex flex-col justify-center overflow-scroll scroll_hide ">
        <img width={80} className="h-auto self-center mb-[3.2rem]" src="/question-lock.png"></img>
        <p className="mb-[4.2rem] text-label font-medium leading-[3rem] text-[1.8rem] text-center">Enter your phone number or registered email address with planvest to reset your password</p>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onInitiateForgotPassword}
        >
          {({ isSubmitting, touched, errors }) => {
            return (
              <Form className="grid gap-[3rem]">
                <Field as={TextField} name="email" type={"text"} id="email" label="E-mail Address or Phone Number" error={touched.email && errors.email} helperText={touched.email && errors.email} />
                <LoadingButton type="submit" loading={isSubmitting}>
                  Reset Password
                </LoadingButton>
              </Form>
            );
          }}
        </Formik>
      </div>
    </OnboardingLayout>
  );
};

export default Signin;
