import React, { useState } from "react";

const RegisterProfileTags = ({ setActiveTabs, tags, setTags ,handleRegister,alertMessage }) => {

    const Message={
        100:"Almost There",
        300:"Registering...",
        200:"Registered Successfully",
        400:"Failed to Register"
    }
    
    // Instead of using set use useState
    const addTags = (e) => {
        if (tags.has(e.target.value)) {
            console.log("Tag already exists")
            return
        }
        else {
            const newTags = new Set([...tags, e.target.value]);
            setTags(newTags);
        }
    }
    const removeTags=(e)=>{
        const newTags = new Set([...tags]);
        newTags.delete(e);
        setTags(newTags);
        console.log(tags,newTags)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleRegister()    
    }
    return (
        <div>
            <section className="bg-gray-50 ">
                <div className="flex flex-col items-center justify-center px-3 py-1 mx-auto md:h-screen ">
                    <div className="w-full bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="w-full m-2 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)] leading-tight tracking-tight  text-center  md:text-3xl ">
                                    Almost There
                                </h1>
                                <form onSubmit={(e)=>handleFormSubmit(e)} className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 md:text-base ">Profile Tags</label>
                                        
                                        <select id="countries" onChange={(e) => addTags(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                            <option selected value="Web Development">Web Development</option>
                                            <option value="Fresher">Fresher</option>
                                            <option value="Flexible">Flexible</option>
                                            <option value="Strict Routine" >Strict Routine</option>
                                            <option value="Newbie" >Newbie</option>
                                        </select>
                                        <div className="flex flex-wrap w-full align-top max-h-32 bg-slate-100">
                                            {tags && Array.from(tags).map((tag) => <div className="h-fit">
                                                <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] rounded  text-white m-1">
                                                    {tag}
                                                    <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" data-dismiss-target="#badge-dismiss-default" onClick={() => removeTags(tag)} aria-label="Remove" >
                                                        <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </div>
                                            )}
                                        </div>
                                    </div>


                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                            </div>
                                        </div>
                                        <p  className={`${alertMessage===400 && "text-red-500"} ${alertMessage===300 && "text-yellow-500"} text-sm font-medium text-primary-600 hover:underline dark:text-primary-500`}>{Message[alertMessage]}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <button type="submit" onClick={() => setActiveTabs(4)} className="w-1/3 bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Back</button>
                                        <button type="submit" className="w-1/3 bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                                    </div>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">

                                        Don’t have an account yet? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
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
export default RegisterProfileTags;