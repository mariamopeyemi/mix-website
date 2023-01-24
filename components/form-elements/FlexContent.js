import React from 'react'

const FlexContent = ({contentLeft, contentRight, className}) => {
  return (
    <div className={`flex flex-row justify-between w-full ${className}`}>
        <div className='w-[55%] items-start text-[#1D1D1D] font-bold '>{contentLeft}</div>
        <div className='w-[45%] items-start text-[#666668] '>{contentRight}</div>
    </div>
  )
}

export default FlexContent