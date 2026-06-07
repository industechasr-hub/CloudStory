import React from 'react'
import bgimg from '../../assets/bgimg.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center min-h-screen'>

        <div className='flex items-center justify-center '>
          <img className='ease-in-out duration-1000' src={bgimg} alt="" />
        </div>

        <div className='flex flex-col items-center p-4 px-17 gap-7'>
          <img 
          src={logo}
           alt="logo"
           className=' h-25 overflow-hidden pt-2.5' />
          {/* <h1 className='text-4xl font-bold'>CloudStory</h1> */}

          <p>Escape into a world of imagination, knowledge, and inspiration with <span className='text-orange-500 font-bold'>CloudStory</span> - your personal digital library crafted for readers who love discovering stories anytime, anywhere, From timeless classics to modern favourites, <span className='text-orange-500 font-bold'>CloudStory</span> makes reading simple, immersive, and beautifully organized</p>

           <Link to='/home'> <button className='bg-yellow-500 py-2 w-xl font-medium rounded text-l hover:bg-yellow-400 duration-400 ease-in-out'>Get Started</button> </Link>

          <span className='font-medium'>Already have an account? <Link to="/login"  className='underline hover:text-blue-600'>Sign in</Link></span>
        </div>
      </div>
    </>
  )
}

export default Welcome;