import React from 'react'
import Navbar from './components/Navbar';
import Home from './home/Home1'
import Courses from './components/courses/courses';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Contact from './components/Contact';
import Signup from './components/Signup';


function App() {
  return (
    <>
      
      <div className='dark:bg-slate-900:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup/>}/>


        </Routes>
      </div>
    </>
  )
}

export default App
