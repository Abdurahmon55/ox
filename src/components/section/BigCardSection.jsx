import React from 'react'

function BigCardSection({h2,p,id}) {
  return (
    <div className='py-36 mr-8'>
        <img src={`https://source.unsplash.com/1600x900/?color/${id}`} alt="" />
        <h3 className='mt-12'>{h2}</h3>
        <p className='mt-8'>{p}</p>
    </div>
  )
}

export default BigCardSection