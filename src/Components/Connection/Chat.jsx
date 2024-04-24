import React from "react";
import { CiCircleInfo } from "react-icons/ci";

const ChatComponent = () => {

    return (
        <div className="flex-1 p-2 sm:pl-6  justify-between flex flex-col h-full bg-white md:m-2 m-1 rounded-xl">
            <div className="flex align-top flex-col md:h-5/6">
                <div className="flex sm:items-center justify-between py-3 border-b-2 pr-2 border-gray-200">
                    <div className="relative flex items-center space-x-4">
                        <div className="relative">
                            {/* <span className="absolute text-green-500 right-0 bottom-0">
                                <svg width="20" height="20">
                                    <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                                </svg>
                            </span> */}
                            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="w-8 md:w-12 h-8 md:h-12 rounded-full" />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <div className="text-xl mt-1 flex items-center">
                                <span className="text-gray-700 mr-3 text-sm md:text-xl font-medium">Anderson Vanhron</span>
                            </div>
                            <span className=" text-slate-400 text-xs  font-medium">Junior Developer</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button type="button" className="inline-flex items-center justify-center rounded-lg border md:h-10 md:w-10 w-6 h-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="md:h-6 md:w-6 h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                        <button type="button" className="inline-flex items-center justify-center rounded-lg border md:h-10 md:w-10 w-6 h-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="md:h-6 md:w-6 h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </button>
                        <button type="button" className="inline-flex items-center justify-center rounded-lg border md:h-10 md:w-10 w-6 h-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="md:h-6 md:w-6 h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="messages" className="flex flex-col align-top space-y-4 p-3   scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch md:space-x-10 overflow-x-hidden overflow-y-scroll hide-scroll-bar pb-6">
                    <div className=" flex items-center bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]  rounded-lg text-white px-2 py-2 m-auto text-xs md:text-xs font-medium w-fit">
                       <CiCircleInfo/> All message are end to end Encrypted
                    </div>
 
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#9400D3] text-white ">yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem</span></div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-2" />
                        </div>
                  
                    
                        <div className="flex items-end">
                            <div className="flex flex-col  space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                <div><span className="px-4 py-2 text-white  rounded-lg inline-block bg-[#0076CE] ">I get the same error on Arch Linux (also with sudo)</span></div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-1" />
                        </div>

                    
                </div>
            </div>
            <div className="border-t-2 border-gray-200 sticky bottom-3  px-4 pt-4 mb-2 sm:mb-0">
                <div className="relative flex">
                    <span className="absolute inset-y-0 flex items-center">
                        <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="md:h-6 md:w-6 h-4 w-4 text-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                            </svg>
                        </button>
                    </span>
                    <input type="text" placeholder="Write your message!" className="w-full focus:outline-none text-xs focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3" />
                    <div className="absolute right-0 items-center inset-y-0 flex">
                        <button type="button" className="inline-flex items-center justify-center rounded-full md:h-10 md:w-10 w-6 h-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="md:h-6 md:w-6 h-3 w-3 text-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                            </svg>
                        </button>
                        <button type="button" className="inline-flex items-center justify-center rounded-full md:h-10 md:w-10 w-6 h-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="md:h-6 md:w-6 h-3 w-3 text-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </button>
                        <button type="button" className="inline-flex items-center justify-center rounded-full md:h-10 md:w-10 w-6 h-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="md:h-6 md:w-6 h-3 w-3 text-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </button>
                        <button type="button" className="inline-flex bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] items-center justify-center rounded-lg md:px-4 px-2 py-3 transition text-xs duration-500 ease-in-out text-white  hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] focus:outline-none">
                            <span className="font-bold">Send</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="md:h-6 md:w-6 h-3 w-3 ml-2 transform rotate-90">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ChatComponent;