import React from "react"
export default function JoinCard({ Data }) {
    return (
        <div className="shadow-md md:w-[32%] w-full  rounded-xl px-3 md:px-6 py-5  bg-white">
            {Data.Num == 1 && <div className=" pl-1 py-1 text-xs md:text-md font-medium md:top-[-10px] md:left-[-10px] w-6 h-6 md:w-10 md:h-10 bg-[linear-gradient(95.64deg,_#0076CE_0%,_#9400D3_100%);] -m-6 rounded text-white"> {Data.Num}<sup>st</sup></div>}
            {Data.Num == 2 && <div className="pl-1 py-1 text-xs md:text-md font-medium md:top-[-10px] md:left-[-10px] w-6 h-6 md:w-10 md:h-10 bg-[linear-gradient(95.64deg,_#0076CE_0%,_#9400D3_100%);] -m-6 rounded text-white">  {Data.Num}<sup>nd</sup></div>}
            {Data.Num == 3 && <div className="pl-1 py-1 text-xs md:text-md font-medium md:top-[-10px] md:left-[-10px] w-6 h-6 md:w-10 md:h-10 bg-[linear-gradient(95.64deg,_#0076CE_0%,_#9400D3_100%);] -m-6 rounded text-white"> {Data.Num}<sup>rd</sup></div>}
            {Data.Num >= 4 && <div className="pl-1 py-1 text-xs md:text-md font-medium md:top-[-10px] md:left-[-10px] w-6 h-6 md:w-10 md:h-10 bg-[linear-gradient(95.64deg,_#0076CE_0%,_#9400D3_100%);] -m-6 rounded text-white"> {Data.Num}<sup>th</sup></div>}
            <h1 className="w-full text-sm font-bold text-center md:text-xl p-2 "
            >{Data.MainHead}</h1>
            <p className="max-w-full mt-3 mb-5 text-xs text-center md:text-sm">{Data.SubText}</p>
            <div className="bg-[#F4F4F4] space-x-1 rounded-lg m-2 mt-6 mb-1 py-4 p-2 flex">
                <div className="w-1/2 pl-2 pr-14">
                    <p className="md:text-base text-sm  text-[#0076CE] py-2 font-bold">Due Date</p>
                    <p className="text-xs md:text-base"> {Data.Due}</p>
                </div>
                <div className="w-1/2">
                    <p className="md:text-base text-sm py-2 text-[#FF6666] font-bold">Penality fees</p>
                    <p className="text-xs md:text-base">{Data.Penality}</p>

                </div>
            </div>
        </div>
    )
}