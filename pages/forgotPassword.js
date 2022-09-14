import React from 'react'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import forgotPassHandler from '../handlers/forgotPassHandler.js'

const ForgotPassword = () => {

    const [email, setEmail] = useState("");

    const submitHandler = () =>{
        forgotPassHandler({"email":email})
    }
  return (
    <div>
        <ToastContainer />
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Forgot Password</h1>
                    <input 
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Full Name"
                        value={email}
                        onChange={(el)=>{setEmail(el.target.value)}}
                        />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={submitHandler}
                        >Get URL</button>

                </div>

                <div className="text-grey-dark mt-6">
                    Dont have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../signup/">
                        Sign Up
                    </a>.
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword