import React from 'react'
// Import Swiper styles
import 'swiper/css';
import './testimonial.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import hero from '../../assets/user.png'
import test1 from '../../assets/tes-01.jpg'
import test2 from '../../assets/tes-02.jpg'
import test3 from '../../assets/tes-03.jpg'
import test4 from '../../assets/tes-04.jpg'

const testimonialData=[
    {
        id:1,
        image:test1,
        name:"James",
        description:"I recently tried the new gourmet burger at The Grilled Fork, and it was an absolute delight! The juicy patty, the perfectly toasted brioche bun, and the unique secret sauce made it the best burger I've ever had. I can't recommend it enough. The Grilled Fork has earned a loyal customer in me!"
    },
    {
        id:2,
        image:test2,
        name:"David",
        description:"I had the pleasure of dining at La Trattoria last night, and I must say their pasta dishes are incredible. The handmade fettuccine with truffle cream sauce was like a taste of heaven. It's evident they use the finest ingredients, and the flavors are out of this world. I can't wait to go back for more!"
    },
    {
        id:3,
        image:test3,
        name:"Robert",
        description:"I've been on a quest to find the perfect pizza, and I can confidently say that Tony's Pizzeria has the best pizza in town. The thin, crispy crust, the fresh toppings, and the perfect blend of cheeses make every bite a true delight. I can't get enough of their Margherita pizza - it's simply divine!"
    },
    {
        id:4,
        image:test4,
        name:"Ryan",
        description:"I attended a wine tasting event at The Vineyard Estate, and it was an unforgettable experience. The selection of wines was impeccable, and the knowledgeable staff made the evening informative and enjoyable. It's a must-visit for any wine enthusiast, and I can't wait to explore their cellar again!"
    },
]


const Testimonial = () => {
  return (
    <div className='py-10'>
        <div className='container mx-auto'>
            <h1 className="text-center text-4xl font-semibold">Testimonial</h1>
            <div className='w-3/5 p-10 mx-auto'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                    >
                        {testimonialData.map((testimonial)=><SwiperSlide key={testimonial.id}>
                            <div className='text-center mx-20 p-10 border rounded-lg'>
                                <div>
                                    <img className='w-20 h-20 object-cover mx-auto rounded-full ring-2 ring-orange-400' src={testimonial.image} alt="" />
                                </div>
                                <div>
                                    <h3 className='text-lg font-medium mt-3 mb-2'>{testimonial.name}</h3>
                                    <p className='text-base font-normal text-[#777]'>{testimonial.description}</p>
                                </div>
                            </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Testimonial