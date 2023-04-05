import React from 'react'

function NextPrev({i,prev}) {
  return (
    <button onClick={prev} className='text-lg border-2 p-4 rounded-lg mr-5 hover:bg-[#FF5A09] '>{i}</button>
  )
}

export default NextPrev