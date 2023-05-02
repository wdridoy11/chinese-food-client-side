import React from 'react'
import {useLoaderData } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';
const ChefDetails = () => {
const singleChefDetails = useLoaderData();
const {img,name,experience,recipes,description,like,recipesDetails} = singleChefDetails;

  return (
    <div>
      <div className='container mx-auto'>
          <div>
              <figure>
                  <img className='w-full h-[700px] object-cover object-top' src={img} alt="chef" />
              </figure>
              <div className='p-3 pb-5'>
                <h2 className="card-title">Name: {name}</h2>
                <p className='mb-2 text-base font-medium mt-1'>Description: {description}.</p>
                <p className='mb-2 text-base font-medium mt-1'>Experience: {experience} years experience</p>
                <p className='mb-2 text-base font-medium mt-1'>Recipes: {recipes}</p>
                <p className='flex items-center gap-2 text-red-500 font-semibold'><FaHeart></FaHeart><span className='text-black'>{like}</span></p>
              </div>
          </div>
          <div>
              <h1 className="text-4xl text-center font-semibold mb-7">Recipes</h1>
              <div className='grid grid-cols-3 gap-5'>
                  {recipesDetails && recipesDetails.map((details,index)=><div key={index}>
                      <img src={details.img} alt={details.recipesName} />
                      <div className='py-5 pl-3'>
                        <h3 className='text-2xl font-semibold capitalize'>Recipes Name : {details.recipesName}</h3>
                      </div>
                  </div>)}
              </div>
          </div>
      </div>
    </div>
  )
}

export default ChefDetails