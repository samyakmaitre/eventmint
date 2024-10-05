import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {signInWithPopup, signOut} from 'firebase/auth'
import {auth, provider} from '../pages/AuthGuard/Firebase'
import {toast} from 'react-toastify'


export const StoreContext=createContext(null);

const ContextAPI = (props) => {
    const[loading, setLoading]=useState(false);
    const[userEmail, setUserEmail]=useState(null);
    const[token, setToken]=useState(" ");
    const navigate=useNavigate();

    const handleGoogleSignIn = async () => {
      setLoading(true);
      await signInWithPopup(auth, provider)
        .then((result) => {
          setLoading(false);
          const user = result.user;
          const { email, refreshToken } = user;
  
          setToken(refreshToken || token);
          setUserEmail(email);
  
          toast.success("Registered Successfully!", {
            position: "top-left",
            theme: "dark",
          });
          navigate("/");
        })
        .catch((error) => {
          setLoading(false);
          toast.error(`${error.message}`, {
            position: "top-left",
            autoClose: 5000,
            theme: "dark",
          });
        });
    };
  
    const handleLogout = async () => {
      await signOut(auth)
        .then(() => {
          setToken(localStorage.removeItem("token"));
          setUserEmail("");
          toast.success("Logged out!", { theme: "colored" });
          navigate("/");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((error) => {
          toast.error(`${error.message}`, { theme: "colored" });
        });
    };

    useEffect(()=>{
      if(localStorage.getItem('token')){
        setToken(localStorage.getItem('token'));
      }
    }, [])

    const ContextValue={
        setLoading, loading,
        navigate,
        setToken, token,
        handleGoogleSignIn, handleLogout,
        userEmail, setUserEmail,
    }

  return (
    <StoreContext.Provider value={ContextValue}>
        {props.children}
    </StoreContext.Provider>
  )
}

export default ContextAPI