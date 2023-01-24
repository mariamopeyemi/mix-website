import { LoadingButton } from "@mui/lab";
import React, { useState } from "react";
import SvgIconWrapper from "../../../general/SvgIconWrapper";
import PopupLayout from "../../../layouts/PopupLayout";

const AddCardPopUp = ({ onBack = () => {}, onAddCard = () => {} }) => {
  const [loading, setLoading] = useState(false);
  return (
    <PopupLayout
      title={
        <a onClick={onBack} className=" items-center cursor-pointer inline-flex">
          <SvgIconWrapper className={"!h-[1.2rem]"} iconName={"arrow-filled "}></SvgIconWrapper>
          <p className="ml-[2.4rem]  mt-1">Add Card</p>
        </a>
      }
    >
      <p>Add card</p>
      <LoadingButton
        loading={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            onAddCard();
          }, 3000);
        }}
        sx={{ mt: 5 }}
      >
        Add
      </LoadingButton>
    </PopupLayout>
  );
};

export default AddCardPopUp;
