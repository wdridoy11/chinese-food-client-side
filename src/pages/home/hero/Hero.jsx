import React from 'react'
import Banner from '../../../assets/banner-01.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return(
    <header className="py-20 bg-red-50">
    <div className="container mx-auto px-5 md:px-10 lg:px-16">
       <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="order-last md:order-first">
             <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">Choosing Quality Food</h1>
             <p className="my-6 text-base text-zinc-600 font-normal w-full lg:w-9/12">
                Hello welcome our Chiness food recipe
             </p>
             <Link className='bg-[#F9A51A] px-7 py-3 rounded-md text-base font-semibold text-black hover:bg-black hover:text-white duration-500'>Read More</Link>
          </div>
          <div className="order-first md:order-last mb-5">
             <img src={Banner} alt="banner" />
          </div>
       </div>
    </div>
 </header>
  )
}

export default Hero