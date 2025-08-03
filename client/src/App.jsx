import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
  
      <BrowserRouter>
      <Routes>
   
        <Route path="/" element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

