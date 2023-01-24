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

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    console.log("color is", primaryColor);
    // router.push("/cooperative-members/register");
    router.push("/yebox");
  });
  
  return <div></div>;
}
