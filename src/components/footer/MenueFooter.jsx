import React from 'react'
import FooterLI from './FooterLI';

function MenueFooter({name,ul}) {
  return (
    <div className='mx-24'>
    <li className='text-black font-bold mb-8'>{name}</li>
    {ul.map((item,index)=>(
        <FooterLI key={index}{...item}/>
    ))}
    </div>
  )
}

export default MenueFooter