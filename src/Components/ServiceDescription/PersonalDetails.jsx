import React, { useState, useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa"
import { FaLink } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
export default function PersonalDetails({ data, setActiveTab }) {
    const navigate = useNavigate();
    const { userId, role } = useSelector((state) => state.auth)

    const brief = useRef(null)
    const readMore = useRef(null)

    useEffect(() => {
        if (brief.current?.scrollHeight > brief.current?.clientHeight) {
            readMore.current.style.display = "block"
        }
        else {
            readMore.current.style.display = "none"
        }

    }, [brief.current?.scrollHeight, brief.current?.clientHeight])


    const relistService = async () => {
        try {
            const confirm = window.confirm("Are you sure you want to relist this service?");
            if (confirm) {
                const res = await axios.put(import.meta.env.VITE_BACKEND_GATEWAY + "/services" + "/services/relist/" + data._id)
                if (res.status === 204) {
                    window.alert("Service relisted successfully");
                    window.location.reload();
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    const unlistService = async () => {
        try {
            const confirm = window.confirm("Are you sure you want to unlist this service?");
            if (confirm) {
                const reasonOfUnlisting = window.prompt("Enter reason for unlisting service");
                if (!reasonOfUnlisting) {
                    return
                }
                const res = await axios.put(import.meta.env.VITE_BACKEND_GATEWAY + "/services" + "/services/unlist/" + data._id + "/" + userId, { reasonOfUnlisting })
                if (res.status === 204) {
                    window.alert("Service unlisted successfully");
                    window.location.reload();
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className=" mb-5 space-y-3 max-h-fit px-6 py-4 w-2/3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white rounded-xl">
            <p className="my-3 text-2xl font-medium md:text-3xl bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent ">{data.serviceName} <span className="text-xl italic font-medium text-gray-600" >@{data.serviceProvider?.username}</span></p>
            <p ref={brief} dangerouslySetInnerHTML={{ __html: data.serviceBrief }} className="text-sm font-normal line-clamp-4 md:text-base"></p>
            <button ref={readMore} className="text-sm text-gray-500" onClick={() => setActiveTab(3)}>Read More...</button>
            <p className="flex items-center my-5 space-x-1 text-sm md:text-lg">
                <span>
                    <FaStar style={{ color: '#0076CE' }} className="bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent" />
                </span><span className="bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent  font-bold">{data.rating}</span>
                <span>({data.reviewCount})</span>
            </p>
            <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl bg-white md:px-6 md:py-4 py-2 px-4">
                <p className="flex justify-between font-medium text-md md:text-lg font-mediummt-3">
                    <span className="font-medium">{data.complexity}</span>
                    <span >{data.serviceCostCurrency} {data.serviceCost} USD</span>
                </p>
                <p className="flex items-center my-3 space-x-2 text-xs md:text-base">
                    <span><LuCalendarDays style={{ color: '#0076CE' }} /></span>
                    <span >{data.serviceDeadline}</span>
                </p>
                {userId != data.serviceProvider?._id && (!data?.serviceProvider?.banned && !data.unlist) && role == 'user' &&
                    <div className="mt-8 space-x-1 buttonGroup md:flex md:justify-center">
                        <button onClick={() => setActiveTab(2)} type="button" class="text-white bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]   font-medium rounded-lg text-xs md:px-5 md:py-2.5 px-2 py-1.5 md:mr-2 mb-2 md:text-base ">Request Proposal  </button>
                        <button type="button" onClick={() => navigate("/chats")} class="text-[#0076CE] bg-white font-medium rounded-lg text-xs md:px-5 md:py-2.5 px-2 py-1.5 md:mr-2 mb-2 md:text-md border-[#0076CE] border-2">Chat with me</button>
                    </div>}

                {(data?.serviceProvider?.banned || data.unlist) &&
                    <div className="font-medium md:flex md:justify-center">
                        Service Not available
                    </div>
                }

                {userId != data.serviceProvider?._id && role != "user" && data?.unlist &&
                    <div className="font-medium md:flex md:justify-center">
                        <button onClick={() => relistService()} type="button" class="text-white bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]   font-medium rounded-lg text-xs md:px-5 md:py-2.5 px-2 py-1.5 md:mr-2 mb-2 md:text-base ">Relist Service</button>
                    </div>
                }
                {userId != data.serviceProvider?._id && role != "user" && !data?.unlist &&
                    <div className="font-medium md:flex md:justify-center">
                        <button onClick={() => unlistService()} type="button" class="text-white bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]   font-medium rounded-lg text-xs md:px-5 md:py-2.5 px-2 py-1.5 md:mr-2 mb-2 md:text-base ">Unlist Service</button>
                    </div>
                }


                {userId == data.serviceProvider?._id && !data?.serviceProvider?.banned && <div className="mt-8 space-x-1 buttonGroup md:flex md:justify-center">
                    <button onClick={() => navigate("/modify/service?service=" + data._id)} type="button" class="text-white bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]   font-medium rounded-lg text-xs md:px-5 md:py-2.5 px-2 py-1.5 md:mr-2 mb-2 md:text-base ">Edit Service</button>

                </div>}
                {userId == data.serviceProvider?._id && data?.serviceProvider?.banned && <div className="mt-8 space-x-1 font-medium md:flex md:justify-center">
                    You have been banned.

                </div>}
            </div>

            <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl bg-whitemd:px-6 md:py-4 py-2 px-4 my-4">
                <h3 className="my-3 font-medium md:text-xl text-md">Work Samples</h3>
                <ul className="">
                    {data.workSamples && data.workSamples.map((sample) => <li className="text-sm sm:text-base list-item">
                        <div title={sample.workSampleLink} className="flex items-center">
                            <span><FaLink className="fill-[#0076CE]" /></span> <a href="/www.google.com" target="_blank" className=" bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-transparent bg-clip-text  font-bold">Link to sample</a>
                        </div>
                        <p className="pl-4 text-xs line-clamp-4 md:text-base">{sample.workSampleBrief}</p>
                    </li>)}
                </ul>
            </div>
            <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl bg-whitemd:px-6 md:py-4 py-2 px-4 my-4">
                <div className="md:mt-2">
                    <p className="text-lg font-medium md:mb-3">Tags </p>
                    <div className="flex flex-wrap w-full align-top max-h-32 bg-slate-100">
                        <div>{
                            data.serviceTags && data.serviceTags.map((tag) =>
                                <span title="Experience 0-1 year " id="badge-dismiss-default" class="cursor-pointer hover:bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                                    {tag}
                                </span>)}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}