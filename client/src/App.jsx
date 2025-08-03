import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Register from './pages/Register';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

