import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ChefDataLoad = () => {
    const chefData = useLoaderData();
    console.log(chefData)
  return (
    <div>

    </div>
  )
}

export default ChefDataLoad