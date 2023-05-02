import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
const Header = () => {
  return (
    <div className='py-3'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-full h-16' src={logo} alt="" />
                </div>
                <div>
                    <nav className='flex flex-row  gap-5'>
                        <Link className='text-base font-medium text-black' to={`/`}>Home</Link>
                        <Link className='text-base font-medium text-black' to={`/chef`}>Chef</Link>
                        <Link className='text-base font-medium text-black' to={`/`}>Blog</Link>
                        <Link className='text-base font-medium text-black' to={`/login`}>create accunt</Link>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header