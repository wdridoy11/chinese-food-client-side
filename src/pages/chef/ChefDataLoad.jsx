import React from 'react'
import { useLoaderData } from 'react-router-dom'
import AllChefShow from './AllChefShow';

const ChefDataLoad = () => {
    const chefData = useLoaderData();
  return (
    <div>
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-5'>
              {chefData.map((singleChef)=><AllChefShow key={singleChef.id} singleChef={singleChef}></AllChefShow>)}
            </div>
        </div>
    </div>
  )
}

export default ChefDataLoad