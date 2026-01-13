import React from 'react'
import { userContext } from '../context/UserContext'
import { useContext } from 'react'
import { useState } from 'react'


const ToggleDarkMode = () => {
    const { theme, settheme,toggleTheme } = useContext(userContext)
    
  return (
    <button className=' absolute top-[15%] left-[84%] border-3 px-5 py-2 transform transition duration-1ms ease-in rounded-full font-medium mt-1 ml-2' onClick={()=>toggleTheme()}>
          {theme}
    </button>
  )
}

export default ToggleDarkMode