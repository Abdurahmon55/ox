import React from 'react'
import NextPrev from '../../ui/NextPrev'
import InfoSeactionCard from './InfoSeactionCard'
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import CardSection from './CardSection';
import { trending } from '../../data/data';
import BigCardSection from './BigCardSection';


function Section() {
    const [post, setPost]=useState([])
    const [count, setCount]=useState(0)
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setPost(res.data);
        })
    },[])
    if(count===-1){
        setCount(count+15)
    }
    else if(count===16){
        setCount(count-15)
    }
  return (
    <div>
     <div className='mt-36 wraper bg-white rounded-lg'>
        <div className='left over relative'>
            <InfoSeactionCard viewed='10+ Resources' h3='Service Packages' p='Monotonectally synthesize synergistic portals and value-add paradigms. Appropriately syndicate vertical content whereas.' color='red' bg='oreng'/>
        </div>
        <div className='right'>
            <InfoSeactionCard  viewed='5k+ Resources' h3='Design Resources' p='Monotonectally synthesize synergistic portals and value-add paradigms. Appropriately syndicate vertical content whereas.' color='blue' bg='green'/>
        </div>
    </div> 
    <div className='flex justify-between items-end'>
        <h2 className='mt-36 w-3/6'>Additional Trending Resources</h2>  
        <div>
            <NextPrev prev={()=>setCount(count-1)} count={count} i={<GrPrevious/>}/>
            <NextPrev prev={()=>setCount(count+1)} i={<GrNext/>}/>
        </div>
    </div>
    <div className='wraper '>
     {post && post.slice(0+count,4+count).map((item)=>(
        <CardSection key={item.id}{...item}/>
    ))}   
    </div>
    <div className='wraper bg-white mt-36'>
        {trending.map((item)=>(
            <BigCardSection key={item.id}{...item}/>
        ))}
    </div>
    <div>
    </div>
    </div>
    
  )
}

export default Section