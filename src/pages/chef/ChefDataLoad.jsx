import React, { useEffect, useState } from 'react'
import AllChefShow from './AllChefShow';

const ChefDataLoad = () => {

    const [chefData,setChefData]=useState([]);
    // chef data is loading
    useEffect(()=>{
      fetch("https://food-recipe-server-developersridoy-gmailcom.vercel.app/chef")
      .then((res)=>res.json())
      .then((data)=>setChefData(data))
      .catch((error)=>console.log(error))
    },[])

  return (
    <div className='pt-8 pb-20'>
        <div className='container mx-auto px-2'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {chefData.map((singleChef)=><AllChefShow key={singleChef.id} singleChef={singleChef}></AllChefShow>)}
            </div>
        </div>
    </div>
  )
}

export default ChefDataLoad