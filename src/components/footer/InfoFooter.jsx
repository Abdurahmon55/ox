import React from 'react'
import Logo from '../../ui/Logo'
import { RiFacebookCircleLine } from 'react-icons/ri';
import { GrGooglePlus } from 'react-icons/gr';
import {  BsTwitter} from 'react-icons/bs';
import {  FaInstagram} from 'react-icons/fa';
function InfoFooter() {
  return (
    <div className='w w-5/12 px-4 rounded-lg bg-white'>
        <div className='pt-24'>
         <Logo/>   
        </div>
        <p className='my-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat venenatis egestas massa pellentesque nullam.</p>
        <h4 className='mb-5'>Follow us:</h4>
        <div>
            <button className='n text-6xl text-blue-500 '><RiFacebookCircleLine/></button>
            <button className='n text-6xl text-red-600 mx-4'><GrGooglePlus/></button>
            <button className='n text-6xl text-sky-500'><BsTwitter/></button>
            <button className='n text-6xl text-red-600 mx-4'><FaInstagram/></button>
            
        </div>
    </div>
  )
}

export default InfoFooter