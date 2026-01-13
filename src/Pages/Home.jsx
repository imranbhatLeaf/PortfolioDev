import React from 'react'
import { userContext } from '../context/UserContext'
import { useContext } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'


const Home = () => {
    const {theme} = useContext(userContext)

    
    
  return (
      <div className={`h-screen w-screen ${theme}`}>
    <Hero/>
    </div>
  )
}

export default Home