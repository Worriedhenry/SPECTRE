import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import TagsModify from "./Modifiable/TagsModify";
import AboutModifiation from "./Modifiable/AboutModification";
import ContactModify from "./Modifiable/ContactModify";
import BasicModification from "./Modifiable/BasicModification";
import ProfilePicModifications from "./Modifiable/ProfilePicModifications";
export default function ModedUserDetails() {

    const [activeTab, setActiveTab] = useState(6);
    
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    return (
        <div className="flex w-5/6 p-1 bg-white md:w-2/3 md:flex-col md:p-6 rounded-xl ">
            

            <ul className="flex flex-col w-1/5 border-b-2 border-[#0076CE] md:w-full md:flex-row">
                <li
                    onClick={() => handleTabClick(6)}
                    className={`cursor-pointer  parent group font-medium py-2 text-left md:px-4 ${activeTab === 6 ? 'border-b-2 border-blue-500 text-black ' : 'text-slate-700'}   justify-start rounded-t-lg hover:text-gray-600 hover:bg-gray-50 flex  items-center space-x-3 `}
                >
                    <FaPen className="hidden md:block group-hover:animate-bounce"   /> <span className={`font-medium  text-left text-sm md:text-base ${activeTab === 6 ? 'text-transparent bg-clip-text   bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : 'text-slate-700 '}   `} >Basic Info</span>
                </li>
                <li
                    onClick={() => handleTabClick(1)}
                    className={`cursor-pointer parent group font-medium py-2 md:px-4 ${activeTab === 1 ? 'border-b-2 border-blue-500 text-black ' : 'text-slate-700'}   rounded-t-lg hover:text-gray-600 hover:bg-gray-50 flex  items-center space-x-3 `}
                >
                    <IoPerson  className="hidden md:block group-hover:animate-bounce"  /> <span className={`font-medium text-sm md:text-base  ${activeTab === 1 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : 'text-slate-700'}   `} >About</span>
                </li>
                <li
                    onClick={() => handleTabClick(2)}
                    className={`cursor-pointer parent group font-medium py-2 md:px-4 ${activeTab === 2 ? 'border-b-2 border-blue-500 text-black' : 'text-slate-700'}  rounded-t-lg hover:text-gray-600 hover:bg-gray-50 flex items-center space-x-3 `}
                >
                    <FaPhoneAlt className="hidden md:block group-hover:animate-bounce" /> <span className={`font-medium  text-sm md:text-base ${activeTab === 2 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]  font-bold' : 'text-slate-700'}   `} >Contact</span> 
                </li>
                <li
                    onClick={() => handleTabClick(4)}
                    className={`cursor-pointer parent group  font-medium py-2 text-left md:px-4 ${activeTab === 4 ? 'border-b-2 border-blue-500 text-black ' : 'text-slate-700'}   justify-start rounded-t-lg hover:text-gray-600 hover:bg-gray-50 flex  items-center space-x-3 `}
                >
                    <MdDesignServices className="hidden md:block group-hover:animate-bounce"  /><span className={`font-medium  text-sm md:text-base ${activeTab === 4 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : 'text-slate-700'}   `} > Profile Pic</span>
                </li>
                <li
                    onClick={() => handleTabClick(5)}
                    className={`cursor-pointer parent group font-medium py-2 text-left md:px-4 ${activeTab === 5 ? 'border-b-2 border-blue-500 text-black ' : 'text-slate-700'}   justify-start rounded-t-lg hover:text-gray-600 hover:bg-gray-50 flex  items-center space-x-3 `}
                >
                    <MdDesignServices className="hidden md:block group-hover:animate-bounce"  /><span className={`font-medium  text-sm md:text-base ${activeTab === 5 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : 'text-slate-700'}   `} > Tags</span>
                </li>

            </ul>
            <div className="w-4/5 p-4 md:w-full ">

                {activeTab === 2 && <ContactModify />}
                {activeTab === 1 && <AboutModifiation />}
                {activeTab === 3 && <p>Content for Tab 3</p>}
                {activeTab === 4 && <ProfilePicModifications/> }
                {activeTab === 5 && <TagsModify />}
                {activeTab === 6 && <BasicModification />}
            </div>


        </div>
    )
}
