import React, { useContext } from 'react'
import { Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const AllChefShow = ({singleChef}) => {

  // This data load from ChefDataLoad and destructure 
  const {id,img,name,experience,recipes,like} = singleChef;
  const {user} = useContext(AuthContext);

  return (
    <div>
      <div>
         <div className="card bg-base-100 shadow-xl">
            <LazyLoadImage className='w-full h-[300px] object-cover object-top' alt={"Hello"} effect="blur" src={img} delayTime={700} />
            <div className='p-3 pb-5'>
              <h2 className="card-title">Name: {name}</h2>
              <p className='text-base font-medium mt-1'>Experience: {experience} years experience</p>
              <p className='text-base font-medium mt-1'>Recipes: {recipes}</p>
              <p className='mb-5 text-base font-medium mt-1'>Like: {like}</p>
              <Link to={user ? `/chef/${id}`:`/login`} className='bg-[#F9A51A] px-5 py-2 rounded-md text-base font-semibold text-black hover:bg-black hover:text-white duration-500'>View Recipes</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AllChefShow