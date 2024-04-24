import React, { useState,useEffect } from "react";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {loginviaform} from "../../Actions/authAction";
import axios from "axios";

const Login = () => {
    const { loading,error,userToken} = useSelector((state) => state.auth)
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rememberMe, setRememberMe] = React.useState(false);
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    const dispatch = useDispatch();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        await dispatch(loginviaform({email,password,rememberMe}))
        if(userToken){
            navigate(redirect || "/")
        }

    }
    useEffect(() => {
        if (userToken) {
            navigate(redirect || "/")
        }
    },[userToken,error])
    return (
        <div>
            <section class="bg-gray-50   ">
                <div class="flex flex-col   items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div class="w-full bg-white m-2 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)] leading-tight tracking-tight  text-center  md:text-3xl ">
                                    Sign in to your account
                                </h1>
                                <form class="space-y-4 md:space-y-6" onSubmit={(e) => handleSubmit(e)}>
                                    <div>
                                        <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                        <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                        <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                        <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                    </div>
                                    <div className="text-center">
                                        {error}
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="remember" value={rememberMe} onChange={() => setRememberMe(!rememberMe)} aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                                            </div>
                                            <div class="ml-3 text-sm">
                                                <label htmlFor="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div>
                                    <button type="submit" title={loading ? "Please Wait..." : "Login"} disabled={loading ? true : false} className={`w-full bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]      focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${loading ? 'cursor-not-allowed' : ''}`}>{loading ?
                                        <div role="status" className="flex justify-center" >
                                            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                        : "Sign up"}</button>
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet? <a href="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;