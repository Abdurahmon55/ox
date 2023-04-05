import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Section from './components/section/Section'

function App() {
  return (
    <div className='ox m-auto overflow-hidden'>
      <div className='container mx-56 py-10'>
        <Navbar/>
        <Header/>
        <Section/>
      </div>
    </div>
  )
}

export default App
