import React from "react";

const SvgIconWrapper = ({ className, iconName, action = () => {}, ...props }) => {
  return (
    <svg onClick={() => action()} className={`stroke-current inline-block fill-current stroke-0 w-10 h-10 ${className}`} {...props}>
      <use xlinkHref={`/svg-defs.svg#icon-${iconName}`}></use>
    </svg>
  );
};

export default SvgIconWrapper;
