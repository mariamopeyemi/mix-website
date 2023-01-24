import React from "react";

const TabFilled = ({ items = [], onChange = () => {}, active, className, label, ...props }) => {
  return (
    <div className=" overflow-x-scroll scroll_hide">
      {label && <span className=" mb-[1.6rem] text-label flex">{label}</span>}
      <div {...props} className={`grid gap-[1rem] grid-flow-col items-center overflow-x-scroll scroll_hide ${className}`}>
        {items.map((item, i) => {
          return (
            <div
              onClick={() => {
                onChange(item);
              }}
              className={`h-[4.6rem] cursor-pointer grid justify-center items-center px-[2rem] rounded-primary whitespace-nowrap  text-[1.6rem] leading-[24px] ${
                active == item ? "bg-pv_primary text-white" : " bg-[#E7EBED] text-text"
              }`}
              key={i}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabFilled;
