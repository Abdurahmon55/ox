import React from 'react'

function Button({title}) {
  return (
    <button className={`text-white rounded-md py-6 px-9 bg-[#FF5A09]`}>{title}</button>
  )
}

export default Button