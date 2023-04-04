import React from 'react'
import { menue } from '../../data/data'
import Logo from '../../ui/Logo'
import MenueNav from './MenueNav'
import RegNav from './RegNav'
function Navbar() {
  return (
    <div className='wraper '>
      <ul className='wraper nav'>
        {menue.map((item)=>(
          <MenueNav key={item.id}{...item}/>
        ))}
      </ul>
      <div className='m-auto'>
        <Logo/>
      </div>
      <div>
        <RegNav/>
      </div>
    </div>
  )
}

export default Navbar