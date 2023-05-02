import React from 'react'
import Hero from '../hero/Hero'
import ChefDataLoad from '../../chef/ChefDataLoad'
import Subscribe from '../subscribe/Subscribe'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <h1 className='text-center text-4xl font-semibold pt-20'>Out Chef</h1>
      <ChefDataLoad></ChefDataLoad>
      <Subscribe></Subscribe>
    </div>
  )
}

export default Home