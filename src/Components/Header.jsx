import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegMessage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import {logout} from "../Reducers/authSlice"
import { useDispatch, useSelector } from "react-redux";
export default function () {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { profilePic, userToken ,userId} = useSelector((state) => state.auth);

    const handleLogout = () => {
        localStorage.removeItem("spectre-secret");
        sessionStorage.removeItem("spectre-secret");
        dispatch(logout());
        navigate("/");
    }
    
    return (
        <div className="sticky top-0 flex flex-row items-center justify-between px-2 py-4 bg-white md:px-20">
            <div className="flex items-center HeaderMenu ">
                <ul className="flex items-center justify-center space-x-2 md:space-x-4 ">
                    <li onClick={() => navigate("/")}>
                        <img className="w-24 max-w-full max-h-full cursor-pointer md:w-32 " src="/images/SPECTRE.webp" />
                    </li>
                    <li className="flex cursor-pointer"><span className="font-bold text-[0.6rem] md:text-base">Solutions</span><span><img className="w-4 md:w-auto" src='/images/Down_arrow.png' /></span></li>
                    <li className="flex cursor-pointer"><span className="text-[0.6rem] font-bold md:text-base">Features</span><span><img className="w-4 md:w-auto" src='/images/Down_arrow.png' /></span></li>
                    <li className="flex cursor-pointer"><span className="text-[0.6rem] font-bold md:text-base">Blogs</span><span><img className="w-4 md:w-auto" src='/images/Down_arrow.png' /></span></li>
                    <li className="flex cursor-pointer"><span className="text-[0.6rem] font-bold md:text-base">About</span><span><img className="w-4 md:w-auto" src='/images/Down_arrow.png' /></span></li>
                </ul>
            </div>
            <div className={`flex space-x-3 ${userToken ? "hidden" : "block"}`}>
                <button type="button" onClick={() => navigate("/login")} class="text-[#0076CE] bg-white hover:bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-2.5 md:mr-2 mb-2 border-[#0076CE] border-2">Login</button>
                <button type="button" onClick={() => navigate("/register")} class="text-white   hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] focus:outline-none bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]  font-medium rounded-lg text-xs md:px-5 md:py-2.5 px-2 py-1 md:mr-2 mb-2 md:text-base ">Register</button>
            </div>
            <div className={`flex space-x-3 ${userToken ? "block" : "hidden"}`} >
                <button title="Chats"  type="button" className=" h-fit md:h-auto relative inline-flex items-center md:p-3 p-2  hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] text-sm font-medium text-center text-white rounded-lg bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    <FaRegMessage className="md:h-5 md:w-5 w-2.5 h-2.5"/>
                    <span class="sr-only">Notifications</span>
                    <div class="absolute inline-flex items-center justify-center md:w-6 md:h-6 w-4 h-4 p-2 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 ">0</div>
                </button>
                <button title="Profile" onClick={() => navigate("/profile/"+userId)} className="relative inline-flex items-center h-fit md:h-auto ">
                    <img className="w-6 h-6 rounded-full md:h-10 md:w-10" src={profilePic} />
                </button>
                <button title="Log out" onClick={()=>handleLogout()} className=" h-fit md:h-auto relative inline-flex items-center md:p-3 p-2 text-sm  hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] font-medium text-center text-white rounded-lg bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    <CiLogout className="md:h-5 md:w-5 w-2.5 h-2.5" />
                </button>
            </div>
        </div>
    )
}