import React from 'react'

function CardSection({ image, category,price
}) {
    return (
        <div className='mt-24'>
        <h3>{category}</h3>
        <p>video</p>
        <div className='py-5 px-1 rounded-lg mt-20 bg-blue-300 mr-8'>
           <img className='cardImg ' src={image} alt="" /> 
        </div>
        <div className='wraper mt-14 w-56 mx-auto p-4  bg-blue-300 rounded-lg'>
            <h4>{price}</h4>
            <h4 className='bg-black text-white p-2 rounded-lg ml-2'>cart</h4>
           </div>
        </div>
    )
}

export default CardSection