import React, { useState } from "react";
import Header from "../general/Header";
import Sidebar from "../general/Sidebar";
import AppContainer from "./AppContainer";

const AppLayout = ({ children }) => {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  return (
    <div className="flex h-screen w-screen">
      <Sidebar isMobileNavOpened={isMobileNavOpened} setIsMobileNavOpened={setIsMobileNavOpened}></Sidebar>
      <main className=" bg-pv_bg overflow-y-scroll scroll_hide pb-[3.2rem] w-screen md:w-[calc(100%_-_262px)] ">
        <Header isMobileNavOpened={isMobileNavOpened} setIsMobileNavOpened={setIsMobileNavOpened}></Header>
        <AppContainer className={"pt-[1rem] md:pt-[2rem]"}>{children}</AppContainer>
      </main>
    </div>
  );
};

export default AppLayout;
