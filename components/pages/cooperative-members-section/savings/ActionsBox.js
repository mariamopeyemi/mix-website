import { Dialog } from "@mui/material";
import React, { useState } from "react";
import SvgIconWrapper from "../../../general/SvgIconWrapper";
import AddCardPopUp from "../popups/AddCardPopUp";
import EnterPinPopUp from "../popups/EnterPinPopUp";
import IntrestBreakDownPopUp from "../popups/IntrestBreakDownPopUp";
import SuccessPopUp from "../popups/SuccessPopUp";
import TopUpPopup from "../popups/TopUpPopup";
import TransferPopup from "../popups/TransferPopUp";
import WithdrawPopUp from "../popups/WithdrawPopUp";

const ActionIconContainer = ({ colorClassName, iconName, title, ...props }) => {
  return (
    <div {...props} className="flex items-center mr-[2.4rem] last:mr-0 cursor-pointer">
      <div className={`w-[3rem] h-[3rem] rounded-full flex items-center justify-center p-[.7rem] bg-[rgba(19,124,75,0.17)]   ${colorClassName}`}>
        <SvgIconWrapper className={" !w-[1.8rem] !h-[1.8rem]"} iconName={iconName}></SvgIconWrapper>
      </div>
      <span className=" ml-[1.5rem] text-[1.6rem] font-normal text-text border-r-2 border-0 border-solid w-max pr-[2.4rem] border-border">{title}</span>
    </div>
  );
};
const ActionsBox = ({ saving }) => {
  const [open, setOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [openedTab, setOpenedTab] = useState(null);
  const [prevModalAddCard, setPrevModalAddCard] = useState();
  const handleClose = () => {
    setOpen(false);
  };
  const openModal = (name) => {
    setOpen(true);
    setActiveModal(name);
  };

  // Modal functions
  const onTopUp = () => {
    setActiveModal("EnterPinTopup");
  };
  const onOpenAddCard = (previousModal) => {
    setPrevModalAddCard(previousModal);
    setActiveModal("AddCardPopUp");
  };
  const onAddCard = (previousModal) => {
    setActiveModal(previousModal);
    setOpenedTab("Bank cards");
  };
  const onWithdraw = () => {
    setActiveModal("EnterPinTopup");
  };
  const onTransfer = () => {
    setActiveModal("EnterPinTopup");
  };
  const onEnterPin = (actions) => {
    actions?.setLoading(true);
    setTimeout(() => {
      actions?.setLoading(false);
      setActiveModal("SuccessTopup");
    }, 2000);
  };

  return (
    <>
      <Dialog scroll="body" onClose={handleClose} open={open}>
        {activeModal == "TopUpPopup" && (
          <TopUpPopup
            onClose={handleClose}
            activeTopUpType={openedTab}
            onOpenAddCard={() => {
              onOpenAddCard("TopUpPopup");
            }}
            onAction={onTopUp}
          ></TopUpPopup>
        )}
        {activeModal == "AddCardPopUp" && (
          <AddCardPopUp
            onBack={() => {
              setActiveModal(prevModalAddCard);
              setOpenedTab("Bank cards");
            }}
            onAddCard={() => {
              onAddCard(prevModalAddCard);
            }}
          ></AddCardPopUp>
        )}
        {activeModal == "EnterPinTopup" && <EnterPinPopUp onAction={onEnterPin} actionText={"Top Up"}></EnterPinPopUp>}
        {activeModal == "SuccessTopup" && <SuccessPopUp onAction={handleClose} actionText={"Ok"} caption={"N300,000 was successfully added to your plan."}></SuccessPopUp>}
        {activeModal == "TransferPopup" && <TransferPopup onAction={onTransfer} onClose={handleClose}></TransferPopup>}
        {activeModal == "IntrestBreakDownPopUp" && <IntrestBreakDownPopUp onAction={onTransfer} onClose={handleClose}></IntrestBreakDownPopUp>}
        {activeModal == "WithdrawPopUp" && (
          <WithdrawPopUp
            onAction={onWithdraw}
            onOpenAddCard={() => {
              onOpenAddCard("WithdrawPopUp");
            }}
            onClose={handleClose}
          ></WithdrawPopUp>
        )}
      </Dialog>

      <div className=" border-0 border-t border-border border-solid mt-[2.4rem] pt-[2.4rem] flex items-center overflow-scroll scroll_hide">
        {saving?.targetAmount != null && (
          <ActionIconContainer
            onClick={() => {
              openModal("TopUpPopup");
            }}
            title={"Top Up"}
            colorClassName={" !bg-pv_primary_light"}
            iconName={"plus"}
          ></ActionIconContainer>
        )}
        <ActionIconContainer
          onClick={() => {
            openModal("WithdrawPopUp");
          }}
          title={"Withdraw"}
          colorClassName={" !bg-error_light"}
          iconName={"bank-building"}
        ></ActionIconContainer>
        <ActionIconContainer
          onClick={() => {
            openModal("TransferPopup");
          }}
          title={"Transfer"}
          colorClassName={" !bg-[rgba(192,190,48,0.17)]"}
          iconName={"transfer"}
        ></ActionIconContainer>
        <ActionIconContainer
          onClick={() => {
            openModal("IntrestBreakDownPopUp");
          }}
          title={"Intrest"}
          colorClassName={" !bg-[rgba(58,117,236,0.16)]"}
          iconName={"intrest"}
        ></ActionIconContainer>
      </div>
    </>
  );
};

export default ActionsBox;
