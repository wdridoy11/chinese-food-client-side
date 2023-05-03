import React, { useContext, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider';
const googleIcon=`https://cdn-icons-png.flaticon.com/512/281/281764.png`;

const Registration = () => {
  // It's import from AuthProvider
  const {createUserUsingGoogle, createUserUsingEmail, updateUserProfile,createUserUsingGithub}=useContext(AuthContext);
  const [error,setError] = useState("");
  
  // redirect page
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";

  //  user Registration information
  const handleRegistration =(event)=>{
    event.preventDefault();
    const form = event.target;
    const name =  form.name.value;
    const photo =  form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    setError("");

    if(password.length<6){
      setError("Password must be 6 character")
    }
    
    // import from AuthProvider and when user create account using email and password
    createUserUsingEmail(email,password)
    .then((result)=>{
      const user = result.user;
      updateUserProfile(user,name,photo);
      navigate(from,{replace:true})
      console.log(user)
      form.reset();
    })
    .catch((error)=>{
      setError(error.message)
    })
  }

  return (
    <div className='w-full items-center pt-12 pb-20'>
    <div className='container mx-auto'>
        <div>
        <p className='text-red-600 text-center font-normal text-lg mb-5'>{error}</p>
            <div className='border border-[#ddd] p-12 md:w-1/2 mx-auto rounded-lg'>
                <h3 className='text-2xl font-bold mb-10'>Registration Now</h3>
                <form onSubmit={handleRegistration}>
                    <input className='w-full border-b border-[#ddd] mb-5 pb-2 text-base outline-none' type="text" name="name" id="name" placeholder='Enter your name' required/>
                    <input className='w-full border-b border-[#ddd] mb-5 pb-2 text-base outline-none' type="text" name="photo" id="photo" placeholder='Photo URL' required/>
                    <input className='w-full border-b border-[#ddd] mb-5 pb-2 text-base outline-none' type="email" name="email" id="email" placeholder='Enter your email' required/>
                    <input className='w-full border-b border-[#ddd] mb-5 pb-2 text-base outline-none' type="password" name="password" id="password" placeholder='password' required/>
                    <p className='text-red-600'></p>
                    <button className='btn text-white bg-[#F9A51A] w-full border-0 rounded-none mt-10 mb-4'>Create an account</button>
                    <p className='text-center text-base font-medium'>Already have an account? <Link to={`/login`} className='text-[#F9A51A]'>Login</Link></p>
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

export default Registration