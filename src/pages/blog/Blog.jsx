import React from 'react'
import { Link } from 'react-router-dom';

const blogImg =`https://cdn.pixabay.com/photo/2023/09/29/15/39/honey-bee-8284082_1280.jpg`;
const Blog = ({blog}) => {
  const {_id, title, image, description_1} = blog;
  return (
    <div>
        <div className="shadow-xl rounded-b-lg pb-2 mt-4">
            <img className='h-[250px] w-full object-cover rounded-t-md' src={image} alt="" />
            <div className="p-5">
               <h3 className="text-2xl text-black font-semibold">{title}</h3>
               <p className="text-base text-slate-400 font-normal my-2">{description_1.length > 150 ? `${description_1.slice(0,150)}...`:description_1}</p>
               <Link to={`/blog/${_id}`} className='bg-[#F9A51A] inline-block mt-2 px-5 py-2 rounded-md text-base font-semibold text-black hover:bg-black hover:text-white duration-500d'>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default Blog
