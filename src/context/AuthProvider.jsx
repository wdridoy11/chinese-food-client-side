import React, { createContext, useEffect, useState } from 'react'
import {getAuth,GoogleAuthProvider,GithubAuthProvider,updateProfile, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import app from '../utils/firebase/firebase.config';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(true)
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

    // create user using github
    const createUserUsingGithub=()=>{
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth,githubProvider)
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
    const updateUserProfile =(user,name,photo)=>{
        updateProfile(user,{
            displayName:name,
            photoURL:photo
        })
        .then((result)=>{
            console.log(result)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    // user login
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // user login check
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(true)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    // user LogOut
    const logOut=()=>{
        setLoading(true)
       return signOut(auth)
    }
    // user information
    const userInfo ={
        user,
        logOut,
        loading,
        signInUser,
        updateUserProfile,
        createUserUsingEmail,
        createUserUsingGoogle,
        createUserUsingGithub
    }


  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider