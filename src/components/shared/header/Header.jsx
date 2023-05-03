import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../context/AuthProvider'
import ActiveLink from '../activeLink/ActiveLink'
const Header = () => {

    const {user,logOut}=useContext(AuthContext);
    // user logout
    const userLogOUt=()=>{
        logOut()
        .then((result)=>console.log("LogOut successfyl"))
        .catch((error)=>console.log(error.message))
    }

  return (
    <div className='py-3'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-full h-16' src={logo} alt="" />
                </div>
                <div>
                    <nav className='flex flex-row items-center gap-5'>
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
  )
}

export default Header