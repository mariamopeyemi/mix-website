import Image from "next/image";
import React from "react";
import CopyLink from "../../../general/CopyLink";
import GreyBox from "../../../general/GreyBox";
import PlainContainer from "../../../layouts/PlainContainer";

const Refferals = () => {
  return (
    <PlainContainer className={"max-w-[78rem] mx-auto "}>
      <div className="grid justify-center pt-[5rem] pb-[2rem]">
        <Image objectFit="contain" className="!w-[19.4rem] !h-[19.4rem]" height={194} width={194} src={"/gift-box-confetti.png"} alt="confetti-box"></Image>
        <h2 className=" font-rubik font-medium text-pv_dark mt-[4rem] text-center">Invite friends and earn N1000</h2>
        <p className="max-w-[37.2rem] text-text text-[1.6rem] mt-[.8rem] mb-[4rem] text-center">Parturient purus ac arcu id eu. Aliquam, etiam odio ipsum tristique posuere augue.</p>
        <CopyLink></CopyLink>
        <div className="grid grid-cols-2 gap-[1rem] mt-[3rem]">
          <GreyBox title={"Total Rewards Earned"} subTitle={"N10,000"}></GreyBox>
          <GreyBox title={"Referred Users"} subTitle={3}></GreyBox>
        </div>
      </div>
    </PlainContainer>
  );
};

export default Refferals;
