import React, { useState } from 'react'
import '@smastrom/react-rating/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { FaHeart } from 'react-icons/fa';
import {useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import { ToastContainer, toast } from 'react-toastify';
const bannerImg=`https://img.freepik.com/free-photo/front-view-burger-with-french-fries_23-2148234991.jpg?w=1380&t=st=1683035016~exp=1683035616~hmac=b12d6be7dcf98fc94494bacbf1888c910c991503abf46f775f161a0f6a22b7d6`;

const ChefDetails = () => {

  const singleChefDetails = useLoaderData();
  const {img,name,experience,recipes,description,like,recipesDetails,rating} = singleChefDetails;
  const [userRating, setUserRating] = useState(rating);
  const notify = () => toast("Wow Favorite added!");
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick=()=> {
    setIsFavorite(true);
  }

  return (
    <div>
      <div>
          <div className="hero h-[400px]" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <h1 className="mb-5 text-5xl font-semibold">Chef Recipes Details</h1>
            </div>
          </div>
      </div>
      <div className='container mx-auto'>
          <div className='w-1/2 mx-auto shadow-lg mt-10 mb-20'>
              <figure>
                  <img className='w-full rounded-t-lg' src={img} alt="chef" />
              </figure>
              <div className='p-5'>
                <h2 className="text-2xl font-semibold mb-2">Name: {name}</h2>
                <p className='mb-2 text-base font-medium mt-1'>Description: {description}.</p>
                <p className='font-semibold text-base'>Like : {like}</p>
                <p className='mb-2 text-base font-medium mt-1'>Recipes: {recipes}</p>
                <p className='mb-2 text-base font-medium mt-1'>Experience: {experience} years experience</p>
              </div>
          </div>
          <div>
              <h1 className="text-4xl text-center font-semibold mb-7">Recipes</h1>
              <div className='grid grid-cols-3 gap-5 pb-20'>
                  {recipesDetails && recipesDetails.map((details,index)=><div key={index} className='shadow-lg'>
                      <img className='w-full h-[350px] object-cover' src={details.img} alt={details.recipesName} />
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
                            <p className='text-base font-medium list-decimal flex gap-1'><Rating style={{ maxWidth: 100 }} value={userRating} onChange={setUserRating} readOnly/>({details.rating}) </p>
                            <button onClick={handleFavoriteClick} disabled={isFavorite}>
                                {isFavorite ? <>
                                    <p className='text-red-500 border border-[#F9A51A] p-2 rounded-md bg-[#F9A51A] disabled'><FaHeart></FaHeart></p>
                                </>:<>
                                <p onClick={notify} className='text-red-500 border border-[#F9A51A] p-2 rounded-md cursor-pointer hover:bg-black duration-500'><FaHeart></FaHeart></p>
                                </>}
                            </button>
                        </div>
                      </div>
                  </div>)}
              </div>
          </div>
          <ToastContainer />
      </div>
    </div>
  )
}

export default ChefDetails