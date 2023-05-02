import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import '@smastrom/react-rating/style.css'
import {useLoaderData } from 'react-router-dom'
import { Rating } from '@smastrom/react-rating';

const ChefDetails = () => {
  const singleChefDetails = useLoaderData();
  const {img,name,experience,recipes,description,like,recipesDetails,rating} = singleChefDetails;
  const [userRating, setUserRating] = useState(rating);

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
                <p className='font-semibold text-base'>Like : {like}</p>
                <p className='mb-2 text-base font-medium mt-1'>Recipes: {recipes}</p>
                <p className='mb-2 text-base font-medium mt-1'>Experience: {experience} years experience</p>
              </div>
          </div>
          <div>
              <h1 className="text-4xl text-center font-semibold mb-7">Recipes</h1>
              <div className='grid grid-cols-3 gap-5 py-20'>
                  {recipesDetails && recipesDetails.map((details,index)=><div key={index} className='shadow-lg'>
                      <img src={details.img} alt={details.recipesName} />
                      <div className='py-5 px-4'>
                        <h3 className='text-2xl font-semibold capitalize'>Recipes Name : {details.recipesName}</h3>
                        <h4 className='text-xl font-semibold text-black mt-3'>Ingredients</h4>
                        <div className='grid grid-cols-2 mt-1'>
                          {details?.ingredients?.map((ingredient,index)=><li key={index} className='text-base font-medium list-decimal'>{ingredient}</li>)}
                        </div>
                        <h4  className='text-xl font-semibold text-black mt-3'>Cooking method</h4>
                        <div className='mt-1'>
                          {details?.cookingMethod?.map((cookingMethod,index)=><li key={index} className='text-base font-medium list-decimal'>{cookingMethod}</li>)}
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <p className='text-base font-medium list-decimal flex gap-1'><Rating style={{ maxWidth: 100 }} value={userRating} onChange={setUserRating} readOnly/>({rating}) </p>
                            <p className='text-red-500 border border-[#F9A51A] p-2 rounded-md cursor-pointer hover:bg-black duration-500'><FaHeart></FaHeart></p>
                        </div>
                      </div>
                  </div>)}
              </div>
          </div>
      </div>
    </div>
  )
}

export default ChefDetails