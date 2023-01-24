import React from "react";
import Hrule from "../../../general/Hrule";
import PopupLayout from "../../../layouts/PopupLayout";

const IntrestBreakDownPopUp = ({ onClose = () => {} }) => {
  return (
    <PopupLayout onClose={onClose} title="Interest breakdown">
      <div className="flex items-center justify-between rounded-primary bg-[rgba(255,115,21,0.17)] h-[55px] px-[2rem] mb-[.6rem]">
        <span className="text-text text-[1.6rem]">Total Interest</span>
        <span className="text-[1.4rem] text-pv_dark font-medium">N20,000</span>
      </div>
      {["May 2022", "April 2022"].map((el, i) => {
        return (
          <div className="mt-[2.4rem]" key={i}>
            <h3 className=" text-[1.8rem] font-rubik font-normal text-pv_dark leading-[2.4rem] mb-[1.6rem]">{el}</h3>
            {["one", "Two", "Three", "Four"].map((el, i) => {
              return (
                <div key={i} className="grid items-center grid-cols-3 mb-[1.6rem] last:mb-[2.4rem]">
                  <span className="text-[1.6rem] font-medium text-text">Week {el}</span>
                  <span className="text-[1.6rem] font-medium text-text justify-self-center">N100,000</span>
                  <span className="text-[1.6rem] font-normal text-pv_primary justify-self-end">N50.24</span>
                </div>
              );
            })}

            <Hrule className={""}></Hrule>
          </div>
        );
      })}
    </PopupLayout>
  );
};

export default IntrestBreakDownPopUp;
