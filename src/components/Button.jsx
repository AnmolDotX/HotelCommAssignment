import React from 'react'

const Button = ({text}) => {
  return (
    <div className='py-2 px-3 text-sm rounded-full border-blue-700 border bg-white font-semibold text-blue-700 w-fit hover:text-blue-950 hover:bg-blue-50 cursor-pointer transition-all'>{text}</div>
  )
}

export default Button