import React, { useState } from "react";

const TabLightV2 = ({ items = ["item1", "item2"], onChange = () => {}, className, active }) => {
  // const [active, setActive] = useState(0);
  return (
    <div className={`flex items-center ${className} overflow-x-scroll scroll_hide`}>
      {items.map((item, i) => {
        return (
          <div
            onClick={() => {
              onChange(item);
            }}
            className={`${
              active == item ? " border-pv_primary text-pv_dark" : " text-label"
            } whitespace-nowrap transition-all  py-[.8rem] font-rubik font-normal leading-[2.4rem] text-[2.2rem] cursor-pointer mr-[4rem] last:mr-0`}
            key={i}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default TabLightV2;
