import React from 'react'
import hero from '../../../assets/hero.jpg';

const Hero = () => {
  return (
    <div>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero})` }}>
          <div className="bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Chinese Recipe</h1>
              <p className="mb-5 text-xl">choosing quality Food</p>
              <button className="px-7 py-2 text-lg font-semibold bg-[#F9A51A] hover:bg-white hover:text-black duration-500">Read More</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero