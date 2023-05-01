import React, { createContext, useState } from 'react'
import {getAuth,GoogleAuthProvider,GithubAuthProvider,updateProfile, signInWithPopup, createUserWithEmailAndPassword} from 'firebase/auth'
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
    // create user using email and password
    const createUserUsingEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // user updateProfile
    const updateUserProfile =(user,name)=>{
        updateProfile(user,{
            displayName:name
        })
        .then((result)=>{
            console.log(result)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const userInfo ={
        user,
        updateUserProfile,
        createUserUsingEmail,
        createUserUsingGoogle,
    }


  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider