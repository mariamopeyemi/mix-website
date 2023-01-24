import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../../context/AppContextProvider";
import Protect from "../utils/Protect";
import SvgIconWrapper from "./SvgIconWrapper";

const Sidebar = ({ setIsMobileNavOpened, isMobileNavOpened }) => {
  const router = useRouter();
  const { setActivePage } = useContext(AppContext);
  const [activeNav, setActiveNav] = useState([]);
  const userNavs = [
    { name: "Dashboard", link: `/cooperative-members/dashboard`, icon: "blocks", page: "admin" },
    { name: "Savings", link: `/cooperative-members/savings`, icon: "note", page: "admin" },
    { name: "Loan", link: `/cooperative-members/loan`, icon: "note-folded", page: "admin" },
    { name: "Investment", link: `/cooperative-members/investment`, redirect: `/cooperative-members/investment/applications`, icon: "note", page: "admin" },
    // { name: "Members", link: `/cooperative-members/members`, icon: "users", page: "admin" },
    { name: "Wallet", link: `/cooperative-members/wallet`, icon: "wallet", page: "admin" },
    { name: "Transaction History", link: `/cooperative-members/transaction-history`, icon: "wallet", page: "admin" },
    { name: "Notification", link: `/cooperative-members/notifications`, icon: "notification", page: "admin" },
    { name: "Account", link: `/cooperative-members/account`, icon: "user", page: "admin" },
    { name: "Support", link: `/cooperative-members/support`, icon: "gear", page: "admin" },
    { name: "Logout", link: `/cooperative-members/logout`, icon: "logout", page: "admin" },
  ];

  const coopAdminNavs = [
    { name: "Dashboard", link: `/cooperative/dashboard`, icon: "blocks", page: "admin" },
    { name: "Savings", link: `/cooperative/savings`, icon: "note", page: "admin" },
    { name: "Loan", link: `/cooperative/loan`, icon: "note-folded", page: "admin" },
    { name: "Investment", link: `/cooperative/investment`, icon: "note", page: "admin" },
    { name: "Members", link: `/cooperative/members`, icon: "users", page: "admin" },
    { name: "Wallet", link: `/cooperative/wallet`, icon: "wallet", page: "admin" },
    { name: "Transaction History", link: `/cooperative/transaction-history`, icon: "wallet", page: "admin" },
    { name: "Notification", link: `/cooperative/notification`, icon: "notification", page: "admin" },
    { name: "Account", link: `/cooperative/account`, icon: "user", page: "admin" },
    { name: "Support", link: `/cooperative/support`, icon: "gear", page: "admin" },
    { name: "Logout", link: `/cooperative/logout`, icon: "logout", page: "admin" },
  ];
  const privateNavs = [
    { name: "Dashboard", link: `/private-members/dashboard`, icon: "blocks", page: "admin" },
    { name: "Savings", link: `/private-members/savings`, icon: "note", page: "admin" },
    { name: "Loan", link: `/private-members/loan`, icon: "note-folded", page: "admin" },
    { name: "Investment", link: `/private-members/investment`, icon: "note", page: "admin" },
    { name: "Members", link: `/private-members/members`, icon: "users", page: "admin" },
    { name: "Wallet", link: `/private-members/wallet`, icon: "wallet", page: "admin" },
    { name: "Transaction History", link: `/private-members/transaction-history`, icon: "wallet", page: "admin" },
    { name: "Notification", link: `/private-members/notification`, icon: "notification", page: "admin" },
    { name: "Account", link: `/private-members/account`, icon: "user", page: "admin" },
    { name: "Support", link: `/private-members/support`, icon: "gear", page: "admin" },
    { name: "Logout", link: `/private-members/Logout`, icon: "logout", page: "admin" },
  ];
  const adminNavs = [
    { name: "Dashboard", link: `/admin/dashboard`, icon: "blocks", page: "admin" },
    { name: "Savings", link: `/admin/savings`, icon: "note", page: "admin" },
    { name: "Loan", link: `/admin/loan`, icon: "note-folded", page: "admin" },
    { name: "Investment", link: `/admin/investment`, icon: "note", page: "admin" },

    { name: "Logout", link: `/admin/logout`, icon: "logout", page: "admin" },
  ];

  const isActive = (link) => {
    return router.pathname.includes(link);
  };

  useMemo(() => {
    let activeNav;
    // Check-Section and setActive Nav on Load
    if (isActive("/cooperative-members")) {
      setActiveNav(userNavs);
      activeNav = userNavs;
    } else if (isActive("/cooperative")) {
      setActiveNav(coopAdminNavs);
      activeNav = coopAdminNavs;
    } else if (isActive("/private-members")) {
      setActiveNav(privateNavs);
      activeNav = privateNavs;
    } else if (isActive("/admin")) {
      setActiveNav(adminNavs);
      activeNav = adminNavs;
    }

    // Setactive Page on global context
    activeNav.forEach((nav) => {
      if (isActive(nav.link)) {
        setActivePage(nav.name);
      }
    });
  }, []);

  return (
    <Protect>
      <div
        className={` w-screen  md:w-[262px] h-full overflow-y-scroll scroll_hide bg-pv_dark  pr-[1.6rem] py-[3.9rem] md:py-[3.9rem]  md:block ${
          isMobileNavOpened ? "block fixed top-0 left-0 z-[10000000]" : "hidden"
        }`}
      >
        {/* hidden sm:block */}
        {/* Head */}
        <section className="flex items-center pl-[3.2rem] mb-[5.2rem]">
          <SvgIconWrapper action={() => setIsMobileNavOpened(!isMobileNavOpened)} className={"w-[2.1rem] h-[2rem] mr-[3rem] cursor-pointer"} iconName={"menu"}></SvgIconWrapper>
          <SvgIconWrapper className={" !h-[2.2rem] !w-[10.8rem]"} iconName={"planvest-logo"}></SvgIconWrapper>
        </section>
        {/* Navs */}
        <nav>
          <ul>
            {activeNav?.map((nav, i) => {
              return (
                <Link key={i} href={nav?.redirect ?? nav.link}>
                  <li
                    onClick={() => {
                      setActivePage(nav.name);
                    }}
                    className={`h-[5.8rem] px-[4.3rem] flex items-center rounded-r-primary cursor-pointer  ${isActive(nav.link) ? " bg-[#666668]" : ""}`}
                  >
                    <a className="flex items-center ">
                      <SvgIconWrapper className={"h-[2.35rem] w-[2.35rem]"} iconName={nav.icon}></SvgIconWrapper>
                      <span title={nav.name} className="ml-[2.5rem] text-white whitespace-nowrap text-ellipsis overflow-hidden text-[1.4rem] font-normal ">
                        {nav.name}
                      </span>
                    </a>
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </Protect>
  );
};

export default Sidebar;
