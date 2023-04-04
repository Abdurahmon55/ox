import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
function InfoSeactionCard({viewed,h3,p,color,bg}) {
    return (
        <div className='cardInfo '>
            <h6 className={`red_title ${color}`}>{viewed}</h6>
            <h3 className='mt-6'>{h3}</h3>
            <p className='mt-6'>{p}</p>
           <button className={`${bg} p-4 mt-5 rounded-md text-white text-3xl`}><BsArrowRight/></button>
           
        </div>
    )
}

export default InfoSeactionCard