import React from 'react'
import ImageHeader from './ImageHeader'
import TitelHeader from './TitelHeader'

function Header() {
  return (
    <div className='wraper mt-24'>
        <TitelHeader/>
        <ImageHeader/>
    </div>
  )
}

export default Header