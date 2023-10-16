import React from "react"
export default function JoinCard({ Data }) {
    return (
        <div className="shadow-md md:w-[30%] mx-1 my-4 rounded-xl px-3 md:px-6 py-5  bg-white">
            {Data.Num == 1 && <div className="relative pl-1 py-1 font-medium md:top-[-10px] md:left-[-10px]  w-10 h-10 bg-[linear-gradient(95.64deg,_#0076CE_0%,_#9400D3_100%);] -m-6 rounded text-white"> {Data.Num}<sup>st</sup></div>}
            {Data.Num == 2 && <div className="relative pl-1 py-1 font-medium md:top-[-10px] md:left-[-10px]  w-10 h-10 bg-[linear-gradient(95.64deg,_#0076CE_0%,_#9400D3_100%);] -m-6 rounded text-white">  {Data.Num}<sup>nd</sup></div>}
            {Data.Num == 3 && <div className="relative pl-1 py-1 font-medium md:top-[-10px] md:left-[-10px]  w-10 h-10 bg-[linear-gradient(95.64deg,_#0076CE_0%,_#9400D3_100%);] -m-6 rounded text-white"> {Data.Num}<sup>rd</sup></div>}
            {Data.Num >= 4 && <div className="relative pl-1 py-1 font-medium md:top-[-10px] md:left-[-10px]  w-10 h-10 bg-[linear-gradient(95.64deg,_#0076CE_0%,_#9400D3_100%);] -m-6 rounded text-white"> {Data.Num}<sup>th</sup></div>}
            <h1 className="w-full font-bold md:text-xl text-sm text-center "
            >{Data.MainHead}</h1>
            <p className="max-w-full md:text-sm text-xs text-center mt-3 mb-5">{Data.SubText}</p>
            <div className="bg-[#F4F4F4] space-x-1 rounded-lg m-2 mt-6 mb-1 py-4 p-2 flex">
                <div className="w-1/2 pr-14 pl-2">
                    <p className="md:text-base text-sm  text-[#0076CE] py-2 font-bold">Due Date</p>
                    <p className="md:text-base text-xs"> {Data.Due}</p>
                </div>
                <div className="w-1/2">
                    <p className="md:text-base text-sm py-2 text-[#FF6666] font-bold">Penality fees</p>
                    <p className="md:text-base text-xs">{Data.Penality}</p>

                </div>
            </div>
        </div>
    )
}