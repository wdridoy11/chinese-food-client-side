import React from 'react'
import item1 from '../../../assets/item-01.png';
import item2 from '../../../assets/item-02.png';
import item3 from '../../../assets/item-03.png';

const items =[
    {
        id:1,
        title:"Any day offers",
        image:item1,
        description:"NEW PHENOMENON BURGER TASTE",
        price:12.90
    },
    {
        id:2,
        title:"Other flavors",
        image:item2,
        description:"NEW PHENOMENON BURGER TASTE",
        price:12.90
    },
    {
        id:3,
        title:"Find a Poco store",
        image:item3,
        description:"NEW PHENOMENON BURGER TASTE",
        price:12.90
    }
]


const Item = () => {
  return (
    <div className='py-20 bg-[#f7f2e2]'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {items.map((item)=><div key={item.id} className='grid bg-white grid-cols-2 items-center gap-2 shadow-lg p-10 rounded-md'>
                    <div>
                        <h3 className='text-2xl font-medium mb-2'>{item.title}</h3>
                        <p className='text-lg text-black font-normal'>{item.description}</p>
                        <h4 className='text-xl font-semibold mt-4 text-[#F9A51A]'>${item.price}</h4>
                    </div>
                    <div>
                        <img className='w-9/12' src={item.image} alt="" />
                    </div>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Item