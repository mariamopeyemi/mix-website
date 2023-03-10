import React, { useState } from "react";
import Header from "../general/Header";
import Sidebar from "../general/Sidebar";
import AppContainer from "./AppContainer";
import Footer from "./Footer";
import NavBar from "./NavBar";

const AppStructure = ({ children }) => {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  return (
    // <div className="flex h-screen w-screen">
    //   <main className=" bg-pv_bg overflow-y-scroll scroll_hide pb-[3.2rem] w-screen md:w-[calc(100%_-_262px)] ">
    //     {/* <Header isMobileNavOpened={isMobileNavOpened} setIsMobileNavOpened={setIsMobileNavOpened}></Header> */}
    //     <NavBar isMobileNavOpened={isMobileNavOpened} setIsMobileNavOpened={setIsMobileNavOpened}></NavBar>
    //     <AppContainer className={"pt-[1rem] md:pt-[2rem]"}>{children}</AppContainer>
    //     <Footer />
    //   </main>
    // </div>
    <div className="flex w-screen flex-col">
    <NavBar />
    {children}
    <Footer />
  </div>
  );
};

export default AppStructure;