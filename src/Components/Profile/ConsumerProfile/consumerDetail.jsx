import React, { useState } from "react";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import WorkHistory from "./WorkHistory";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import Contact from "./Contact";
import { MdWatchLater } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import DetailedAbout from "./DetailedAbout";
import ServiceSummary from "../Search/SearchCard";
export default function UserDetails() {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    return (
        <div className="w-3/4 bg-white p-6 rounded-xl ">
            <div className="w-full flex h-48">
                <div className="w-2/3">
                    <div className="text-2xl mb-0 pb-0 flex items-end space-x-2 font-medium">MicheaL Jackson </div>
                    <p className=" text-green-600 font-medium mt-0 md:mb-6 text-sm text-left flex"><span className="text-sm ml-2 space-x-1 items-center text-slate-500 flex "><FaLocationDot /> Mumbai ,India .</span> Open for work</p>

                    <p className="text-xs font-medium text-slate-600">RANKINGS</p>
                    <p className="flex items-center mb-10 space-x-2"><FaStar className="text-[#0076CE] " />  8.6/10</p>
                    <div className="flex space-x-5 items-center">
                        <p className="flex items-center space-x-2"><FaMessage /><span>Send Message</span></p>
                        <p className="text-sm text-slate-600">Report User</p>
                    </div>
                </div>
                <div className="">
                    {/* <img className="h-full" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" /> */}
                </div>
            </div>

            <ul className="flex border-b  border-gray-300">
                <li
                    onClick={() => handleTabClick(1)}
                    className={`cursor-pointer font-medium py-2 px-4 ${activeTab === 1 ? 'border-b-2 border-blue-500 text-black ' : 'text-slate-700'}  p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 flex  items-center space-x-3 `}
                >
                    <IoPerson /> <span className={` ${activeTab === 1 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : 'text-slate-700'}   `} >About</span>
                </li>
                <li
                    onClick={() => handleTabClick(2)}
                    className={`cursor-pointer font-medium py-2 px-4 ${activeTab === 2 ? 'border-b-2 border-blue-500 text-black' : 'text-slate-700'}  p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 flex items-center space-x-3 `}
                >
                    <FaPhoneAlt/> <span className={` ${activeTab === 2 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]  font-bold' : 'text-slate-700'}   `} >Contact</span> 
                </li>
                <li
                    onClick={() => handleTabClick(3)}
                    className={`cursor-pointer font-medium py-2 px-4 ${activeTab === 3 ? 'border-b-2 border-blue-500 text-black' : 'text-slate-700'}  flex items-center space-x-3 p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 `}
                >
                    <IoIosDocument /> <span className={` ${activeTab === 3 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : 'text-slate-700'}   `} >Requested Proposals</span> 
                </li>
                <li
                    onClick={() => handleTabClick(4)}
                    className={`cursor-pointer font-medium py-2 px-4 ${activeTab === 4 ? 'border-b-2 border-blue-500 text-black' : 'text-slate-700'}  p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 flex items-center space-x-1 `}
                >
                    <MdDesignServices /><span className={` ${activeTab === 4 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : 'text-slate-700'}   `} > Services</span>
                </li>
                <li
                    onClick={() => handleTabClick(5)}
                    className={`cursor-pointer font-medium py-2 px-4 ${activeTab === 5 ? 'border-b-2 border-blue-500 text-black' : 'text-slate-700'}  p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 flex items-center space-x-1 `}
                >
                    <MdWatchLater /><span className={` ${activeTab === 5 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : 'text-slate-700'}   `} > Work History</span>
                </li>
            </ul>
            <div className="p-4 ">

                {activeTab === 2 && <Contact />}
                {activeTab === 1 && <DetailedAbout />}
                {activeTab === 3 && <p>Content for Tab 3</p>}
                {activeTab === 4 && <div>
                    <ServiceSummary />
                    <ServiceSummary />
                    </div>}
                {activeTab === 5 && <WorkHistory />}
            </div>


        </div>
    )
}
