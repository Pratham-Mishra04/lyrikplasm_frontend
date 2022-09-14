import React from 'react'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toaster from '../../../utils/toaster.js';
import resetPassHandler from '../../../handlers/resetPassHandler.js'

const ResetPassword = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitHandler = async () =>{
        const formData={
            "userID":"",
            "token":"",
            "password":password,
            "confirmPassword":confirmPassword
        };
        if(checker()) resetPassHandler(formData);
    }

    const checker = () =>{
        if(password.length<8) Toaster.error("Password must be atleast 8 characters long");
        else if(password!=confirmPassword) Toaster.error("Passwords do not match");
        else return true
    }

  return (
    <div>
        <ToastContainer />
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Reset Your Password</h1>

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(el)=>{setPassword(el.target.value)}} />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(el)=>{setConfirmPassword(el.target.value)}} />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={submitHandler}
                        >Submit</button>
                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword