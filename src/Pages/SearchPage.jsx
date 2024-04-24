import React from "react";
import Header from "../Components/Header";
import { CiSearch } from "react-icons/ci";
import Footer from "../Components/Footer";
import ServiceSummary from "../Components/Search/SearchCard";
import Filters from "../Components/Search/Filters";


const SearchPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-100">
            <Header />
            {/* <div className="flex flex-grow w-full p-5 bg-black " > */}
            <div className=" w-full bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  py-5 flex" >
                <div class=" mx-auto rounded-lg w-full overflow-hidden ">
                    <div class="md:flex md:w-full">
                        <div class=" w-3/4 mx-auto">
                            <form className="flex w-full">
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                                <div class="flex relative left-7 items-center  pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" class="block md:p-4 p-2 md:pl-10 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." required />
                                <button type="submit" class="text-white  relative right-16 my-1  md:right-20  bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:px-4 md:py-2 px-2 ">Search</button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full pt-5 m-0 min-h-fit md:mb-5 md:space-x-7 md:pl-11 ">
                <div className="hidden min-h-full p-2 bg-white shadow-xl md:w-1/6 rounded-2xl min-h-48 ">
                    <Filters/>

                </div>
                <div className="w-5/6 pb-6 m-0 bg-white shadow-xl md:w-4/6 md:h-full rounded-2xl ">
                    <div className="p-3">
                        <h2 className="font-medium md:text-lg">
                            Top Results
                        </h2>
                        <p className="text-slate-500">
                            Showing 1-20 of 6155 results
                        </p>
                    </div>
                    <div className="h-[70vh] overflow-y-scroll hide-scroll-bar snap-y snap-mandatory">
                        <ServiceSummary />
                        <ServiceSummary />
                        <ServiceSummary />
                        <ServiceSummary />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SearchPage;