import React, { useState } from "react";
import Header from "../Header";
const RegisterFour = ({ setActiveTabs, password, setPassword }) => {

    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            return
        }
        setActiveTabs(5)
    }


    return (
        <div>
            <section class="bg-gray-50   ">
                <div class="flex flex-col   items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div class="w-full bg-white m-2 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)] leading-tight tracking-tight  text-center  md:text-3xl ">
                                    Just few more steps
                                </h1>
                                <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit} action="#">
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                        <input required type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="*******" />
                                    </div>
                                    <div class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 " role="alert">
                                        <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                        </svg>
                                        <span class="sr-only">Info</span>
                                        <div>
                                            <span class="font-medium">Ensure that these requirements are met:</span>
                                            <ul class="mt-1.5 list-disc list-inside">
                                                <li className={`${password.length < 10 ? "text-red-500" : "text-green-500"}`}>At least 10 characters (and up to 100 characters)</li>
                                                <li className={`${!/[A-Z]/.test(password) ? "text-red-500" : "text-green-500"}`} >At least 1 Upper case character</li>
                                                <li className={`${!/[a-z]/.test(password) ? "text-red-500" : "text-green-500"}`}>At least one lowercase character</li>
                                                <li className={`${!/[!@#$%^&*]/.test(password) ? "text-red-500" : "text-green-500"}`} >Inclusion of at least one special character, e.g., ! @ # ?</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="confirmPassword" className={`block mb-2 text-sm font-medium ${confirmPassword.length && confirmPassword !== password ? "text-red-500" : ""} `}>{confirmPassword.length && confirmPassword !== password ? "Confirm Password does not match" : "Confirm Password"}</label>
                                        <input required type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="confirmPassword" placeholder="******" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                    </div>

                                    <div className="flex justify-between">
                                        <button onClick={() => setActiveTabs(3)} class="w-1/3 bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Back</button>
                                        <button type="submit" class="w-1/3 bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Next</button>
                                    </div>
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">

                                        Don’t have an account yet? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
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

export default RegisterFour;