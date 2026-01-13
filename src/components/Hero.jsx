import React from 'react'
import ImageSlider from './SlideImages'
import { Link } from 'react-router-dom'
import img1 from '../assets/dev.jpg'


const Hero = () => {
  return (
    <div className='overflow-x-hidden'>
    <div className='w-full h-full flex flex-col items-center'>
        <h1 className='text-3xl text-center mt-2'>Software Developer Portfolio</h1>
        <hr className='w-[30%] items-center' />
        <div className='mt-2'>
            <h3>i make apps and websites</h3>
        </div>
        <div className='flex justify-between w-full px-[10%]'>
            {/* left */}
            <div className='flex justify-center items-center flex-col w-1/2 mt-5 '>
                <h1 className='text-3xl mb-2 font-medium'>Hi! this is Imran,</h1>
                <h2>Making apps and games been a passion of me, trying to make great games, using mordern technologies such as ReactJs, TailwindCss, Gsoc to make beautiful websites... making good quality work</h2>
            </div>
            {/* right */}
            <div className='flex overflow-hidden rounded-3xl items-center justify-center w-1/2 mt-5'>
               <ImageSlider/>
            </div>
        </div>
        <div className='grid grid-cols-3 mt-30 overflow-x-hidden h-full w-screen px-5  py-1'>
            <div className='bg-red-100 h-94 border-t mx-2 border-t-red-200 flex flex-col items-center border-b-2 rounded-2xl px-2 py-1 hover:bg-red-400 ease-in transition duration-100'>
              <h2 className='pt-4 text-3xl'>Projects</h2>
              <p className='w-[35%] text-center pt-3 mt-5 font-medium'>In this section i have provided some projects i have worked on</p>
              <Link to="/projects">
              <button className='border px-3 py-2 bg-white mt-10 cursor-pointer rounded hover:bg-black hover:text-white'>Learn More</button>
              </Link>
            </div>
            <div className='bg-green-100 h-94 border-t mx-2 border-t-green-200 flex flex-col items-center border-b-2 rounded-2xl px-2 py-1 hover:bg-green-400 ease-in transition duration-100'>
              <h2 className='pt-4 text-3xl'>Contact</h2>
              <p className='w-[35%] text-center pt-3 mt-5 font-medium'>In this section i have provided some projects i have worked on</p>
              <Link to="/about">
              <button className='border px-3 py-2 bg-white mt-10 cursor-pointer rounded hover:bg-black hover:text-white'>Learn More</button>
              </Link>
            </div>
            <div className='bg-blue-100 h-94 border-t mx-2 border-t-blue-200 flex flex-col items-center border-b-2 rounded-2xl px-2 py-1 hover:bg-blue-400 ease-in transition duration-100'>
              <h2 className='pt-4 text-3xl'>SKills</h2>
              <p className='w-[35%] text-center pt-3 mt-5 font-medium'>In this section i have provided some projects i have worked on</p>
              <Link to="/skills">
              <button  className='border px-3 py-2 bg-white mt-10 cursor-pointer rounded hover:bg-black hover:text-white'>Learn More</button>
              </Link>
            </div>
            
        </div>
        
    </div>
    <div className=''>
            
    </div>
    </div>
   
  )
}

export default Hero