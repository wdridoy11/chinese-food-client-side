import React from 'react'
import { Link} from 'react-router-dom';

const AllChefShow = ({singleChef}) => {

  const {id,img,name,experience,recipes} = singleChef;

  return (
    <div>
      <div>
         <div className="card bg-base-100 shadow-xl">
          <figure>
              <img className='w-full h-[300px] object-cover object-top' src={img} alt="chef" />
          </figure>
          <div className='p-3 pb-5'>
            <h2 className="card-title">Name: {name}</h2>
            <p className='mb-2text-base font-medium mt-1'>Experience: {experience} years experience</p>
            <p className='mb-5 text-base font-medium mt-1'>Recipes: {recipes}</p>
            <Link to={`/chef/${id}`} className='bg-[#F9A51A] px-5 py-2 rounded-md text-base font-semibold text-black hover:bg-black hover:text-white duration-500'>View Recipes</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllChefShow