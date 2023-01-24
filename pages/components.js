import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Button from "@mui/material/Button";
import { InputAdornment, TextField, Dialog } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { primaryColor } from "../styles/variables.module.scss";
import ShowPassword from "../components/form-elements/ShowPassword";
import PopupLayout from "../components/layouts/PopupLayout";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import PLVDatePicker from "../components/form-elements/PLVDesktopDatePicker";
import PLVDateTimePicker from "../components/form-elements/PLVMobileDateTimePicker";
import PLVSelect from "../components/form-elements/Select";
import CustomSelect from "../components/form-elements/CustomSelect";
import PLVMenu from "../components/form-elements/PLVMenu";
import Upload from "../components/general/Upload";
import PLVMenu2 from "../components/form-elements/PLVMenu2";

export default function Components() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passType, setPassType] = useState("password");
  useEffect(() => {
    console.log("color is", primaryColor);
  });
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className=" max-w-[700px] mx-auto mt-[10px] bg-white px-20 py-10">
      <h1 className="mb-2 text-gray-800">App Components Usage</h1>
      <PLVMenu className=" bg-input" items={["Zenith Bank - 23456543212"]}></PLVMenu>
      {/* <PLVMenu2></PLVMenu2> */}
      <Upload showDisplayImgs className={"my-[3rem]"}></Upload>
      <Button variant="contained">Sign In</Button>
      <div> -----------------------</div>
      <PLVDatePicker></PLVDatePicker>
      <div> -----------------------</div>
      <PLVDateTimePicker></PLVDateTimePicker>
      <div> -----------------------</div>
      <Button variant="outlined" color="error">
        Sign In
      </Button>
      {/* <div className="h-[2rem] bg-blue-600 border-[10px] border-red-600 "> -----------------------</div> */}
      <div> -----------------------</div>
      <CustomSelect></CustomSelect>
      <div> -----------------------</div>
      <PLVMenu selectClassName=" !bg-input"></PLVMenu>
      <div> -----------------------</div>
      <PLVSelect></PLVSelect>
      <div> -----------------------</div>
      <LoadingButton
        endIcon={<span>End Icon</span>}
        onClick={() => {
          setLoading(!loading);
          console.log("in loading");
          // setTimeout(() => {
          //   setLoading(false);
          // }, 3000);
        }}
        loading={loading}
        variant="contained"
      >
        Submit
      </LoadingButton>
      <div> -----------------------</div>
      <LoadingButton
        onClick={() => {
          setLoading(!loading);
          console.log("in loading");
          setTimeout(() => {
            setLoading(false);
            router.push("/cooperative-members/dashboard");
          }, 3000);
        }}
        loading={loading}
        variant="contained"
      >
        Go to dashboard
      </LoadingButton>
      <div> -----------------------</div>
      <Button
        onClick={() => {
          setLoading(false);
        }}
        variant="outlined"
        color="error"
        endIcon={<span>End Icon</span>}
      >
        Stop Loading
      </Button>
      <form>
        <input name="email" type="email" className=" hidden" />
        <input name="password" type="password" className=" hidden" />
        <div> -----------------------</div>
        <TextField name="id-Emaile" type={"email"} id="Email" label="Email" variant="filled" />
        <div> -----------------------</div>
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
          id="password"
          label="Password"
          variant="filled"
        />
      </form>
      <div> -----------------------</div>
      <Button
        onClick={() => {
          console.log("Button clidked");
          setOpen(true);
        }}
        variant="contained"
      >
        Open Modal
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <PopupLayout
          title="Modal"
          onClose={() => {
            setOpen(false);
          }}
        >
          <Button variant="contained">Sign In</Button>
          <div> -----------------------</div>
          <Button variant="outlined" color="error">
            Sign In
          </Button>

          <form>
            <input name="email" type="email" className=" hidden" />
            <input name="password" type="password" className=" hidden" />
            <div> -----------------------</div>
            <TextField name="id-Emaile" type={"email"} id="Email" label="Email" variant="filled" />
            <div> -----------------------</div>
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
              id="password"
              label="Password"
              variant="filled"
            />
          </form>
          <div> -----------------------</div>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            variant="contained"
          >
            Close
          </Button>
        </PopupLayout>
      </Dialog>
    </div>
  );
}
