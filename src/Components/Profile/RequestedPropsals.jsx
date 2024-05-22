import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import { IoSendSharp } from "react-icons/io5";
import {useNavigate} from "react-router-dom"
import Loading from "../Loading";

const RequestedProposal = ({ component }) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const params = useParams();
    const userId = params.userId;
    useEffect(() => {
        getProposalDetails()
    }, [userId])

    async function getProposalDetails() {
        // setLoading(true)
        const res = await axios.get("http://localhost:3001/proposal/getproposal/" + userId + "/1")
        // setLoading(false)
        if (res.status === 200) {
            console.log(res.data,userId)
            setData(res.data)
        }
    }

    return (<div className="space-y-3">
        {!data && <Loading/>}
        {data && data.length===0 && <p className="text-center text-gray-500 font-medium italic ">No Proposals</p>}
        {data &&  data.map(proposal => <ProposalCard data={proposal} userId={userId} />)}
        
        </div>
    )
}
// code a javascript function to add two numbers

// 

export default RequestedProposal;


const ProposalCard = ({ data, userId }) => {
    const [isSent, setIsSent] = useState(false)
    const navigate=useNavigate()
    useEffect(() => {
        if (data.client._id === userId) {
            setIsSent(true)
        }
    }, [data, userId])
    return (
        <div className="border-slate-200 flex flex-col space-y-3  parent group transition-all shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg  justify-between p-2">
            <div className="flex items-start justify-between p-2 l md:flex-row parent group ">

                <div className="flex flex-col w-full transition-all md:w-2/5 md:space-x-3">
                    <div className="flex items-center justify-between space-x-3 w-fit">
                        <p className="md:text-lg text-md bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent font-bold">{data?.service.serviceName}</p>
                        {isSent && <p><IoSendSharp /></p>}
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="text-xs font-medium md:w-40 md:text-sm">
                                    {isSent ? "serviceProvider" : "Client"}
                                </td>
                                <td className="text-xs md:text-sm">{isSent ? data?.serviceProvider.username : data?.client.username}</td>
                            </tr>
                            <tr>
                                <td className="text-xs font-medium md:text-sm"> <span className="hidden md:inline">Proposal</span> Requested:</td>
                                <td className="text-xs md:text-sm w-fit">{data?.createdAt?.substring(0,10)} </td>
                            </tr>
                            <tr>
                                <td className="text-xs font-medium md:text-sm"> <span className="hidden md:inline">Price</span>Original :</td>
                                <td className="text-xs md:text-sm">{data.service.serviceCost} {data.service.serviceCostCurrency}</td>
                            </tr>
                            <tr>
                                <td className="text-xs font-medium md:text-sm"><span className="hidden md:inline">Price</span> offered:</td>
                                <td className="text-xs md:text-sm">{data.proposedPrice == 0 ? "N/A" : data.proposedPrice + " " + data.proposedCurrency}   </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className="hidden w-3/5 transition-all md:block md:w-5/12">
                    <p className="text-sm font-medium md:text-base">Description</p>
                    <p className="text-xs  md:text-sm text-overflow-{ellipsis|clip} text-justify line-clamp-3 md:line-clamp-4">{data?.proposalBrief}</p>
                </div>
            </div>

            <div className="flex flex-row-reverse items-center justify-between ">
                <div>
                    <button type="button" onClick={() => navigate(`/profile/viewtask/${data?._id}`)} class="text-[#0076CE] hover:bg-[#0076CE]  bg-white hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-[#0076CE] border-2">View Details</button>
                </div>
                {<div className="max-w-[75%] overflow-hidden">
                    <ol class="flex items-center w-full text-xs  md:text-sm font-medium text-center  text-gray-500 dark:text-gray-400 sm:text-base">
                        <li class="flex md:w-full items-center sm:after:content-[''] after:w-12 after:h-1 text-blue-500  after:border-b-2 after:border-blue-500 after:border-1 after:hidden sm:after:inline-block after:mx-2   ">
                            <span class="flex items-center after:content-['>'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                {data?.propsalStatus > 0 && <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>}
                                <span className={` ${data?.proposalStatus > 0 ? "bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent flex" : ""} ${data?.proposalStatus == 0 && "animate-pulse"}  `}>
                                    Requested</span>
                            </span>
                        </li>
                       {data.proposalStatus>-1 && <li class="flex md:w-full items-center   sm:after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 dark:after:border-gray-700">
                            <span class="flex  items-center after:content-['>'] sm:after:hidden after:animate-pulse after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                {data?.propsalStatus > 1 ? <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg> : <span class="me-2">2</span>}

                                <span className={` ${data?.proposalStatus > 1 ? "bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent flex" : ""}  ${data?.proposalStatus == 1 && "animate-pulse"}  `}>
                                    Accepted</span>
                            </span>
                        </li>}
                        { data.proposalStatus>-1 && <li class="flex md:w-full items-center   sm:after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 dark:after:border-gray-700">
                            <span class="flex items-center after:content-['>'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                {data?.propsalStatus > 2 ? <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg> : <span class="me-2">3</span>}

                                <span className={` ${data?.proposalStatus > 2 ? "bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent flex" : ""}  ${data?.proposalStatus == 2 && "animate-pulse"}  `}>
                                    Submitted</span>
                            </span>

                        </li>}

                        { data.proposalStatus>-1 && <li class="flex items-center">
                            {data?.propsalStatus > 3 ? <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg> : <span class="me-2">4</span>}

                            <span className={` ${data?.proposalStatus > 3 ? "bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent flex" : ""}  ${data?.proposalStatus == 3 && "animate-pulse"}  `}>
                                Closed</span>

                        </li>}
                        { data.proposalStatus==-1 && <li class="flex text-red-500 items-center">
                             <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>  

                            <span >
                                Rejected</span>

                        </li>}
                        { data.proposalStatus==-2 && <li class="flex text-red-500 items-center">
                             <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>  

                            <span >
                                Abandoned</span>

                        </li>}
                    </ol>
                </div>}
            </div>

        </div >
    )
}

export {ProposalCard};