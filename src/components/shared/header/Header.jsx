import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-3'>
        <div className='container mx-auto'>
            <div className='flex justify-between'>
                <div>
                    {/* <img src="" alt="" /> */}
                    <h1>H</h1>
                </div>
                <div>
                    <nav className='flex flex-row  gap-5'>
                        <Link className='text-base font-medium text-black' to={`/`}>Home</Link>
                        <Link className='text-base font-medium text-black' to={`/login`}>create accunt</Link>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header