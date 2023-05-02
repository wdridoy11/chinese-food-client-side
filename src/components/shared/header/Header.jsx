import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../context/AuthProvider'
const Header = () => {
    const {user,logOut}=useContext(AuthContext);
    const userLogOUt=()=>{
        logOut()
        .then((result)=>console.log("LogOut successfyl"))
        .catch((error)=>console.log(error.message))
    }
    console.log(user)
    console.log(user?.photoURL)
  return (
    <div className='py-3'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-full h-16' src={logo} alt="" />
                </div>
                <div>
                    <nav className='flex flex-row items-center gap-5'>
                        <Link className='text-base font-medium text-black' to={`/`}>Home</Link>
                        <Link className='text-base font-medium text-black' to={`/`}>Blog</Link>
                        {user ?<>
                            <img className='w-10 h-10 object-cover rounded-full' src={user?.photoURL} alt="" />
                            <Link className='text-base font-medium text-black bg-[#F9A51A] px-5 py-1 rounded-md hover:bg-black hover:text-white duration-500' onClick={userLogOUt}>LogOut</Link>
                            </>:
                            <Link className='text-base font-medium text-black bg-[#F9A51A] px-5 py-1 rounded-md hover:bg-black hover:text-white duration-500' to={`/login`}>Login</Link>}
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header