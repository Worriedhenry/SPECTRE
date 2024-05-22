import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Loading";
const ExpandedTask = () => {

    const [data, setData] = useState(null)
    const [activeTab, setActiveTab] = useState(1);
    const [isClient, setIsClient] = useState(false)
    const [isArchived, setIsArchived] = useState(false)
    const { userId } = useSelector(state => state.auth)
    const { taskId } = useParams()
    const [reviewTitle, setReviewTitle] = useState("")
    const [reviewDescription, setReviewDescription] = useState("")
    const [rating, setRating] = useState()
    const [openReview,setOpenReview]=useState(false)
    const date = new Date()
    const navigate = useNavigate()

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    }

    useEffect(() => {
        axios.get("http://localhost:3001/proposal/getproposaldetails/" + taskId).then(
            res => {
                setData(res.data)
                if (data && data?.serviceProvider._id != userId && data?.client._id != userId) {
                    navigate("/")
                    return
                }
                if (res.data.client._id === userId) {
                    setIsClient(true)
                }
                if (res.data.archived.includes(userId)) {
                    setIsArchived(true)
                }
            }
        )
    }, [data])


    useEffect(() => {
        if (data && data?.serviceProvider._id != userId && data?.client._id != userId) {
            navigate("/")
            return
        }
        if (data?.client._id === userId) {
            setIsClient(true)
        }
    }, [data])

    const handleReject = async () => {
        const payload = {
            proposalStatus: -1,
            log: date.toString() + " - Proposal Rejected"
        }
        const res = await axios.put("http://localhost:3001/proposal/updateproposal/" + data._id, payload)
        if (res.status == 204) {
            data.proposalStatus = -1;
            data.logs.push(payload.log)
            setData(data)
            alert("Proposal Rejected")
        }
    }

    const handleAccept = async () => {
        const payload = {
            proposalStatus: 2,
            log: date.toString() + " - Proposal Accepted"
        }
        const res = await axios.put("http://localhost:3001/proposal/updateproposal/" + data._id, payload)
        if (res.status == 204) {
            data.proposalStatus = 2;
            data.logs.push(payload.log)
            setData(data)
            alert("Proposal Accepted")
        }
    }

    const handleAbandon = async () => {
        var confirmation = window.confirm("Are you sure you want to abandon this proposal?")

        if (!confirmation) {
            return
        }
        const payload = {
            proposalStatus: -2,
            log: date.toString() + " - Proposal Abandoned"
        }
        const res = await axios.put("http://localhost:3001/proposal/updateproposal/" + data._id, payload)
        if (res.status == 204) {
            data.proposalStatus = -2
            data.logs.push(payload.log)
            setData(data)
            alert("Proposal Abandoned")
        }

    }

    const handleFormSubmit=async(e)=>{
        e.preventDefault()
        setOpenReview(false)
        const payload = {
            proposalStatus: 4,
            log: date.toString() + " - Proposal closed by " + data?.client.username,
            reviewTitle,
            reviewDescription,
            rating,
            userId,
            serviceId:data.service._id
        }
        const res = await axios.put("http://localhost:3001/proposal/completeproposal/" + data._id, payload)
        if (res.status === 204) {
            setData(null)
            alert("Proposal closed successfully")
        }

    }

    const handleSubmit = async () => {
        var confirmation = window.confirm("Are you sure you want to mark this proposal as done? Marking complete means you have submitted the task to client.")
        if (!confirmation) {
            return
        }
        

        const payload = {
            proposalStatus: 3,
            log: date.toString() + " - Marked completed by " + data?.serviceProvider.username
        }
        const res = await axios.put("http://localhost:3001/proposal/updateproposal/" + data._id, payload)
        if (res.status === 204) {
            setData(null)
            alert("Marked Complete , proposal will be closed when client confirms the  submission")
        }
    }
    const handleArchive = async () => {
        var confirmation = window.confirm("Are you sure you want to archive this proposal?")
        if (!confirmation) {

            return
        }
        const payload = {
            userId,
        }
        const res = await axios.put("http://localhost:3001/proposal/archiveproposal/" + data._id, payload)
        if (res.status === 204) {
            alert("Proposal archived successfully")
            setIsArchived(true)
            setData(null)
        }
    }
    const handleUnarchive = async () => {
        var confirmation = window.confirm("Are you sure you want to unarchive this proposal?")
        if (!confirmation) {
            return
        }

        const res = await axios.put("http://localhost:3001/proposal/unarchiveproposal/" + data._id, { userId })
        if (res.status == 204) {
            alert("Successfully Unarchived")
            setIsArchived(false)

        }
    }

    const handleClosing = async () => {
        var confirmation = window.confirm("Are you sure you want to close this proposal?")
        if (!confirmation) {
            return
        }
        setOpenReview(true)
       

    }

    if (data === null) {
        return (
            <Loading />
        )
    }

    return (
        <div>
            <ul className="flex border-b-2  border-[#0076CE]  ">
                <li
                    onClick={() => handleTabClick(1)}
                    className={`cursor-pointer flex justify-center font-medium md:text-3xl w-full hover:border-b-2 hover:border-[#9400D3] parent group py-2 px-4 ${activeTab === 1 ? 'border-b-2 border-blue-500 text-black ' : ''}  p-4 rounded-t-lg  hover:bg-gray-50 flex  items-center space-x-3 `}
                >
                    <span className={`  ${'text-transparent bg-clip-text  bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold '}   `} >{data.service.serviceName}</span>
                </li>
            </ul>
            <div>
                {activeTab === 1 && <div className="space-y-4">

                    <div>
                        <div>
                            <table className='min-w-full text-center text-sm font-light'>
                                <thead className='font-medium'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className=' md:py-4 py-1 text-left w-[1/3]   font-bold text-xs md:text-base'
                                        >
                                            {isClient ? "Service Provider" : "Client"}
                                        </th>
                                        <th
                                            scope='col'
                                            className='py-1 text-left md:py-4  font-bold text-xs md:text-base'
                                        >
                                            Service Cost
                                        </th>
                                        {data.proposedPrice > 0 ? <th
                                            scope='col'
                                            className='py-1 text-left md:py-4  font-bold text-xs md:text-base'
                                        >
                                            {isClient ? "Your offer" : "Proposed offer"}
                                        </th> :
                                            <th
                                                scope='col'
                                                className='py-1 text-left md:py-4  font-bold text-xs md:text-base'
                                            >
                                                Payment Method
                                            </th>
                                        }
                                        <th
                                            scope='col'
                                            className='text-left py-1 md:py-4   font-bold text-xs md:text-base'
                                        >
                                            Deadline
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='whitespace-nowrap text-sm md:text-base text-slate-700 text-left  py-2 font-medium w-1/4'>
                                            {isClient ? data.serviceProvider.username : data.client.username}
                                        </td>
                                        <td className='whitespace-nowrap w-1/3 text-sm text-slate-700 md:text-base py-2 text-left font-medium'>
                                            {data.service.serviceCost}{data.service.serviceCostCurrency} {data.service.serviceCostDuration}
                                        </td>
                                        {data.proposedPrice > 0 ? <td className='whitespace-nowrap w-1/3 text-sm text-slate-700 md:text-base py-2 text-left font-medium'>
                                            {data.proposedPrice}{data.proposedCurrency} {data.proposedPayRate}
                                            {data.proposedCurrency == data.service.serviceCostCurrency && data.proposedPayRate == data.service.serviceCostDuration && data.service.serviceCost > data.proposedPrice && <p className="text-red-700 md:text-sm" >{(data.service.serviceCost - data.proposedPrice)} less</p>}
                                        </td> :
                                            <td className='whitespace-nowrap w-1/3 text-sm text-slate-700 md:text-base py-2 text-left font-medium'>
                                                {data.paymentMethod}
                                            </td>
                                        }
                                        <td className='whitespace-nowrap text-sm md:text-base text-slate-700  py-2 text-left font-medium'>
                                            {data.proposedDeadline.substring(0, 10)}
                                            <p className="text-green-700 md:text-sm" >Extendable</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='my-5 space-y-3'>
                            <p className='text-xs font-bold md:text-sm'>STATUS</p>
                            <p className='text-sm md:text-base text-slate-700 w-fit'>
                                <ol className="flex items-center w-full text-xs  md:text-sm font-medium text-center  text-gray-500 dark:text-gray-400 sm:text-base">
                                    <li className="flex md:w-full items-center sm:after:content-[''] after:w-24 after:h-1 text-blue-500  after:border-b-2 after:border-blue-500 after:border-1 after:hidden sm:after:inline-block after:mx-2   ">
                                        <div>
                                            <span className="flex items-center after:content-['>'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                </svg>
                                                <span className="bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent flex ">
                                                    <span className="hidden sm:inline-flex sm:me-2">Proposal </span> Requested</span>
                                            </span>
                                            <p>
                                                {data.createdAt.substring(0, 10)}
                                            </p>
                                        </div>
                                    </li>
                                    {data.proposalStatus == -1 && <li className="text-red-500 md:w-full items-center  ">

                                        <span className="flex items-center after:content-['>'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 ">
                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>

                                            <span className="hidden sm:inline-flex sm:me-2">Proposal </span> Rejected</span>
                                        <p>
                                            {data.updatedAt.substring(0, 10)}
                                        </p>
                                    </li>}
                                    {data.proposalStatus == -2 && <li className="text-red-500 md:w-full items-center  ">

                                        <span className="flex items-center after:content-['>'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 ">
                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>

                                            <span className="hidden sm:inline-flex sm:me-2">Proposal </span> Abandoned</span>
                                        <p>
                                            {data.updatedAt.substring(0, 10)}
                                        </p>
                                    </li>}
                                    {data.proposalStatus > -1 && <li className="flex md:w-full items-center sm:after:content-[''] after:w-24 after:h-1   after:border-b-2 after:border-blue-500 after:border-1 after:hidden sm:after:inline-block after:mx-2 ">
                                        {
                                            data.proposalStatus >= 2 && <span className="flex items-center after:content-['>'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 text-blue-500">
                                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                </svg>
                                                <span className="bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent flex ">
                                                    <span className="hidden sm:inline-flex sm:me-2">Proposal </span> Accepted</span>
                                            </span>
                                        }
                                        {data.proposalStatus < 2 && <span className={`flex ${data.proposalStatus == 1 && 'animate-pulse'} items-center after:content-['>'] sm:after:hidden after:animate-pulse after:mx-2 after:text-gray-200 dark:after:text-gray-500`}>
                                            <span className="me-2">2</span>
                                            <span className="hidden sm:inline-flex sm:me-2">Proposal</span> Accepted
                                        </span>}
                                    </li>}
                                    {data.proposalStatus > -1 && <li className="flex md:w-full items-center   sm:after:content-[''] after:w-24 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 dark:after:border-gray-700">
                                        {
                                            data.proposalStatus >= 3 && <span className="flex items-center after:content-['>'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 text-blue-500">
                                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                </svg>
                                                <span className="bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent flex ">
                                                    Submitted</span>
                                            </span>
                                        }
                                        {data.proposalStatus < 3 && <span className={`flex ${data.proposalStatus == 2 && 'animate-pulse'} items-center after:content-['>'] sm:after:hidden after:animate-pulse after:mx-2 after:text-gray-200 dark:after:text-gray-500`}>
                                            <span className="me-2">3</span>
                                            Submitted
                                        </span>}
                                    </li>}

                                    {data.proposalStatus > -1 && <li className="flex items-center">
                                        {
                                            data.proposalStatus >= 4 && <span className="flex items-center after:content-['>'] sm:after:hidden after:mx-2 after:text-gray-200 text-blue-500 dark:after:text-gray-500">
                                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                </svg>
                                                <span className="bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent flex ">
                                                    Closed</span>
                                            </span>
                                        }
                                        {data.proposalStatus < 4 && <span className={`flex ${data.proposalStatus == 3 && 'animate-pulse'} items-center after:content-['>'] sm:after:hidden after:animate-pulse after:mx-2 after:text-gray-200 dark:after:text-gray-500`}>
                                            <span className="me-2">4</span>
                                            Closed
                                        </span>}
                                    </li>}
                                </ol>
                            </p>
                        </div>
                        <div className='my-5 space-y-3'>
                            <p className='text-xs font-bold md:text-sm'>DESCRIPTION</p>
                            <pre className='text-sm whitespace-break-spaces md:text-base text-wrap text-slate-700'>
                                {data.proposalBrief}
                            </pre>
                        </div>
                        <div className='my-5 space-y-3'>
                            <p className='text-xs font-bold md:text-sm'>REFERENCES</p>
                            <a href={data.referenceLink} target="_blank" className='text-sm md:text-base text-slate-700'>Reference 1</a>
                        </div>
                        <div className='my-5 space-y-3'>
                            <p className='text-xs font-bold md:text-sm'>ACTIONS</p>
                            {data.proposalStatus > 0 && <button title="Connect With client " type="button" className="text-[#0076CE]  bg-white hover:bg-[#0076CE] hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-[#0076CE] border-2">Chat</button>}
                            {!isClient && data.proposalStatus == 1 && <button title="Accept the task with tNc's" type="button" onClick={handleAccept} className="text-green-600  bg-white hover:bg-green-600 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-green-600 border-2">Accept</button>}
                            {!isClient && data.proposalStatus == 2 && <button title="Accept the task with tNc's" type="button" onClick={handleSubmit} className="text-green-600  bg-white hover:bg-green-600 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-green-600 border-2">Mark as done</button>}
                            {!isClient && data.proposalStatus == 1 && <button title="Reject the task" onClick={handleReject} type="button" className="text-red-600  bg-white hover:bg-red-600 hover:text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-red-600 border-2 ">Reject</button>}
                            {data.proposalStatus > 1 && data.proposalStatus < 3 && <button title="Abandon the task *(will be visible on profile)" onClick={handleAbandon} type="button" className="text-red-600  bg-white hover:bg-red-600 hover:text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-red-600 border-2 ">Abandon</button>}
                            {(data.proposalStatus < 0 || data.proposalStatus > 2) && !isArchived && <button title="Abandon the task *(will be visible on profile)" onClick={handleArchive} type="button" className="text-red-600  bg-white hover:bg-red-600 hover:text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-red-600 border-2 ">Archive</button>}
                            {(data.proposalStatus == 3) && isClient && <button title="Close the task" onClick={handleClosing} type="button" className="text-red-600  bg-white hover:bg-red-600 hover:text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-red-600 border-2 ">Close</button>}
                            {isArchived && <button title="Accept the task with tNc's" type="button" onClick={handleUnarchive} className="text-green-600  bg-white hover:bg-green-600 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-green-600 border-2">Unarchive</button>}
                        </div>
                        <form onSubmit={(e) =>handleFormSubmit(e) } className={`space-y-3 px-12 py-6 border-2 border-gray-400 ${openReview ? "block" : "hidden" } `}>
                            {/* A form for review of service Provider */}
                            <p className="w-full text-center font-medium text-xl" >Add a review</p>
                            <div>
                                <label for="review-title" className="block mb-2 text-sm font-medium text-gray-900 ">Review Title </label>
                                <input type="review-title" required id="review-title" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Title" />
                            </div>
                            <div>
                                <label for="review-title" className="block mb-2 text-sm font-medium text-gray-900 ">Review Description </label>
                                <textarea type="review-title" id="review-title" value={reviewDescription} onChange={(e) => setReviewDescription(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Review description " />
                            </div>
                            <div>
                                <label for="rating" className="block mb-2 text-sm font-medium text-gray-900 "> Rating (1-bad,10-good) </label>
                                <input type="number" min={1} max={10} id="rating" required value={rating} onChange={(e)=>setRating(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 " placeholder="Rating" />
                            </div>
                            <button title="Submit review" type="submit"  className="text-blue-600  bg-white hover:bg-blue-600 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-blue-600 border-2">Submit</button>
                        </form>
                    </div>
                </div>}
                <div className='my-5 space-y-3'>
                    <p className='text-xs font-bold md:text-sm'>LOGS</p>
                    {data.logs && data.logs.map((item, index) => <p className='text-sm md:text-base font-medium text-slate-700' key={index}>{item}</p>)}
                </div>

            </div>
        </div>
    )
}

export default ExpandedTask;