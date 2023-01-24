import React, { useState } from "react";
import PLVRadio from "../form-elements/PLVRadio";
import CurrencySymbol from "./CurrencySymbol";
import Hrule from "./Hrule";
import SvgIconWrapper from "./SvgIconWrapper";
import TabFilled from "./TabFilled";

const PaymentOptionsTabs = ({ activePaymentType = "Wallet", onSelect = (type, data) => {}, onOpenAddCard = () => {} }) => {
  const cards = [];
  const paymentTypes = ["Wallet", "Bank cards"];
  const [activeCard, setActiveCard] = useState(0);
  const [paymentType, setPaymentType] = useState(activePaymentType);

  return (
    <div>
      <TabFilled
        label={"Choose payment method"}
        onChange={(item) => {
          setPaymentType(item);
          onSelect(item);
        }}
        active={paymentType}
        items={paymentTypes}
      ></TabFilled>

      {paymentType == "Wallet" && (
        <>
          {/* <Hrule className={" my-[2.4rem]"}></Hrule> */}
          <div className="grid justify-center items-center place-content-center place-items-center mt-[3.2rem]">
            <p className=" text-pv_dark text-[1.6rem] font-medium">Wallet Balance</p>
            <h3 className=" text-[3rem] text-[#2D2D35] font-medium mt-[4px] mb-[12px] leading-[24px]">
              <CurrencySymbol />0
            </h3>
          </div>
        </>
      )}
      {paymentType == "Bank cards" && (
        <>
          <Hrule className={" my-[2.4rem]"}></Hrule>

          {cards.map((el, i) => {
            return (
              <div key={i}>
                <div
                  onClick={() => {
                    setActiveCard(i);
                    onSelect("Bank cards", i);
                  }}
                  className="flex items-center cursor-pointer"
                >
                  <PLVRadio isChecked={activeCard == i} name="card"></PLVRadio>
                  <span className=" text-label text-[1.4rem] font-medium ml-[1.6rem]">{"Use bank card *******2342"}</span>
                </div>
                <Hrule className={"my-[1.8rem] "}></Hrule>
              </div>
            );
          })}

          <p
            onClick={() => {
              setActiveCard(null);
              onSelect("Bank cards", null);
            }}
            className="text-label text-[1.6rem] font-medium flex items-center cursor-pointer"
          >
            <PLVRadio isChecked={cards.length == 0 || activeCard == null} name="card"></PLVRadio> <span className="ml-[1.6rem]">Pay with new card</span>
          </p>
          {/* <p onClick={onOpenAddCard} className="text-label text-[1.6rem] font-medium flex items-center cursor-pointer">
            <SvgIconWrapper className={"w-[2rem] h-[2rem]"} iconName={"box-plus"}></SvgIconWrapper>
            <span className="ml-[1.6rem]">Add bank card</span>
          </p> */}
        </>
      )}
      {paymentType == "Transfer" && (
        <>
          <Hrule className={" my-[2.4rem]"}></Hrule>
          <div className="grid justify-center items-center place-content-center place-items-center mt-[2rem]">
            <p className=" text-pv_dark text-[1.6rem] font-medium">Zenith Bank</p>
            <h3 className=" text-[3rem] text-pv_dark font-semibold mt-[4px] mb-[12px] leading-[24px]">N300,000</h3>
            <div className="h-[31px] rounded-full bg-[#dfe2e68a] px-[15px] flex items-center cursor-pointer">
              <SvgIconWrapper className={"!w-6 !h-6 mr-[8px]"} iconName={"copy-filled-green"}></SvgIconWrapper>
              <span className=" text-[1.6rem] leading-[24px] text-pv_dark font-medium">74653827773</span>
            </div>
            <p className="max-w-[324px] mb-[3rem] mt-[1.4rem] text-pv_dark opacity-[.6] leading-[20px] text-center text-[14px]">
              Transfer this amount into this account number via your mobile banking platform.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentOptionsTabs;
