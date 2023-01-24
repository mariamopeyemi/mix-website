import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import OnboardingLayout from "../components/layouts/OnboardingLayout";
import ShowPassword from "../components/form-elements/ShowPassword";
import { useRouter } from "next/router";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { resetPassword } from "../services/cooperative-members.js";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const [passType, setPassType] = useState("password");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    password: yup.string("Enter your password").min(8, "Password should be of minimum 8 characters length").required("Password is required"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Password is required"),
  });

  const onResetPassword = async (values) => {
    const data = await resetPassword(values, router?.query?.token);
    if (data.status) {
      toast.success(data?.message ?? "Successful!");
      router.push("/signin");
    } else {
      toast.error(data?.message, { duration: 10000 });
    }
  };
  return (
    <OnboardingLayout>
      <div className="max-w-[49.2rem] w-full  h-full flex flex-col justify-center overflow-scroll scroll_hide ">
        <h2 className="mb-[1rem] text-[2.4rem] text-text">Reset Password</h2>
        <p className="mb-[3.2rem] text-label">Password should contain atleast 8 characters with a number.</p>
        <Formik
          initialValues={{
            password: "",
            passwordConfirm: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onResetPassword}
        >
          {({ isSubmitting, errors, touched }) => {
            return (
              <Form className="grid gap-[1.9rem]">
                <Field
                  as={TextField}
                  error={touched.password && errors.password}
                  helperText={touched.password && errors.password}
                  name="password"
                  InputProps={{
                    endAdornment: (
                      <ShowPassword
                        onChange={(type) => {
                          setPassType(type);
                        }}
                      ></ShowPassword>
                    ),
                  }}
                  type={passType}
                  id="New Password"
                  label="New Password"
                  variant="filled"
                />
                <Field
                  error={touched.passwordConfirm && errors.passwordConfirm}
                  helperText={touched.passwordConfirm && errors.passwordConfirm}
                  as={TextField}
                  name="passwordConfirm"
                  InputProps={{
                    endAdornment: (
                      <ShowPassword
                        onChange={(type) => {
                          setPassType(type);
                        }}
                      ></ShowPassword>
                    ),
                  }}
                  type={passType}
                  id="passwordConfirm"
                  label="Confirm Password"
                  variant="filled"
                />

                <LoadingButton type="submit" loading={isSubmitting} sx={{ marginTop: "14px" }}>
                  Save
                </LoadingButton>
              </Form>
            );
          }}
        </Formik>
      </div>
    </OnboardingLayout>
  );
};

export default ResetPassword;
