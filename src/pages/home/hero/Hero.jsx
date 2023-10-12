import React from 'react'
import Banner from '../../../assets/banner-01.png';
import barger from '../../../assets/burger.png';
import { Link } from 'react-router-dom';
import "./hero.css"

const Hero = () => {
  return(
   <div className='hero'>
      <div className='container mx-auto'>
         <div className='text-center'>
            <h1 className='text-7xl font-bold text-white text-center'>FAST FOOD & RESTAURANT</h1>
            <h3 className='text-2xl text-white font-medium mt-3'>We Serve The Taste, As You Like Foods</h3>
            <Link className='px-10 inline-block mt-5 py-3 bg-[#FF9D2D] text-lg rounded-full text-white font-medium hover:bg-black duration-500'>Read More</Link>
         </div>
      </div>
   </div>
  )
}

export default Hero