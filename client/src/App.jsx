import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import './App.css';
import Login from './pages/login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

