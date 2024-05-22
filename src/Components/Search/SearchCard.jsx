import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const ServiceSummary = forwardRef(({data,location,profilePic,userId,username},ref) => {

    

    const navigate=useNavigate()

    return (
        <div ref={ref} className="flex w-full p-2 space-x-3 border-2 snap-start md:px-2 border-zinc-100 md:h-48 md:py-3 ">
            <div className="hidden w-1/5 h-full border-2 md:block md:max-w-xs ">
                <img className="w-full rounded-full h-full " src={profilePic?profilePic:"https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80"} />
            </div>
            <div className="md:w-2/3">
                <p>
                    <span onClick={() => navigate(`/service/${data._id}`)} className=" cursor-pointer text-sm font-medium md:text-lg bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent">{data.serviceName} </span>
                    <span className="text-sm  text-slate-500 md:text-base">@{username} </span>
                </p>
                <p className="text-xs md:text-base">
                    {data.rating || 0} 
                </p>
                <p className="text-xs md:text-base">
                    {location[2]},{location[3]}
                </p>
                <p className="text-sm font-medium md:text-base">{data.serviceTags.slice(0, 3).map((e) => <span >{e}. </span>)}</p>

                <p dangerouslySetInnerHTML={{ __html: data.serviceBrief }} className="text-overflow-{ellipsis|clip} text-xs line-clamp-2  md:line-clamp-3 md:text-sm">
             
                </p>
            </div>
            <div className="flex flex-col justify-between text-right">
                <div>
                    <p className="pr-0 text-xs font-bold text-right md:text-lg">{data.serviceCost} {data.serviceCostCurrency}</p>
                    <p className="text-xs text-right text-slate-500 md:text-sm">{data.serviceCostDuration}</p>
                </div>
                <button type="button" onClick={() => navigate("/service/" + data._id)} class="text-white bg-[#0076CE]   font-medium rounded-lg text-xs md:px-3 md:py-1.5 px-2 py-1 md:mr-2 mb-2 md:text-base ">View</button>
            </div>

        </div>

    )
})

export default ServiceSummary;