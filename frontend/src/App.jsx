import { useState } from 'react'

import './App.css'

import {Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layouts/Layout'
import Courses from './pages/Courses'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function App() {
 

  return (
    <>
    <div className='w-full bg-[#F7F7F8]'>
       <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="courses" element={<Courses/>}/>
          <Route path="aboutus" element={<About/>}/>
          <Route path="pricing" element={<Pricing/>}/>
          <Route path="contact" element={<Contact/>}/>

        </Route>
       </Routes>

    </div>
    
    </>
  )
}

export default App
