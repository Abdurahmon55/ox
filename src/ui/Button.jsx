import React from 'react'

function Button({color,title}) {
  return (
    <button className={`text-white rounded-md py-6 px-9 bg-[${color}]`}>{title}</button>
  )
}

export default Button