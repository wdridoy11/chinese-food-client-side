import React from 'react'
import Hero from '../hero/Hero'
import ChefDataLoad from '../../chef/ChefDataLoad'
import Subscribe from '../subscribe/Subscribe'
import About from '../about/About'
import Blogs from '../../blog/Blogs'
import Item from '../items/Item'
import Testimonial from '../../testimonial/Testimonial'
import Contact from '../contact/Contact'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Item></Item>
      <ChefDataLoad></ChefDataLoad>
      <Testimonial></Testimonial>
      <Blogs></Blogs>
      <Contact></Contact>
      <Subscribe></Subscribe>
    </div>
  )
}

export default Home