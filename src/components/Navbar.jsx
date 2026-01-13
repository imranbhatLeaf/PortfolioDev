import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Projects from '../Pages/Projects'
const Navbar = () => {
  return (
    <div className='w-full navbar z-9999 bg-white h-20 border-b-2 fixed top-0 flex'>
      <div className='p-3 flex w-full relative justify-center  text-center items-center'>
      <div className='flex text-xl font-semibold items-center justify-center gap-10 w-full]'>
        <Link to="/">
        <h3>Home</h3>
        </Link>
        <Link to="/about">
        <h3>About</h3>
        </Link>
        <Link to="/projects">
        <h3>Projects</h3>
        </Link>
      </div>

      </div>
    </div>
  )
}

export default Navbar