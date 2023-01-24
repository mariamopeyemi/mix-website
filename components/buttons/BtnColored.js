import React from 'react'

const BtnColored =  ({ text, icon, color, className, onClick = () => {} }) => {
  return (
    <button
        onClick={(e) => {
          onClick(e);
        }}
        style={{ borderColor: color }}
        className={`px-[10px] bg-white h-[32px] whitespace-nowrap ${color ? "border-black" : "border-gray-200"}   rounded-xl border-[1.9px]  flex items-center justify-center ${className}`}
      >
        <span>{icon}</span>
        <span className={`${className} caption_heavy ml-[8px] text-gray-darker`}>{text}</span>
      </button>
  )
}

export default BtnColored