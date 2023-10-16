import React, { useEffect, useState } from 'react'
import AllChefShow from './AllChefShow';

const ChefDataLoad = () => {

    const [chefData,setChefData]=useState([]);
    // chef data is loading
    useEffect(()=>{
      fetch("http://localhost:5000/chef")
      .then((res)=>res.json())
      .then((data)=>setChefData(data))
      .catch((error)=>console.log(error))
    },[])
    
  return (
    <div className='py-20'>
        <div className='container mx-auto px-2'>
            <h1 className='text-center text-4xl font-semibold mb-5'>Our Chef</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {chefData.map((singleChef)=><AllChefShow key={singleChef._id} singleChef={singleChef}></AllChefShow>)}
            </div>
        </div>
    </div>
  )
}

export default ChefDataLoad