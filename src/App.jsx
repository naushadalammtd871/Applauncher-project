import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Homer from './component/Homer'
import Weather from './component/Weather'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div className='px-1 sm:px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/label1' element={<Homer />}/>
          <Route path='/label2' element={<Weather />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
