import React from 'react'
import { Link } from 'react-router-dom';
const aboutImg=`https://wdridoy11.github.io/food-website/images/about-01.jpg`;

const About = () => {
  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12">
                 <div>
                    <img className="w-full rounded-lg" src={aboutImg} alt="about img" />
                 </div>
                 <div>
                    <h4 className="text-black text-base font-medium">About Us</h4>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">About Us Our<br /> Food</h1>
                    <p className="my-6 text-base text-black font-medium w-full">
                        A food description might include details about how the dish is prepared, such as whether it is grilled, sautéed,
                        or baked, as well as any special ingredients or seasonings that are used. It might also include information about
                        the origin or history of the dish, or any cultural or regional associations that it has.<br />
                        Overall, a good food description should be clear, concise, and appetizing, conveying the essence
                        of the dish in a way that is both informative and engaging to the reader or listener.
                    </p>
                    <Link className='bg-[#F9A51A] px-5 py-2 rounded-md text-base font-semibold text-black hover:bg-black hover:text-white duration-500'>Read More</Link>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default About