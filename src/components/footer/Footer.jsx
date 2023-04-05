import React from 'react'
import { menue } from '../../data/data'
import Button from '../../ui/Button'
import MenueNav from '../navbar/MenueNav'
import InfoFooter from './InfoFooter'
import MenueFooter from './MenueFooter'


function Footer() {
  return (
    <div>
        <div className='text-center mt-36 border py-20 rounded-lg  bg-[#FF5A09]'>
            <h2 className='w-[768px] m-auto text-white'>Get ahead of the competition with Experts</h2>
            <button className='bg-white button'>Discover Resources</button>
        </div>
        <div className='mt-36 wraper'>
            <InfoFooter/>
            <ul className='wraper'>
                { menue.map((item)=>(
                    <MenueFooter key={item.id}{...item}/>
                ))}
            </ul>
        </div>
        <h4 className='te text-right'>© 2021 itens. All rights reserved.</h4>
    </div>
  )
}

export default Footer