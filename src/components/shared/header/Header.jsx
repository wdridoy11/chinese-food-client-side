import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider'
import ActiveLink from '../activeLink/ActiveLink'
const bar=`https://raw.githubusercontent.com/wdridoy11/web-icon/main/bar.png`;
const Header = () => {

    const {user,logOut}=useContext(AuthContext);
    // user logout
    const userLogOUt=()=>{
        logOut()
        .then((result)=>console.log("LogOut successfyl"))
        .catch((error)=>console.log(error.message))
    }
    // toggle
    const [isActive,setIsActive]=useState("false");
    const handleToggle=()=>{
        setIsActive(!isActive);
    }

  return (
    <div className='py-3'>
        <div className='container mx-auto px-2'>
            <div>
                <div className='flex justify-between md:items-center'>
                <div>
                    <Link to={'/'}><h3 className='text-2xl font-semibold text-black'>Chinese food</h3></Link>
                </div>
                <button className="absolute top-3 right-3 cursor-pointer" onClick={handleToggle}><img className="w-8 block md:hidden" src={bar} alt="Icon" /></button>
                <div>
                    <nav className={isActive ? "hidden md:flex gap-7 items-center":"flex flex-col md:flex-row gap-7 mt-16"}>
                    {/* <nav className='flex flex-row items-center gap-5'> */}
                        <ActiveLink className='text-base font-semibold text-black' to={`/`}>Home</ActiveLink>
                        <ActiveLink className='text-base font-semibold text-black' to={`/blog`}>Blog</ActiveLink>
                        {user ?<>
                            <div className="tooltip tooltip-bottom" data-tip={`${user?.displayName}`}>
                              <img className='w-10 h-10 object-cover rounded-full cursor-pointer' src={user?.photoURL} alt="user" />
                            </div>
                            <Link className='text-base font-medium text-black bg-[#F9A51A] px-5 py-1 rounded-md hover:bg-black hover:text-white duration-500' onClick={userLogOUt}>LogOut</Link>
                            </>: <Link className='text-base font-medium text-black bg-[#F9A51A] px-5 py-1 rounded-md hover:bg-black hover:text-white duration-500' to={`/login`}>Login</Link>}
                    </nav>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header