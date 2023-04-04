import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className='ox m-auto'>
      <div className='container mx-56 py-10'>
        <Navbar/>
        <Header/>
      </div>
    </div>
  )
}

export default App
