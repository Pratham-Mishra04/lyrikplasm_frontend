import React from 'react'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signupHandler from '../handlers/signupHandler.js';
import Toaster from '../utils/toaster.js';

const Signup = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitHandler = async () =>{
        const formData={
            "name":name,
            "email":email,
            "age":age,
            "gradYear":gradYear,
            "uniName":uniName,
            "username":username,
            "phoneNo":phoneNo,
            "password":password,
            "confirmPassword":confirmPassword
        };
        if(checker()) signupHandler(formData);
    }

    const checker = () =>{
        if(name=="") Toaster.error("Enter the Name");
        else if(username=="") Toaster.error("Enter the Username");
        else if(email=="") Toaster.error("Enter the Email");
        else if(password=="") Toaster.error("Enter the Password");
        else if(confirmPassword=="") Toaster.error("Confirm the Password");
        else if(password.length<8) Toaster.error("Password must be atleast 8 characters long");
        else if(password!=confirmPassword) Toaster.error("Passwords do not match");
        else return true
    }

return (
    <div>
        <ToastContainer />
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name"
                        value={name}
                        onChange={(el)=>{setName(el.target.value)}}
                        />

                        <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(el)=>{setUsername(el.target.value)}} />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(el)=>{setEmail(el.target.value)}} />

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
                        >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    </div>
    )
}

export default Signup