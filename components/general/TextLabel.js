import React from "react";

const TextLabel = ({ className, text, color, type = "success", hasBg = true }) => {
  const colorTypes = {
    warn: "",
    error: "",
    success: "",
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
  };
  return (
    <span style={{ color: type ? getColor(type) : color }} className={` text-[1.6rem] font-medium ${className}`}>
      {text}
    </span>
  );
};

export default TextLabel;
