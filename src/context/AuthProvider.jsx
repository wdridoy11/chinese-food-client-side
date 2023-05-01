import React, { createContext, useState } from 'react'
import {getAuth,GoogleAuthProvider,GithubAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../utils/firebase/firebase.config';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const {user,setUser}=useState(null);
    const auth = getAuth(app);
    // create user using google
    const createUserUsingGoogle=()=>{
        const googleProvider=new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

    const userInfo ={
        user,
        createUserUsingGoogle
    }


  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider