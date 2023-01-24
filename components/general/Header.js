import { Avatar } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { AuthContext } from "../../context/AuthContextProvider";
import AppContainer from "../layouts/AppContainer";
import Hrule from "./Hrule";
import SvgIconWrapper from "./SvgIconWrapper";

const Header = ({ setIsMobileNavOpened, isMobileNavOpened }) => {
  const AppData = useContext(AppContext);
  const page = AppData.activePage;
  const { user } = useContext(AuthContext);
  console.log("%cheader render", "color: blue;");
  console.count();
  return (
    <header className=" h-[7rem] flex items-center justify-between bg-[linear-gradient(94.02deg,_#051D10_0%,_#0B3918_100.48%)] md:bg-[linear-gradient(94.02deg,_#fff_0%,_#fff_100.48%)]">
      <AppContainer className="flex items-center justify-between !px-[2rem]">
        <SvgIconWrapper action={() => setIsMobileNavOpened(!isMobileNavOpened)} className={"w-[2.1rem] h-[2rem] md:hidden cursor-pointer"} iconName={"menu"}></SvgIconWrapper>
        <span className=" md:text-text font-semibold text-[1.6rem] text-white">{page ?? "Dashboard"}</span>
        <SvgIconWrapper className={" !h-[3rem] !w-[3rem] md:hidden"} iconName={"message-notification-mobile"}></SvgIconWrapper>
        {user && (
          <div className=" items-center hidden md:flex">
            <SvgIconWrapper className={" !h-[3rem] !w-[3rem]"} iconName={"message-notification"}></SvgIconWrapper>
            <Hrule className={"w-[2.3rem] rotate-90 mx-[2rem] !border-label"}></Hrule>

            <Link href={"/cooperative-members/account"}>
              <a className=" flex items-center cursor-pointer">
                {/* <Avatar className="mr-[2rem]" src="/images/avataRR.png"></Avatar> */}
                <Avatar className="mr-[2rem]" alt={user?.cooperativeName ?? (user?.firstName ? user?.firstName + " " + user?.lastName : "Guest")}></Avatar>
                <span className=" text-text text-[1.6rem] font-medium mr-5 capitalize">{user?.cooperativeName ?? (user?.firstName ? user?.firstName + " " + user?.lastName : "Guest")}</span>
              </a>
            </Link>
          </div>
        )}
      </AppContainer>
    </header>
  );
};

export default Header;
