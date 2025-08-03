import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-400 h-10'>
      <nav className='align-top'>
        <h1 className='text-white text-xl mb-4'>SkillSwap Navigation</h1>
      </nav>
      <nav className='items-end'>
        <Link to="/" className='text-white mr-4 hover:underline'>Home</Link>
        <Link to="/skillswap" className='text-white mr-4 hover:underline'>Skill Swap</Link>
        <Link to="/contact" className='text-white mr-4 hover:underline'>Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar
