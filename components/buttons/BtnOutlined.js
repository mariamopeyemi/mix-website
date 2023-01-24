import React from 'react'

const BtnOutlined =  ({ text,  color, onClick = () => {} }) => {
  return (
    <button
        onClick={(e) => {
          onClick(e);
        }}
        style={{ borderColor: color }}
        className={`px-[10px] w-[200px] h-[50px] whitespace-nowrap ${color ? "border-black" : "border-[#137C4B] "}   rounded-xl border-[1.9px] hover:bg-white flex items-center justify-center`}
      >
        <span className={`text-[16px] ${color ? "text-black" : "text-[#137C4B] "}`}>{text}</span>
      </button>
  )
}

export default BtnOutlined;