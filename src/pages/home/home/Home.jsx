import React from 'react'
import Hero from '../hero/Hero'
import ChefDataLoad from '../../chef/ChefDataLoad'
import Subscribe from '../subscribe/Subscribe'
import About from '../about/About'
import Blogs from '../../blog/Blogs'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <h1 className='text-center text-4xl font-semibold'>Our Chef</h1>
      <ChefDataLoad></ChefDataLoad>
      <Blogs></Blogs>
      <Subscribe></Subscribe>
    </div>
  )
}

export default Home