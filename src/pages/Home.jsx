import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsBoxArrowInRight } from 'react-icons/bs';
import Video from '../assets/hotels.mp4'

const Home = () => {
  return (
    <div>
      <video muted loop autoPlay className='absolute h-screen w-full overflow-hidden object-cover -z-10' src={Video} type='video/mp4'></video>
          <div className="bg-blue-50 bg-opacity-80 min-h-screen flex items-center justify-center font-sans">
    {/* Hero Section */}
    <header className="bg-sky-blue-300 py-20 px-4">
      <div className="container mx-auto text-center flex flex-col gap-10 h-full">
        <h2 className="text-4xl text-blue-950 font-bold mb-4">Welcome to Our Luxurious Hotels</h2>
        <p className="text-lg text-blue-950">Experience comfort like never before.</p>
        <NavLink to="/properties" className="bg-blue-700 text-white hover:bg-sky-blue-400 hover:text-blue-300 py-2 px-6 rounded-full mt-6 flex items-center gap-4  font-semibold text-lg transition duration-300 w-fit mx-auto ">Book Nows <span><BsBoxArrowInRight /></span></NavLink>
      </div>
    </header>
  </div>
    </div>
  )
}

export default Home