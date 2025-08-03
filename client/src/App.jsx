import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Skillswap from './pages/SkillSwap';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import './App.css';
import Login from './pages/login';
import About from './pages/about';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skillswap" element={<Skillswap />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

