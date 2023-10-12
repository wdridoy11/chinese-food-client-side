import React from 'react'
import { Link } from 'react-router-dom';
import about2 from '../../../assets/about-02.jpg'
const aboutImg=`https://wdridoy11.github.io/food-website/images/about-01.jpg`;

const About = () => {
  return (
    <div className='py-20'>
        <div className='container mx-auto px-2'>
            <div className="grid items-center lg:grid-cols-3 gap-12">
                 <div className='col-span-2 grid grid-cols-2 gap-5'>
                    <img className="w-full rounded-lg h-[400px] object-cover" src={aboutImg} alt="about img" />
                    <img className="w-full rounded-lg h-[400px] object-cover mt-16" src={about2} alt="about img" />
                 </div>
                 <div className='col-span-1'>
                    <h1 className="text-4xl font-semibold">About Us Our Food</h1>
                    <p className="my-6 text-base text-[#777] font-normal w-full">
                        A food description might include details about how the dish is prepared, such as whether 
                        it is grilled, sautéed, or baked, as well as any special ingredients or seasonings that 
                        are used. It might also include information about the origin or history of the dish, or 
                        any cultural or regional associations that it has. Overall, a good food description should 
                        be clear, concise, and appetizing, conveying the essence of the dish in a way that is both 
                        informative and engaging to the reader or listener.
                    </p>
                    <Link className='bg-[#F9A51A] text-white px-7 py-2 rounded-md text-base font-semibold hover:bg-black duration-500'>Read More</Link>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default About