import React from "react";
import SvgIconWrapper from "../general/SvgIconWrapper";

const OnboardingLayout = ({ children, desc = "Monitor analytics for your cooperative and members.", img = "/login-img.png" }) => {
  return (
    <div className="min-h-screen w-screen relative flex">
      <section className="w-[48%] min-h-screen h-screen  bg-pv_primary  items-center justify-center px-[2rem] hidden md:flex">
        <div className="min-h-[70vh] h-min flex flex-col justify-center">
          <SvgIconWrapper className={"h-[2.7rem] w-[15.3rem] mx-auto scale-125 lg:scale-150 mb-[6rem]"} iconName={"planvest-logo"}></SvgIconWrapper>
          <img className=" h-[33vh] mx-auto mb-[3rem]" src={img}></img>
          <p className=" text-white font-medium text-[2rem] max-w-[40rem] text-center">{desc}</p>
        </div>
      </section>
      <section className="w-screen md:w-[62%] min-h-screen h-screen overflow-scroll scroll_hide bg-white flex items-center justify-center p-[2rem] text-left md:text-left">{children}</section>
    </div>
  );
};

export default OnboardingLayout;
