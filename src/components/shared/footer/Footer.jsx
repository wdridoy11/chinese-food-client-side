import React from 'react'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black py-20'>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-7'>
                <div>
                    <Link to={'/'}><img src={logo} alt="logo" /></Link>
                    <p className='text-base text-white font-normal mt-5'>
                        Cras at ultrices erat, sed vulputate eros. Nunc at augue gravida est fermentum
                        vulputate. Pellentesque et ipsum in dui malesuada tempus.
                    </p>
                </div>
                <div>
                    <h3 className='text-2xl font-medium text-white mt-7'>Navigation</h3>
                    <div className='flex flex-col text-white mt-7'>
                        <Link className='text-base font-normal' to={'/'}>Home</Link>
                        <Link className='text-base font-normal' to={'/'}>Blog</Link>
                  </div>
                </div>
                <div>
                  <h3 className='text-2xl font-medium text-white mt-7'>Useful Links</h3>
                  <div className='flex flex-col text-white mt-7'>
                        <Link className='text-base font-normal' to={'/registration'}>Registration</Link>
                        <Link className='text-base font-normal' to={'/login'}>Login</Link>
                        <Link className='text-base font-normal' to={'/'}>Terms & conditions</Link>
                  </div>
                </div>
                <div>
                  <h3 className='text-2xl font-medium text-white mt-7'>Fllow Us</h3>
                  <div className='flex flex-row gap-3 text-white mt-7'>
                    <Link to={`https://web.facebook.com/wdridoy11`} className='text-xl border p-2'><FaFacebookF></FaFacebookF></Link>
                    <Link to={``} className='text-xl border p-2'><FaTwitter></FaTwitter></Link>
                    <Link to={``} className='text-xl border p-2'><FaInstagram></FaInstagram></Link>
                    <Link to={`https://www.linkedin.com/in/wdridoy11/`} className='text-xl border p-2'><FaLinkedin></FaLinkedin></Link>
                  </div>
                </div>
            </div>
            <div className='mt-16'>
                <p className='text-center text-white font-medium'>&copy; Copyright 2022 All reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer