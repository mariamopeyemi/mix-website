import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { adminVerifyToken } from "../../services/cooperative-admin.js";
import PinInput from "../form-elements/PinInput";
import PopupLayout from "../layouts/PopupLayout";
import toast from "react-hot-toast";
import { useFormikContext } from "formik";

const VerifyModal = ({ email, onAction, onCancel = () => {}, onRegister = () => {} }) => {
  const router = useRouter();
  const [pin, setPin] = useState();
  const [loading, setLoading] = useState(false);
  const { values } = useFormikContext();

  const onVerify = async () => {
    setLoading(true);
    const data = await adminVerifyToken({
      email: router?.query?.email,
      verifyToken: pin,
    });
    setLoading(false);

    if (data.status) {
      toast.success(data?.message, { duration: 10000 });
      router.push("/signin");
    } else {
      toast.error(data?.message, { duration: 10000 });
    }
  };
  return (
    <PopupLayout onClose={onCancel} withBorder={false} title="">
      <div className="grid place-items-center mx-auto max-w-[326px] -translate-y-9">
        <p className=" text-center text-text font-rubik text-[1.8rem]">Enter 4 digit verification code sent to your email ({values.email})</p>
        <img height={222} className="mt-[1.2rem] mb-[.7rem]  " src={"/key-lock.png"}></img>
        <PinInput
          onChange={(val) => {
            setPin(val);
          }}
        ></PinInput>
        <LoadingButton
          loadingPosition="start"
          // loadingIndicator={<CircularProgress role="progressbar" color="white" size={16} />}
          loading={loading}
          onClick={() => {
            onVerify();
          }}
          sx={{
            mt: "2.8rem",
            "&.MuiLoadingButton-loading": {
              color: "gainsboro",
              // opacity: "90%",
            },
          }}
        >
          {loading ? "Verifying..." : "Verify"}
        </LoadingButton>
        <div className="mt-[2rem] grid gap-[1rem] leading-[2.4rem]">
          <a
            onClick={() => {
              onRegister(values);
            }}
            href="#"
            className="text-[#3A76EC] text-[1.4rem] font-medium text-center"
          >
            Send the code again
          </a>

          <a href="#" onClick={onCancel} className="text-[#3A76EC] text-[1.4rem] font-medium text-center">
            Change phone number
          </a>
        </div>
      </div>
    </PopupLayout>
  );
};

export default VerifyModal;