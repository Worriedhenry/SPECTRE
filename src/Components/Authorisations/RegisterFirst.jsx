import React, { useState } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import axios from "axios"
const Register = ({ setActiveTabs, username, setUsername, fullname, setFullname, phone, setPhone, email, setEmail }) => {

    const [emailVerified, setEmailVerified] = useState(false);
    const [alertMailCode, setalertMailCode] = useState(100)
    const [alertPhoneCode, setAlertPhoneCode] = useState(100)
    const [alertUsernameCode, setalertUsernameCode] = useState(100)
    const [usernameVerified, setUsernameVerified] = useState(false);
    const [phoneVerified, setPhoneVerified] = useState(false);
    const navigate = useNavigate();

    const Message = {
        100: ""
        , 200: "Available",
        300: "Verifing ...",
        400: "Already in use",
        500: "Invalid Input"
    }

    const handleEmailVerification = async () => {
        if (email) {
            setalertMailCode(300)
            const res = await axios.get((import .meta.env.VITE_BACKEND_AUTH ||import .meta.env.VITE_BACKEND)+"/auth/emailexist/" + email)
            console.log(res.data)
            if (res.data) {
                setEmailVerified(true);
                setalertMailCode(200);
            }
            else {
                setEmailVerified(false);
                setalertMailCode(400);
            }
        }
        else {
            setalertMailCode(500)
        }
    }
    const handleUsernameVerification = async () => {
        if (username) {
            const res = await axios.get((import .meta.env.VITE_BACKEND_AUTH ||import .meta.env.VITE_BACKEND)+"/auth/usernameexist/" + username)

            if (res.data) {
                setUsernameVerified(true);
                setalertUsernameCode(200);
            }
            else {
                setUsernameVerified(false);
                setalertUsernameCode(400);
            }
        }
        else {
            setalertUsernameCode(500)
        }
    }

    const handlePhoneVerification = async () => {
        if (phone) {
            setAlertPhoneCode(300)
            const res = await axios.get((import .meta.env.VITE_BACKEND_AUTH ||import .meta.env.VITE_BACKEND)+"/auth/phoneexist/" + phone)
            if (res.data) {
                setPhoneVerified(true);
                setAlertPhoneCode(200);
            }
            else {
                setPhoneVerified(false);
                setAlertPhoneCode(400);
            }
        }
        else {
            setAlertPhoneCode(500)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (emailVerified && usernameVerified) {
            setActiveTabs(2)
        }
        }


    return (
        <div className="p-1 bg-gray-50 ">
            <section class=" h-full my-2 ">
                <div class="flex flex-col   items-center justify-center px-6 py-4 mx-auto  lg:py-0">
                    <div class="w-full bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div class="w-full bg-white m-2 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)] leading-tight tracking-tight  text-center  md:text-3xl ">
                                    Create and account
                                </h1>
                                <form class="space-y-4 md:space-y-6" onSubmit={(e) => handleSubmit(e)} action="#">
                                    <div>
                                        <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                                        <input type="fullname" id="fullname" value={username} onChange={(e) =>{
                                            setalertUsernameCode(100)
                                            setUsernameVerified(false)
                                            setUsername(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Full Name" required />
                                        <div className="flex justify-between">
                                            {!usernameVerified && username.length > 0 && <button type="button" onClick={() => handleUsernameVerification()} className="w-fit bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Cheak availablity</button>}
                                            <p className={`block mb-2  text-sm font-medium text-gray-900 ${alertUsernameCode === 200 && "text-green-500"} ${alertUsernameCode === 300 && "text-yellow-500"} ${alertUsernameCode === 400 && "text-red-500"} `}>{Message[alertUsernameCode]} </p>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 ">Full name (optional)</label>
                                        <input type="fullname" id="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Full Name" />
                                    </div>
                                    {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">User Type</label>
                                    <select id="countries"  onChange={(e) => setServiceType(e.target.value)} value={serviceType} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                        <option value={""} selected>Choose </option>
                                        <option value={"Service Provider"} selected>Service Provider</option>
                                        <option value={"Service Consumer"} >Service Consumer</option>
                                        
                                    </select> */}
                                    {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Account Type</label>
                                    <select id="countries"  onChange={(e) => setAccountType(e.target.value)} value={accountType} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                        <option value={""}>Choose a country</option>
                                        <option value={"Individual"} selected>Individual</option>
                                        <option value={"Corporation"} >Corporation</option>
                                        
                                    </select> */}
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                        <input type="email" required onChange={(e) => {
                                            setEmailVerified(false)
                                            setalertMailCode(100)
                                            setEmail(e.target.value)
                                        }} value={email} name="email" id="email" class="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" />
                                        <div className="flex justify-between">
                                            {!emailVerified && email.length > 0 && <button type="button" onClick={() => handleEmailVerification()} className="w-fit bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Cheak availablity</button>}
                                            <p className={`block mb-2  text-sm font-medium text-gray-900 ${alertMailCode === 200 && "text-green-500"} ${alertMailCode === 300 && "text-yellow-500"} ${alertMailCode === 400 && "text-red-500"} `}>{Message[alertMailCode]} </p>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="phone " class="block mb-2 text-sm font-medium text-gray-900 ">Your Contact</label>
                                        <input type="number" required onChange={(e) => {
                                            setPhoneVerified(false)
                                            setAlertPhoneCode(100);
                                            setPhone(e.target.value)}} value={phone} minLength={10} maxLength={10} min={50000000} name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="+91 xxxx xxxx" />
                                        {phone.length>0 && <div className="flex justify-between">
                                            {!phoneVerified && phone.length > 9 && <button type="button" onClick={() => handlePhoneVerification()} className="w-fit bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Cheak availablity</button>}
                                            <p className={`block mb-2  text-sm font-medium text-gray-900 ${alertPhoneCode === 200 && "text-green-500"} ${alertPhoneCode === 300 && "text-yellow-500"} ${alertPhoneCode === 400 && "text-red-500"} `}>{Message[alertPhoneCode]} </p>
                                        </div>}
                                    </div>
                                    {/* <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " ="" />
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " ="" />
                                    </div> */}
                                    {/* <div class="flex items-center justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " ="" />
                                            </div>
                                            <div class="ml-3 text-sm">
                                                <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div> */}
                                    <div className="flex justify-between ">
                                        <button disabled class="w-1/3 bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Back</button>
                                        <button type="submit" class="w-1/3 bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Next</button>
                                    </div>
                                </form>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register;