import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Skill from './Skill'
const App = () => {
 
  return (
    <div>
    <Navbar/>
        <div className='mt-20'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/PortfolioDev' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/skills' element={<Skill/>}/>
    </Routes>
        </div>
    </div>
  )
}

export default App