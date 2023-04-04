import React from 'react'
import { BiExit } from 'react-icons/bi';
function RegNav() {
  return (
    <div className='wraper'>
    <h5 className='mr-4 cursor-pointer'>Get Started</h5>
      <div className='p-1 bg-black rounded-lg cursor-pointer'>
        <button className='text-white text-md'><BiExit/></button>
    </div>  
    </div>
    
    
  )
}

export default RegNav