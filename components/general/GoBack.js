import Link from "next/link";
import React from "react";
import SvgIconWrapper from "./SvgIconWrapper";

const GoBack = ({ name, link }) => {
  return (
    <Link href={link}>
      <a className=" items-center cursor-pointer inline-flex">
        <SvgIconWrapper className={"!h-[1.2rem]"} iconName={"arrow-filled "}></SvgIconWrapper>
        <p className=" font-rubik text-pv_dark text-[2.2rem] ml-[2.7rem]">{name}</p>
      </a>
    </Link>
  );
};

export default GoBack;
