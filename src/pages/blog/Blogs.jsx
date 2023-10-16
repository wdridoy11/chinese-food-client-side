import React, { useEffect, useState } from 'react'
import Blog from './Blog'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    fetch(`https://food-recipe-server-r8evnahi5-developersridoy-gmailcom.vercel.app/blogs`)
    .then((res)=>res.json())
    .then((data)=>setBlogs(data))
    .catch((err)=>console.log(err.message))
  },[])

  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <h1 className='text-center text-4xl font-semibold'>Our Blogs</h1>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                {blogs && blogs.map((blog)=><Blog key={blog._id} blog={blog}></Blog>)}
            </div>
        </div>
    </div>
  )
}

export default Blogs