import React from "react";

export default function (){
    return(
        <div className="flex px-2 items-center md:flex-row flex-col md:justify-between justify-center py-4 md:px-20">
            <div className="HeaderMenu flex items-center ">
                <ul className="flex space-x-4 justify-center items-center ">
                    <li>
                        <img className=" " src="/images/Header_Logo.png" />
                    </li>
                    <li className="flex cursor-pointer"><span className="font-bold text-xs md:text-base">Solutions</span><span><img src='/images/Down_arrow.png' /></span></li>
                    <li className="flex cursor-pointer"><span className="font-bold text-xs md:text-base">Features</span><span><img src='/images/Down_arrow.png' /></span></li>
                    <li className="flex cursor-pointer"><span className="font-bold text-xs md:text-base">Blogs</span><span><img src='/images/Down_arrow.png' /></span></li>
                    <li className="flex cursor-pointer"><span className="font-bold text-xs md:text-base">About</span><span><img src='/images/Down_arrow.png' /></span></li>
                </ul>
            </div>
            <div className="flex space-x-3">
            <button type="button" class="text-[#0076CE] bg-white hover:bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-2.5 md:mr-2 mb-2 border-[#0076CE] border-2">Login</button>
            <button type="button" class="text-white bg-[#0076CE]  font-medium rounded-lg text-xs md:px-5 md:py-2.5 px-2 py-1 md:mr-2 mb-2 md:text-base ">Register</button>
            </div>
        </div>
    )
}