import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Agence from './pages/Agence';
import Projects from './pages/Projects';

const App = () => {
  return (
    <div className='text-white'>
      {/* <Link className='text-blue-600 mr-5 text-sm' to='/'>Home</Link>
      <Link className='text-blue-600 mr-5 text-sm' to='/agence'>Agence</Link>
      <Link className='text-blue-600 mr-5 text-sm' to='/projects'>Projects</Link> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
