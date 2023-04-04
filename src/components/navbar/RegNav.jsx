import React from 'react'
import { MdExitToApp } from 'react-icons/md';
function RegNav() {
  return (
    <div className='wraper'>
    <h5 className='mr-4 cursor-pointer'>Get Started</h5>
      <div className='p-2 bg-black rounded-lg cursor-pointer'>
        <i className='text-white'><MdExitToApp /></i>
    </div>  
    </div>
    
    
  )
}

export default RegNav