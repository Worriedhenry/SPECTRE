import React, { useState } from "react";

const RequestedPropsalPage = () => {
    // Creat a function to add two numbers

    const [tags, setTags] = useState(new Set(["Fresher"]))

    /**
     * Function to add a tag to the set of tags if it doesn't already exist.
     *
     * @param {Object} e - the event object
     * @return {void} 
     */
    const addTags = (e) => {
        if (tags.has(e.target.value)) {
            console.log("Tag already exist")
        }
        else {
            const newTags = new Set([...tags, e.target.value])
            setTags(newTags)
        }
    }

    /**
     * Removes a tag from the set of tags.
     *
     * @param {any} e - The tag to be removed.
     * @return {void} 
     */
    const removeTags = (e) => {
        const newTags = new Set([...tags])
        newTags.delete(e)
        setTags(newTags)
    }

    const data={
        service:"Web Development",
        serviceProvider:"theDesignerz",
        brief:"Web development is the building and maintenance of websites; it's the job of a web developer to create, design, and maintain the look and functionality of a website. ",
        serviceTags:["Website","Design","PHP"],
        servicePrice:"25$",
        

    }


    return (
        <div className="space-y-5 py-4 px-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl w-full mb-6 bg-white hidden md:block">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)] leading-tight tracking-tight  text-center  md:text-3xl ">
                    Request Propsal
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div className="flex w-full space-x-3">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Service</label>
                            <input type="text" name="FirstName" disabled value={"Web Development"} id="FirstName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg cursor-not-allowed focus:ring-primary-600 focus:border-primary-600 block md:w-full p-2.5 " placeholder="Ankit" required="" />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Service Provider</label>
                            <input type="text" name="LastName" id="LastName" value={"Ankit"} disabled class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 cursor-not-allowed focus:border-primary-600 block w-full p-2.5 " placeholder="Sharma" required="" />
                        </div>
                    </div>
                    <div>
                        <label for="password" class="block pb-0 text-sm md:text-base font-medium text-gray-900 mb-0">Brief Description</label>
                        <p className="pt-0 mt-0 mb-2 text-xs text-slate-400"> Enter a breif description of what you need. </p>
                        <textarea type="text" name="about" id="password" placeholder="I would like to ...." class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                    </div>
                    <div className="flex w-full space-x-3">
                        <div>
                            <label for="date" class="block mb-0 text-sm font-medium text-gray-900 ">Deadline</label>
                            <p className="pt-0 mt-0 mb-2 text-xs text-slate-400">Enter Expected Deadline for project completion </p>
                            <input type="date" name="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="+91 xxxxx xxxxx" required="" />
                        </div>

                    </div>
                    <div>
                        <label for="Live Link" class="block mb-0 text-xs md:text-sm font-medium text-gray-900 ">Enter Average Cost (optional)  </label>
                        <p className="pt-0 mt-0 mb-2 text-xs text-slate-400">Offer an different cost if you wish </p>
                        <div className='flex'>
                            <input type="number" name="email" id="Live Link" class="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  md:p-2.5 p-1 w-3/6 md:text-base text-xs" placeholder="Enter Amount" />
                            <select id="services" class="bg-gray-50 border border-gray-300 text-gray-900   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-1 text-xs md:text-base md:p-2.5 ">
                                <option selected>$</option>
                            </select>
                            <select id="services" class="bg-gray-50 border border-gray-300 text-gray-900   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/6 p-1 text-xs md:text-base md:p-2.5 ">
                                <option selected>Per Hour</option>
                                <option >Complete</option>
                                <option >Per Day</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="Live Link" class="block mb-0 text-xs md:text-sm font-medium text-gray-900 ">Enter Payment Method (optional)  </label>
                        <p className="pt-0 mt-0 mb-2 text-xs text-slate-400">Enter Payment Method  </p>
                        <div className='flex'>
                            <select id="services" class="bg-gray-50 border border-gray-300 text-gray-900   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/6 p-1 text-xs md:text-base md:p-2.5 ">
                                <option selected>Paypal</option>
                                <option >UPI</option>
                                <option >Direct Bank Transfer</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="countries" class="block pb-0 text-sm md:text-base font-medium text-gray-900 mb-0 ">Profile Tags</label>
                        <p className="pt-0 mt-0 mb-2 text-xs text-slate-400">Using Tags increase chances of getting the proposal accepted sooner. </p>
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
                    <div className="flex space-x-4">
                    <button onClick={() => navigate("/")} type="submit" class="w-1/2 bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]      focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Send Proposal</button>
                    <button onClick={() => navigate("/")} type="submit" class="w-1/2 border-2 border-[#0076CE]       bg-primary-600 text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)] font-medium     focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RequestedPropsalPage;