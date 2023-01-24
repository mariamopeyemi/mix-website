import { useEffect, useState } from "react";

const LoanManager = ({ className, items = ["Manager 1", "Manager 2", "Manager 3", "Manager 3", "Managers 4"], handleChange = () => {} }) => {
  const [activeManager, setActiveManager] = useState();

  const handleSwitch = (type) => {
    setActiveManager(type);
    handleChange(type);
  };

  useEffect(() => {
    handleSwitch(items[0]);
  }, []);

  return (
    <nav className={` flex mb-[48px] overflow-x-scroll scroll_hide ${className}`}>
      {items.map((item, i) => {
        return (
          <p
            onClick={() => {
              handleSwitch(item);
            }}
            key={i}
            // className={`${activeManager == item ? "text-black" : "text-[#9999B4]"}`}
                
            className={` whitespace-nowrap font-medium text-[20px] px-[16px] pt-[6px] transition-all border-0 body_heavy hover:bg-[#d9eae2]  ${
              activeManager == item ? "text-[#1D1D1D] " : "text-[#9999B4]"
            } cursor-pointer `}
          >
            {item}
          </p>
        );
      })}
    </nav>
  );
};

export default LoanManager;
