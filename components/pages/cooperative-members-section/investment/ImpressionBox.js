import React from "react";

const ImpressionBox = ({ className, title, value, color, type = "success", hasBg = true }) => {
  const colorTypes = {
    warn: "",
    error: "",
    success: "",
    active: "",
  };
  const getColor = (type) => {
    if (type == "success") {
      return "var(--color-primary-main)";
    }
    if (type == "error") {
      return "var(--color-error)";
    }
    if (type == "warn") {
      return "var(--color-warn)";
    }
    if (type == "active") {
      return "#B548C6";
    }
    if (type == "blue") {
      return "#3A76EC";
    }
  };
  return (
    <div className={`relative ${className}`}>
      <span style={{ color: type ? getColor(type) : color }} className={` text-[4.8rem] font-medium absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 text-center whitespace-nowrap`}>
        <p className="text-[1.6rem] text-pv_dark text-center font-semibold">{title}</p>
        {value}
      </span>

      <div
        style={{ background: type ? getColor(type) : color }}
        className={`flex items-center justify-center h-[16rem]  py-[.9rem] rounded-primary min-w-[12rem] w-full opacity-[.1] relative ${hasBg ? " opacity-100" : " opacity-0"}`}
      ></div>
    </div>
  );
};

export default ImpressionBox;
