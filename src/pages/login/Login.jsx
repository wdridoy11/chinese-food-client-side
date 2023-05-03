import React, { useContext,useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';
const googleIcon=`https://cdn-icons-png.flaticon.com/512/281/281764.png`;

const Login = () => {
    
    // It's import from AuthProvider
    const {createUserUsingGoogle,signInUser,createUserUsingGithub} = useContext(AuthContext);
    const [error,setError]=useState("");
    // when user login then redirect specific page
    const navigate = useNavigate();
    const location = useLocation();
    const from=location.state?.form?.pathname || "/";

    // user login info
    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email,password)
        .then((result)=>{
            const user = result.user;
            console.log(user)
            navigate(from,{replace:true})
        })
        .catch((error)=>{
            console.log(error)
            setError(error.message)
        })
    }


  return (
    <div className='w-full items-center pt-32 pb-20'>
        <div className='container mx-auto'>
            <div>
                <p className='text-red-600 text-center font-normal text-lg mb-5'>{error}</p>
                <div className='border border-[#ddd] p-12 md:w-1/2 mx-auto rounded-lg'>
                    <h3 className='text-2xl font-bold mb-5'>Login</h3>
                    <form onSubmit={handleLogin}>
                        <input className='w-full border-b outline-none border-[#ddd] mb-5 pb-2 text-base' type="email" name="email" id="email" placeholder='Enter your email' required/>
                        <input className='w-full border-b outline-none border-[#ddd] mb-5 pb-2 text-base' type="password" name="password" id="password" placeholder='Enter your password' required/>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <input className='checkbox' type="checkbox" name="checkbox" id="checkbox"  value="Remember Me"/>
                                <label className='font-medium text-black' htmlFor="checkbox">Remember Me</label>
                            </div>
                            <Link className='text-[#F9A51A] text-base font-medium'>Forgot Password</Link>
                        </div>
                        <button className='btn text-white bg-[#F9A51A] w-full border-0 rounded-none mt-10 mb-4 '>Login</button>
                        <p className='text-center text-base font-medium'>Don't have an account? <Link to={`/registration`} className='text-[#F9A51A]'>Create an account</Link></p>
                    </form>
                </div>
                <div className='md:w-1/2 lg:w-1/3 mx-auto mt-6'>
                    <div onClick={createUserUsingGithub} className='flex items-center justify-center border border-[#ddd] py-3 px-2 rounded-full mb-3 relative cursor-pointer'>
                        <p className='absolute top-1.5 left-2 text-4xl '><FaGithub></FaGithub></p>
                        <p className='text-base font-medium text-black'>Continue with Github</p>
                    </div>
                    <div onClick={createUserUsingGoogle} className='flex items-center justify-center border border-[#ddd] py-3 px-2 rounded-full mb-3 relative cursor-pointer'>
                        <p className='absolute top-1.5 left-2 text-4xl text-[#1877F2]'><img className='w-9' src={googleIcon} alt="" /></p>
                        <p className='text-base font-medium text-black'>Continue with Google</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login