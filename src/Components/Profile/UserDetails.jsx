import React, { useState, useEffect } from "react";
import { FaMessage } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import WorkHistory from "./WorkHistory";
import { MdDesignServices } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import Contact from "./Contact";
import { MdWatchLater } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import DetailedAbout from "./DetailedAbout";
import RequestedProposal from "./RequestedPropsals";
import { useSelector, useDispatch } from 'react-redux';
import { useParams,useNavigate } from "react-router-dom"
import UserServices from "./userServices";

export default function UserDetails({ data }) {

    const [activeTab, setActiveTab] = useState(1);
    const params = useParams();
    const userParamId = params.userId;
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const { userId } = useSelector((state) => state.auth);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    //  const data={user:{
    //     userName:"Ankit Sharma",
    //     _id:"123",
    //     email:"j6HcH@example.com",
    //     joined:"2022",
    //     profileTags:["Fresher","Web Developer","Full Stack Developer", "MERN"],
    //     services:["UI/UX","Frontend Development","Data analysis","Design"],
    //     usp:["IITian","punctual","24/7 support"],
    //     location:["301 Vikas Nagar","mumbai","India"],
    //    Ranking:8.6,}

    // } 


    return (
        <div className="w-full p-6 bg-white md:w-3/4 rounded-xl ">
            <div className="flex w-full h-48">
                <div className="w-2/3">
                    <div className="flex w-fit bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-transparent bg-clip-text items-end pb-0 mb-0 space-x-2 text-2xl font-medium">{data?.user?.username} </div>
                    <p className="flex mt-0 text-sm font-medium text-left text-green-600 md:mb-6"><span className="flex items-center space-x-1 text-sm text-slate-500 ">{data.user?.fullname} . </span> Open for work</p>

                    <p className="text-xs font-medium text-slate-600">RANKINGS</p>
                    <p className="flex items-center mb-10 space-x-2"><FaStar className="text-[#0076CE] " />  {data?.user?.avgRating}/10</p>
                    {data?.user?._id != userId && <div className="flex items-center space-x-5">
                        <p className="flex items-center space-x-2"><FaMessage /><span>Send Message</span></p>
                        <p className="text-sm text-slate-600">Report User</p>
                    </div>}
                    {data?.user?._id == userId && <div className="flex items-center space-x-5">
                       <button onClick={()=>navigate("/modify/profile")} className=" text-sm font-medium bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] text-white py-1 px-2 rounded-md">Edit Profile</button>
                       <button onClick={()=>navigate("/service/edit/?create=true")} className="text-sm font-medium bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] text-white py-1 px-2 rounded-md">Create service</button>
                    </div>}
                </div>
                <div className="p-2 md:hidden h-5/6">
                    <img className="w-auto h-full" alt="profile pic" src={data.user?.profilePic || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
                </div>
            </div>

            <ul className="flex border-b-2  border-[#0076CE]  ">
                <li
                    onClick={() => handleTabClick(1)}
                    className={`cursor-pointer w-full md:w-[18.5%]  text-sm md:text-base font-medium hover:border-b hover:border-[#9400D3] parent group py-2 px-4 ${activeTab === 1 ? 'border-b border-blue-500 text-black ' : ''}  p-4 rounded-t-lg  hover:bg-gray-50 flex  items-center space-x-3 `}
                >
                    <IoPerson className="hidden group-hover:animate-bounce md:block " /> <span className={` ${activeTab === 1 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : ''}   `} >About</span>
                </li>
                <li
                    onClick={() => handleTabClick(2)}
                    className={`cursor-pointer w-full md:w-[18.5%] text-sm md:text-base font-medium parent hover:border-b hover:border-[#9400D3] group py-2 px-4 ${activeTab === 2 ? 'border-b border-blue-500 text-black' : ''}  p-4 rounded-t-lg  hover:bg-gray-50 flex items-center space-x-3 `}
                >
                    <FaPhoneAlt className="hidden group-hover:animate-bounce md:block" /> <span className={` ${activeTab === 2 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]  font-bold' : ''}   `} >Contact</span>
                </li>
                <li
                    onClick={() => handleTabClick(3)}
                    className={`cursor-pointer w-full md:w-[30.5%]  text-sm md:text-base font-medium parent hover:border-b hover:border-[#9400D3] group py-2 px-4 ${activeTab === 3 ? 'border-b border-blue-500 text-black' : ''}  flex items-center space-x-3 p-4 rounded-t-lg  hover:bg-gray-50 `}
                >
                    <IoIosDocument className="hidden group-hover:animate-bounce md:block" /> <span className={` ${activeTab === 3 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : ''}   `} ><span className="hidden md:inline">Requested</span> Proposals  </span>
                </li>
                <li
                    onClick={() => handleTabClick(4)}
                    className={`cursor-pointer  w-full md:w-[18.5%] text-sm md:text-base font-medium parent hover:border-b hover:border-[#9400D3] group py-2 px-4 ${activeTab === 4 ? 'border-b border-blue-500 text-black' : ''}  p-4 rounded-t-lg  hover:bg-gray-50 flex items-center space-x-1 `}
                >
                    <MdDesignServices className="hidden group-hover:animate-bounce md:block" /><span className={` ${activeTab === 4 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : ''}   `} > Services</span>
                </li>
                <li
                    onClick={() => handleTabClick(5)}
                    className={`cursor-pointer w-full md:w-[25%] text-sm md:text-base font-medium parent hover:border-b hover:border-[#9400D3] group py-2 px-4 ${activeTab === 5 ? 'border-b border-blue-500 text-black' : ''}  p-4 rounded-t-lg  hover:bg-gray-50 flex items-center space-x-1 `}
                >
                    <MdWatchLater className="hidden group-hover:animate-bounce md:block" /><span className={` ${activeTab === 5 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : ''}   `} > <span className="hidden md:inline" >Work</span>  History</span>
                </li>
            </ul>
            <div className="h-full p-4 overflow-x-hidden ">

                {activeTab === 2 && <Contact />}
                {activeTab === 1 && <DetailedAbout data={data} />}
                {activeTab === 3 && <p>
                    <RequestedProposal />
                </p>}
                {activeTab === 4 && <UserServices userId={data?.user._id} username={data?.user.username} profilePic={data?.user.profilePic} location={data?.user.location} />}
                {activeTab === 5 && <WorkHistory />}
            </div>


        </div>
    )
}
