import { useEffect, useState } from "react";

const defaultItems = [
  {title:"Manager 1", id:"MANAGER_1"},
  {title:"Manager 2", id:"MANAGER_2"},
  {title:"Manager 3", id:"MANAGER_3"},
  {title:"Manager 4", id:"MANAGER_4"},
]
const ManagerSwitcher = ({ className, items = defaultItems, handleChange = () => {} }) => {
  const [activeManager, setActiveManager] = useState();

  const handleSwitch = (type) => {
    setActiveManager(type);
    handleChange(type);
  };

  useEffect(() => {
    handleSwitch(items[0].id);
  }, []);

  return (
    <nav className={` flex mb-[48px] overflow-x-scroll scroll_hide ${className}`}>
      {items.map(({title,id}, i) => {
        return (
          <p
            onClick={() => {
              handleSwitch(id);
            }}
            key={id+i}
            className={`mx-[0.5rem] whitespace-nowrap px-[16px] py-[6px] transition-all border-0 body_heavy hover:bg-[#d9eae2]  ${
              activeManager === id ? "text-[#137C4B] !border-b-[#137C4B] border-solid border-b-2  px-[15px] py-[4px]" : "text-[#9999B4]"
            } cursor-pointer `}
          >
            {title}
          </p>
        );
      })}
    </nav>
  );
};

export default ManagerSwitcher;
