import React, { useState } from "react";

const TabLight = ({ items = ["item1", "item2"], onChange = () => {}, className, active, setActive = () => {} }) => {
  // const [active, setActive] = useState(0);
  return (
    <div className={`flex items-center ${className} overflow-x-scroll scroll_hide`}>
      {items.map((item, i) => {
        return (
          <div
            onClick={() => {
              setActive(item);
              onChange(items[i]);
            }}
            className={`${
              active == item ? "border-b-2 border-solid border-0 border-pv_primary text-pv_primary" : "border-b-2 border-solid border-0 border-transparent text-label"
            } whitespace-nowrap transition-all  py-[.8rem] font-rubik font-normal leading-[2.4rem] text-[1.6rem] cursor-pointer mr-[4rem] last:mr-0`}
            key={i}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default TabLight;
