import React from 'react'
import { useLoaderData } from 'react-router-dom'

const BlogDetails = () => {
    const blogData = useLoaderData();
    console.log(blogData)
  return (
    <div>BlogDetails</div>
  )
}

export default BlogDetails