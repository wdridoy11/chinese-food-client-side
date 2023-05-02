import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
const errorPageImg=`https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=826&t=st=1682958743~exp=1682959343~hmac=76297dd87cfce1c662c622f238e5f6ed89b1f1ba39340b80297f3e0b92896169`
const Error = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='container mx-auto'>
            <div className='grid items-center md:grid-cols-2'>
                <div>
                    <img className='w-full' src={errorPageImg} alt="error img" />
                </div>
                <div className=''>
                    <h1 className='text-3xl font-semibold text-black'>OPPS! PAGE NOT FOUND</h1>
                    <p className='text-base font-normal text-black mb-5'>Sorry, the page not found. Please try again...</p>
                    <Link className='px-10 py-3 rounded-lg bg-[#F9A51A] inline-block' to={navigate('/')}>GO TO HOME</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Error