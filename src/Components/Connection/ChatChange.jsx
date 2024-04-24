import React from "react";

const ChatChange = () => {
    return (
        <div className="bg-white md:m-2 m-1 md:w-1/4 w-2/6 p-2 rounded-xl">

            <form className="w-full">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-gray-900 border border-gray-300 text-xs md:text-sm rounded-lg bg-gray-50  " placeholder="Search chat" required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs  md:text-sm md:px-4 md:py-2 py-1 px-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <div className="divide-y mt-1">
                <div className="md:mt-4 md:pt-2 flex  items-center mb-4  border-slate-100 pb-2 ">
                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="md:w-10  md:h-10 w-6 h-6 rounded-full mr-4" />
                    <div>
                    <p className="md:text-lg text-sm line-clamp-1  font-medium">Anderson Vanhorn</p>
                    <p className="md:text-sm text-xs line-clamp-1 text-slate-600">Web Development</p>
                    </div>
                </div>
                <div className="md:mt-4 md:pt-2 flex  items-center mb-4  border-slate-100 pb-2 ">
                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="md:w-10  md:h-10 w-6 h-6 rounded-full mr-4" />
                    <div>
                    <p className="md:text-lg text-sm clip  font-medium">Anderson Vanhorn</p>
                    <p className="md:text-sm text-xs text-slate-600">Web Development</p>
                    </div>
                </div>
                <div className="md:mt-4 md:pt-2 flex  items-center mb-4  border-slate-100 pb-2 ">
                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="md:w-10  md:h-10 w-6 h-6 rounded-full mr-4" />
                    <div>
                    <p className="md:text-lg text-sm   font-medium">Anderson Vanhorn</p>
                    <p className="md:text-sm text-xs text-slate-600">Web Development</p>
                    </div>
                </div>
               
                
            </div>
        </div>
    )
}

export default ChatChange;