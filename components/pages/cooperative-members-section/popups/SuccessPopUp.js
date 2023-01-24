import { Button } from "@mui/material";
import React from "react";
import PopupLayout from "../../../layouts/PopupLayout";

const SuccessPopUp = ({ actionText, onAction, onCancel = () => {}, caption }) => {
  return (
    <PopupLayout onClose={onAction} withBorder={false} title="">
      <div className="grid place-items-center">
        <img height={140} className="" src={"/mark-confetti.png"}></img>
        <p className=" text-text text-[1.7rem] mt-[4rem] max-w-[25.9rem] text-center">{caption}</p>

        <Button
          onClick={() => {
            onAction();
          }}
          sx={{ mt: "5rem" }}
        >
          {actionText}
        </Button>
      </div>
    </PopupLayout>
  );
};

export default SuccessPopUp;
