import React, { useState, useEffect } from "react";
import { FaMessage } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import WorkHistory from "./WorkHistory";
import { MdDesignServices } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import Contact from "./Contact";
import { MdWatchLater } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import DetailedAbout from "./DetailedAbout";
import RequestedProposal from "./RequestedPropsals";
import EditorsTab from "./editorsTab";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { IoAccessibility } from "react-icons/io5";
import { FiAnchor } from "react-icons/fi";
import UserServices from "./userServices";
import axios from "axios";
import BannedUserTab from "./bannedUser";
import UnlistedServices from "./unlistedServices";

export default function UserDetails({ data }) {

    const [activeTab, setActiveTab] = useState(1);
    const params = useParams();
    const [searchParams] = useSearchParams();
    const userParamId = params.userId;
    const navigate = useNavigate()
    const { userId, role } = useSelector((state) => state.auth);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const banUser = async () => {
        if (data?.user?.role === "admin") {
            window.alert("Admin cannot be banned");
            return
        }
        const alert = window.confirm("Are you sure you want to ban this user?. It cannot be undone by an editor");
        if (alert) {
            const reasonOfBan = window.prompt("Enter reason for banning user");
            if (!reasonOfBan) {
                return;
            }
            const res = await axios.put(import.meta.env.VITE_BACKEND_GATEWAY + "/user" + "/user/banuser/" + data?.user?._id + "/" + userId, { reasonOfBan })
            if (res.status === 204) {
                window.alert('User is banned.')
                window.location.reload();

            }
        }
        return;
    }

    const removeBan = async () => {
        const alert = window.confirm("Are you sure you want to remove ban from this user?");
        if (alert) {
            const res = await axios.put(import.meta.env.VITE_BACKEND_GATEWAY + "/user" + "/user/removeban/" + data?.user?._id)
            if (res.status === 204) {
                window.alert('Ban is removed.')
                window.location.reload();
            }
        }
        return;
    }

    useEffect(() => {
        if (searchParams.get("tab") !== null && Number(searchParams.get("tab")) < 6) {
            if (userId != userParamId && (searchParams.get("tab") == 3 || searchParams.get("tab") == 5)) {
                setActiveTab(1)
            }
            else {
                setActiveTab(Number(searchParams.get("tab")))
            }

        }

    }, [])
    
    return (
        <div className="w-full p-6 bg-white md:w-3/4 rounded-xl ">
            <div className="flex w-full h-48">
                <div className="w-2/3">
                    <div className="flex w-fit bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-transparent bg-clip-text items-end pb-0 mb-0 space-x-2 text-2xl font-medium">{data?.user?.username} </div>
                    <p className="flex mt-0 text-sm font-medium text-left text-green-600 md:mb-6"><span className="flex items-center space-x-1 text-sm text-slate-500 ">{data.user?.fullname} . </span> {data?.user?.role}</p>

                    {!data?.user?.banned && <>
                        <p className="text-xs font-medium text-slate-600">RANKINGS</p>
                        <p className="flex items-center mb-10 space-x-2"><FaStar className="text-[#0076CE] " />  {data?.user?.avgRating}/10</p>
                    </>}

                    {data?.user?.banned && <div>
                        <div>User is banned</div>
                        {data?.user?.reasonOfban}
                    </div>}
                    {data?.user?.banned && role == "admin" && <button onClick={() => removeBan()} className="text-sm font-medium bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] text-white py-1 px-2 rounded-md">Remove Ban</button>}
                    {data?.user?._id != userId && !data?.user?.banned && <div className="flex items-center space-x-5">
                        <p className="flex items-center space-x-2"><FaMessage /><span>Send Message</span></p>
                        <p className="text-sm text-slate-600">Report User</p>
                        {role != "user" && <button onClick={() => banUser()} className="text-sm font-medium bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] text-white py-1 px-2 rounded-md">Ban User</button>}
                    </div>}
                    {data?.user?._id == userId && !data?.user?.banned && <div className="flex items-center space-x-5">
                        <button onClick={() => navigate("/modify/profile")} className=" text-sm font-medium bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] text-white py-1 px-2 rounded-md">Edit Profile</button>
                        {role == "user" && <button onClick={() => navigate("/modify/service/?create=true")} className="text-sm font-medium bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] text-white py-1 px-2 rounded-md">Create service</button>}

                    </div>}
                </div>
                <div className="p-2 md:hidden h-5/6">
                    <img className="w-auto h-full" alt="profile pic" src={data.user?.profilePic || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
                </div>
            </div>

            {(!data?.user?.banned || data?.user?._id == userId) && <ul className="flex border-b-2  border-[#0076CE]  ">
                <li
                    onClick={() => handleTabClick(1)}
                    className={`cursor-pointer w-full md:w-[18.5%]  text-sm md:text-base font-medium hover:border-b hover:border-[#9400D3] parent group py-2 px-2 ${activeTab === 1 ? 'border-b border-blue-500 text-black ' : ''}   rounded-t-lg  hover:bg-gray-50 flex  items-center space-x-3 `}
                >
                    <IoPerson className="hidden group-hover:animate-bounce md:block " /> <span className={` ${activeTab === 1 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : ''}   `} >About</span>
                </li>
                <li
                    onClick={() => handleTabClick(2)}
                    className={`cursor-pointer w-full md:w-[18.5%] text-sm md:text-base font-medium parent hover:border-b hover:border-[#9400D3] group py-2 px-2 ${activeTab === 2 ? 'border-b border-blue-500 text-black' : ''}   rounded-t-lg  hover:bg-gray-50 flex items-center space-x-3 `}
                >
                    <FaPhoneAlt className="hidden group-hover:animate-bounce md:block" /> <span className={` ${activeTab === 2 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]  font-bold' : ''}   `} >Contact</span>
                </li>
                {userId == userParamId && data?.user?.role=="user" && <li
                    onClick={() => handleTabClick(3)}
                    className={`cursor-pointer w-full md:w-[30.5%]  text-sm md:text-base font-medium parent hover:border-b hover:border-[#9400D3] group py-2 px-4 ${activeTab === 3 ? 'border-b border-blue-500 text-black' : ''}  flex items-center space-x-3 p-4 rounded-t-lg  hover:bg-gray-50 `}
                >
                    <IoIosDocument className="hidden group-hover:animate-bounce md:block" /> <span className={` ${activeTab === 3 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : ''}   `} ><span className="hidden md:inline">Requested</span> Proposals  </span>
                </li>}
                {data?.user?.role == "user" && <li
                    onClick={() => handleTabClick(4)}
                    className={`cursor-pointer  w-full md:w-[18.5%] text-sm md:text-base font-medium parent hover:border-b hover:border-[#9400D3] group py-2 px-2 ${activeTab === 4 ? 'border-b border-blue-500 text-black' : ''}   rounded-t-lg  hover:bg-gray-50 flex items-center space-x-1 `}
                >
                    <MdDesignServices className="hidden group-hover:animate-bounce md:block" /><span className={` ${activeTab === 4 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : ''}   `} > Services</span>
                </li>}
                {userId == userParamId && data?.user?.role == "user" && <li
                    onClick={() => handleTabClick(5)}
                    className={`cursor-pointer w-full md:w-[25%] text-sm md:text-base font-medium parent hover:border-b hover:border-[#9400D3] group py-2 px-2 ${activeTab === 5 ? 'border-b border-blue-500 text-black' : ''}   rounded-t-lg  hover:bg-gray-50 flex items-center space-x-1 `}
                >
                    <MdWatchLater className="hidden group-hover:animate-bounce md:block" /><span className={` ${activeTab === 5 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : ''}   `} > <span className="hidden md:inline" ></span>  Archives</span>
                </li>}
                {userId == userParamId && data?.user?.role != "user" && <li
                    onClick={() => handleTabClick(6)}
                    className={`cursor-pointer w-full md:w-[25%] text-sm md:text-base font-medium parent hover:border-b hover:border-[#9400D3] group py-2 px-2 ${activeTab === 6 ? 'border-b border-blue-500 text-black' : ''}   rounded-t-lg  hover:bg-gray-50 flex items-center space-x-1 `}
                >
                    <FiEdit3 className="hidden group-hover:animate-bounce md:block" /><span className={` ${activeTab === 6 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : ''}   `} > <span className="hidden md:inline" ></span>  Editors</span>
                </li>}
                {userId == userParamId && data?.user?.role != "user" && <li
                    onClick={() => handleTabClick(7)}
                    className={`cursor-pointer w-full md:w-[25%] text-sm md:text-base font-medium parent hover:border-b hover:border-[#9400D3] group py-2 px-2 ${activeTab === 7 ? 'border-b border-blue-500 text-black' : ''}   rounded-t-lg  hover:bg-gray-50 flex items-center space-x-1 `}
                >
                    <IoAccessibility  className="hidden group-hover:animate-bounce md:block" /><span className={` ${activeTab === 7 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : ''}   `} > <span className="hidden md:inline" ></span> Banned users</span>
                </li>}
                {userId == userParamId && data?.user?.role != "user" && <li
                    onClick={() => handleTabClick(8)}
                    className={`cursor-pointer w-full md:w-[25%] text-sm md:text-base font-medium parent hover:border-b hover:border-[#9400D3] group py-2 px-2 ${activeTab === 8 ? 'border-b border-blue-500 text-black' : ''}   rounded-t-lg  hover:bg-gray-50 flex items-center space-x-1 `}
                >
                    <FiAnchor className="hidden group-hover:animate-bounce md:block" /><span className={` ${activeTab === 8 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : ''}   `} > <span className="hidden md:inline" ></span> Unlisted Services</span>
                </li>}
            </ul>}
            {(!data?.user?.banned || data?.user?._id == userId) && <div className="h-full p-4 overflow-x-hidden ">

                {activeTab === 2 && <Contact />}
                {activeTab === 1 && <DetailedAbout data={data} />}
                {activeTab === 3 && <p>
                    <RequestedProposal />
                </p>}
                {activeTab === 4 && <UserServices userId={data?.user._id} username={data?.user.username} profilePic={data?.user.profilePic} location={data?.user.location} />}
                {activeTab === 5 && <WorkHistory />}
                {activeTab===6 && <EditorsTab id={data?.user?._id} /> }
                {activeTab===7 && <BannedUserTab />}
                {activeTab===8 && <UnlistedServices />}
                
            </div>
            }

        </div>
    )
}
