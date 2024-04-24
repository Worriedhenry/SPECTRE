import React, { useState } from "react";

const ExpandedTask = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    }
    const services = ['Website Development', 'UI/UX', 'Maintanence']
    const benefits = ['Website Development', 'UI/UX', 'Maintanence']
    const Data = {
        name: "Micheal Jackson",
        country: "India",
        joined: "2022",
        avgResponse: "30min",
        about: "I will do business evaluation and corporate services Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eaque non illo iste repellendus est. Doloremque corporis velit vero illo, cum, iusto esse non quo laboriosam quas, dolore explicabo id",
        services: ["Website Development", "UI/UX", "Maintanence"],
        benefits: ["Website Development", "UI/UX", "Maintanence"],
    }


    return (
        <div>
            <ul className="flex border-b-2  border-[#0076CE]  ">
                <li
                    onClick={() => handleTabClick(1)}
                    className={`cursor-pointer flex justify-center font-medium text-2xl w-full hover:border-b-2 hover:border-[#9400D3] parent group py-2 px-4 ${activeTab === 1 ? 'border-b-2 border-blue-500 text-black ' : ''}  p-4 rounded-t-lg  hover:bg-gray-50 flex  items-center space-x-3 `}
                >
                    <span className={`  ${'text-transparent bg-clip-text  bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold '}   `} >Web Development</span>
                </li>
            </ul>
            <div>
                {activeTab === 1 && <div className="space-y-4">

                    <div>
                        <div>
                            <table class='min-w-full text-center text-sm font-light'>
                                <thead class='font-medium'>
                                    <tr>
                                        <th
                                            scope='col'
                                            class=' md:py-4 py-1 text-left w-[1/3]   font-bold text-xs md:text-sm'
                                        >
                                            FROM
                                        </th>
                                        <th
                                            scope='col'
                                            class='py-1 text-left md:py-4  font-bold text-xs md:text-sm'
                                        >
                                            Your Pay
                                        </th>
                                        <th
                                            scope='col'
                                            class='py-1 text-left md:py-4  font-bold text-xs md:text-sm'
                                        >
                                            Offered Pay
                                        </th>
                                        <th
                                            scope='col'
                                            class='text-left py-1 md:py-4   font-bold text-xs md:text-sm'
                                        >
                                            Deadline
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class='whitespace-nowrap text-sm md:text-base text-slate-700 text-left py-2 font-medium w-1/4'>
                                            {Data.country}
                                        </td>
                                        <td class='whitespace-nowrap w-1/3 text-sm text-slate-700 md:text-base py-2 text-left font-medium'>
                                            30$ per hour
                                        </td>
                                        <td class='whitespace-nowrap w-1/3 text-sm text-slate-700 md:text-base py-2 text-left font-medium'>
                                            25$ per hour
                                            <p className="text-red-700 md:text-sm" >10% less</p>
                                        </td>
                                        <td class='whitespace-nowrap text-sm md:text-base text-slate-700  py-2 text-left font-medium'>
                                            {Data.avgResponse}
                                            <p className="text-green-700 md:text-sm" >Extendable</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='my-5 space-y-3'>
                            <p className='text-xs font-bold md:text-sm'>STATUS</p>
                            <p className='text-sm md:text-base text-slate-700 w-fit'>
                                <ol class="flex items-center w-full text-xs  md:text-sm font-medium text-center  text-gray-500 dark:text-gray-400 sm:text-base">
                                    <li class="flex md:w-full items-center sm:after:content-[''] after:w-24 after:h-1 text-blue-500  after:border-b-2 after:border-blue-500 after:border-1 after:hidden sm:after:inline-block after:mx-2   ">
                                        <div>
                                            <span class="flex items-center after:content-['>'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                </svg>
                                                <span className="bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent flex ">
                                                    <span class="hidden sm:inline-flex sm:me-2">Proposal </span> Requested</span>
                                            </span>
                                            <p>
                                                02/03/2022
                                            </p>
                                        </div>
                                    </li>
                                    <li class="flex md:w-full items-center   sm:after:content-[''] after:w-24 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 dark:after:border-gray-700">
                                        <span class="flex animate-pulse items-center after:content-['>'] sm:after:hidden after:animate-pulse after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                            <span class="me-2">2</span>
                                            <span class="hidden sm:inline-flex sm:me-2">Proposal</span> Accepted
                                        </span>
                                    </li>
                                    <li class="flex md:w-full items-center   sm:after:content-[''] after:w-24 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 dark:after:border-gray-700">
                                        <span class="flex items-center after:content-['>'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                            <span class="me-2">3</span>
                                            Submitted
                                        </span>
                                    </li>

                                    <li class="flex items-center">
                                        <span class="me-2">4</span>
                                        Closed
                                    </li>
                                </ol>
                            </p>
                        </div>
                        <div className='my-5 space-y-3'>
                            <p className='text-xs font-bold md:text-sm'>DESCRIPTION</p>
                            <p className='text-sm md:text-base text-slate-700'>
                                {Data.about}
                            </p>
                        </div>
                        <div className='my-5 space-y-3'>
                            <p className='text-xs font-bold md:text-sm'>TAGS</p>
                            <div>
                                <span title="Experience 0-1 year " id="badge-dismiss-default" class="cursor-pointer hover:bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                                    newBie
                                </span>
                                <span title="Experience more than 3 year" id="badge-dismiss-default" class=" hover:bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                                    Experinced
                                </span>
                                <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                                    Meets Deadline
                                </span>
                                <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                                    Hindi
                                </span>
                            </div>
                        </div>
                        <div className='my-5 space-y-3'>
                            <p className='text-xs font-bold md:text-sm'>ACTIONS</p>
                            <button title="Connect With client " type="button" class="text-[#0076CE]  bg-white hover:bg-[#0076CE] hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-[#0076CE] border-2">Chat</button>
                            <button title="Accept the task with tNc's" type="button" class="text-green-600  bg-white hover:bg-green-600 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-green-600 border-2">Accept</button>
                            <button title="Reject the task" type="button" class="text-red-600  bg-white hover:bg-red-600 hover:text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-red-600 border-2 ">Reject</button>
                            <button title="Close the task" type="button" class="text-red-600  bg-white hover:bg-red-600 hover:text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-red-600 border-2 ">Close</button>
                        </div>
                    </div>

                </div>}
                <div className='my-5 space-y-3'>
                            <p className='text-xs font-bold md:text-sm'>LOGS</p> 
                            <p className='text-sm md:text-base pl-5 text-slate-700'>
                                10/03/2024 10:00 AM - Proposal Requested
                                </p>
                        </div>
                {activeTab === 2 && "Content for Tab 2"}
            </div>
        </div>
    )
}

export default ExpandedTask;