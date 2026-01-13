import React, { createContext} from 'react'
import { useState } from 'react'

export const userContext = createContext(null)


const UserProvider = ({children}) => {
    const [theme, settheme] = useState('light mode')
    
    const toggleTheme = () => {
        return settheme(prev=>prev !== "light mode"? prev = 'light mode':"dark mode")
    }
    let value = {
        theme,
        toggleTheme,
        settheme
    }
  return (
    <div>
    <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    </div>
  )
}

export default UserProvider