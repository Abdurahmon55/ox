import React from 'react'
import InfoSeactionCard from './InfoSeactionCard'

function Section() {
  return (
    <div className='mt-36 wraper bg-white rounded-lg'>
        <div className='left over relative'>
            <InfoSeactionCard viewed='10+ Resources' h3='Service Packages' p='Monotonectally synthesize synergistic portals and value-add paradigms. Appropriately syndicate vertical content whereas.' color='red' bg='oreng'/>
        </div>
        <div className='right'>
            <InfoSeactionCard viewed='5k+ Resources' h3='Design Resources' p='Monotonectally synthesize synergistic portals and value-add paradigms. Appropriately syndicate vertical content whereas.' color='blue' bg='green'/>
        </div>
    </div>
  )
}

export default Section