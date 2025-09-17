import React from 'react'
import Video from './components/home/Video'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agence from './pages/Agence'
import { Route, Routes } from 'react-router-dom'
import Navabar from './components/Navbar/Navabar'
import FullScreeNav from './components/Navbar/FullScreeNav'

const App = () => {
  return (
    <div className='text-white overflow-x-hidden'>
      <Navabar />
      <FullScreeNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agence' element={<Agence />} />
      </Routes>
    </div>
  )
}

export default App