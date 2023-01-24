import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { FilledInput, TextField } from "@mui/material";
import OnboardingLayout from "../components/layouts/OnboardingLayout";
import ShowPassword from "../components/form-elements/ShowPassword";
import { useRouter } from "next/router";
import Link from "next/link";
import PLVCheckBox from "../components/form-elements/PLVCheckBox";
import SignupWIthButton from "../components/form-elements/SignupWIthButton";

const Register = () => {
  const [passType, setPassType] = useState("password");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  return (
    <OnboardingLayout img="/register-img.png">
      <div className="max-w-[49.2rem] w-full h-full flex flex-col py-[10vh] ">
        <h2 className="mb-[1rem] text-[2.4rem] text-text">Registration</h2>
        <p className="mb-[3.2rem] text-label">Let’s know a bit about your company and get you setup.</p>
        <form className="grid gap-[1.9rem]">
          <input name="email" type="email" className=" hidden" />
          <input name="password" type="password" className=" hidden" />

          <TextField placeholder="xxxxx" error={false} helperText={"This field is required"} name="Full Name" type={"text"} id="Full Name" label="Full Name" variant="filled" />
          <TextField error={true} helperText={"This field is required"} name="id-Emaile" type={"email"} id="Email" label="Email" variant="standard" />
          <TextField name="Phone Number" type={"text"} id="Phone Number11" label="Phone Number" />

          <TextField
            name="id-passwordd"
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
            id="Create Password"
            label="Create Password"
            variant="filled"
          />

          <div onClick={() => setAgree(!agree)} className="flex items-center mt-[.4rem] mb-[1.9rem]">
            <PLVCheckBox id={"agree"} isChecked={agree}></PLVCheckBox>
            <label htmlFor="agree" className=" font-medium text-[1.6rem] text-text ml-[1.4rem] ">
              I agree to all the <a className=" text-pv_primary cursor-pointer">Terms</a>, <a className=" text-pv_primary cursor-pointer">Privacy Policy</a> and{" "}
              <a className=" text-pv_primary cursor-pointer">Fees</a>
            </label>
          </div>
          <LoadingButton
            onClick={() => {
              setLoading(!loading);
              console.log("in loading");
              setTimeout(() => {
                setLoading(false);
                router.push("/signin");
              }, 3000);
            }}
            loading={loading}
            variant="contained"
          >
            Create Account
          </LoadingButton>
          <p className=" font-medium text-[1.6rem] text-text">
            Already have an account?{" "}
            <Link href={"/signin"}>
              <a className=" text-pv_primary">Log in</a>
            </Link>
          </p>
        </form>

        <div className="flex items-center justify-between my-[2.9rem] px-3">
          <div className=" flex-1 border-border border-0 border-b bg-transparent border-solid"></div> <p className="mx-[1.2rem] text-text font-medium text-[1.6rem] ">Or</p>
          <div className=" flex-1 border-border border-0 border-b bg-transparent border-solid"></div>
        </div>
        <div className=" grid gap-[2.5rem] grid-flow-col">
          <SignupWIthButton img={"/fb.png"} type={"Facebook"}></SignupWIthButton>
          <SignupWIthButton img={"/google.png"} type={"Google"}></SignupWIthButton>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Register;
