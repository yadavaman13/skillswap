import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      
       <BrowserRouter>
         <Navbar />
         <Routes>
          <Route path='/' element={<login />}/>
           <Route path="/home" element={<HomePage />}/>
           
           <Route></Route>
         </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App

