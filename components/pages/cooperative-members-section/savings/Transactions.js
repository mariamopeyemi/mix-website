import React, { useState } from "react";
import TabLight from "../../../general/TabLight";
import PlainContainerTitle from "../../../layouts/PlainContainerTitle";

const Transactions = () => {
  const transactions = [
    { title: "Funds added ", id: "220342323O3032DF", amount: "N600,000", date: "Mon, 06 Jun 2022 23:08:06 GMT", type: "add" },
    { title: "Funds transfered to investment plan", id: "220342323O3032DF", amount: "N50,000", date: "Mon, 06 Jun 2022 23:08:06 GMT", type: "transfer" },
  ];
  const items = ["All", "Credit", "Debit"];
  const [active, setActive] = useState(items[0]);
  return (
    <PlainContainerTitle isStrechedMobile={false} title={"Transactions"}>
      <div className=" overflow-scroll scroll_hide">
        <TabLight
          active={active}
          onChange={(el) => {
            setActive(el);
          }}
          className={"mt-[1rem]"}
          items={items}
        ></TabLight>
        <main className="mt-[1.6rem] ">
          {transactions.map((trans, i) => {
            return (
              <div className=" rounded-primary px-[2.4rem] py-[1.5rem] bg-[#F8FAFC] mb-[.8rem] " key={i}>
                <div className="text-[1.4rem] font-medium mb-[.4rem] flex items-center flex-wrap">
                  <span className=" text-text">{trans.title}</span>
                  <span className=" text-label mr-auto">&nbsp; with ID: {trans.id}</span>
                  <span className={` text-[1.6rem] font-medium ${trans?.type == "transfer" ? " text-error" : " text-pv_primary"}`}>{trans.amount}</span>
                </div>
                <p className=" text-text text-[1.4rem] leading-[22px]">{trans.date}</p>
              </div>
            );
          })}
        </main>
      </div>
    </PlainContainerTitle>
  );
};

export default Transactions;
