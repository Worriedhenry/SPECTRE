import React, { useState } from "react";
import axios from "axios";
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom";
const RequestedPropsalPage = ({ setActiveTabs, serviceName, serviceId, serviceProviderName, serviceProviderId }) => {
    const [tags, setTags] = useState(new Set(["Fresher"]))
    const [proposalBrief, setProposalBrief] = useState("")
    const [proposedPrice, setProposedPrice] = useState(0)
    const [proposedCurrency, setProposedCurrency] = useState("$")
    const [proposedPayRate, setProposedPayRate] = useState("Per hour")
    const [proposedDeadline, setProposedDeadline] = useState("N/A")
    const [referenceLink, setReferenceLink] = useState("")
    const [paymentMethod, setPaymentMethod] = useState("N/A")
    const date=new Date()
    const {userId}=useSelector((state)=>state.auth)

    const navigate=useNavigate()

    /**
     * Function to add a tag to the set of tags if it doesn't already exist.
     *
     * @param {Object} e - the event object
     * @return {void} 
     */
    const addTags = (e) => {
        if (tags.has(e.target.value)) {
            return
        }
        const newTags = new Set([...tags, e.target.value])
        setTags(newTags)

    }

    /**
     * Removes a tag from the set of tags.
     *
     * @param {any} e - The tag to be removed.
     * @return {void} 
     */
    const removeTags = (e) => {
        const newTags = new Set([...tags])
        newTags.delete(e)
        setTags(newTags)
    }

    const data = {
        service: "Web Development",
        serviceProvider: "theDesignerz",
        brief: "Web development is the building and maintenance of websites; it's the job of a web developer to create, design, and maintain the look and functionality of a website. ",
        serviceTags: ["Website", "Design", "PHP"],
        servicePrice: "25$",


    }

    const handleFormSubmit =async (e) => {
        e.preventDefault()
        const res = await axios.post(import .meta.env.VITE_BACKEND+"/proposal/create", {
            service: serviceId,
            serviceProvider:serviceProviderId,
            client:userId,
            proposalBrief,
            referenceLink,
            proposedPrice,
            proposedCurrency,
            paymentMethod,
            proposedDeadline,
            logs:[date.toString()+" - Proposal Requested"]
            })
         if (res.status===201){
            navigate("/profile/"+userId+"/?tab=3")
         }   

    }

    return (
        <div className="space-y-5 py-4 px-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl w-full mb-6 bg-white hidden md:block">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)] leading-tight tracking-tight  text-center  md:text-3xl ">
                    Request Propsal
                </h1>
                <form class="space-y-4 md:space-y-6" onSubmit={handleFormSubmit} action="#">
                    <div className="flex w-full space-x-3">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Service</label>
                            <input type="text" name="FirstName" disabled value={serviceName} id="FirstName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg cursor-not-allowed focus:ring-primary-600 focus:border-primary-600 block md:w-full p-2.5 " placeholder="Ankit" required />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Service Provider</label>
                            <input type="text" name="LastName" id="LastName" value={serviceProviderName} disabled class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 cursor-not-allowed focus:border-primary-600 block w-full p-2.5 " placeholder="Sharma" required="" />
                        </div>
                    </div>
                    <div>
                        <label for="password" class="block pb-0 text-sm md:text-base font-medium text-gray-900 mb-0">Brief Description</label>
                        <p className="pt-0 mt-0 mb-2 text-xs text-slate-400"> Enter a breif description of what you need. </p>
                        <textarea type="text"  name="about" id="password" value={proposalBrief} onChange={(e) => setProposalBrief(e.target.value)} placeholder="I would like to ...." class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                    </div>
                    <div className="flex w-full space-x-3">
                        <div>
                            <label for="date" class="block mb-0 text-sm font-medium text-gray-900 ">Deadline</label>
                            <p className="pt-0 mt-0 mb-2 text-xs text-slate-400">Enter Expected Deadline for project completion </p>
                            <input type="date" value={proposedDeadline} onChange={(e) => setProposedDeadline(e.target.value)} name="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="dd/mm/yyyy" required="" />
                        </div>

                    </div>
                    <div>
                        <label for="Live Link" class="block mb-0 text-xs md:text-sm font-medium text-gray-900 ">Offer Cost (optional)  </label>
                        <p className="pt-0 mt-0 mb-2 text-xs text-slate-400">Offer an different cost if you wish </p>
                        <div className='flex'>
                            <input type="number" name="newerCost" value={proposedPrice} onChange={(e) => setProposedPrice(e.target.value)} className="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  md:p-2.5 p-1 w-3/6 md:text-base text-xs" placeholder="Enter Amount" />
                            <select id="currency" value={proposedCurrency} onChange={(e) => setProposedCurrency(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-1 text-xs md:text-base md:p-2.5 ">
                                <option selected>$</option>
                            </select>
                            <select id="services" value={proposedPayRate} onChange={(e) => setProposedPayRate(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/6 p-1 text-xs md:text-base md:p-2.5 ">
                                <option value="Per hour" selected>Per hour</option>
                                <option value="Complete" >Complete</option>
                                <option value="Per day">Per Day</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="Live Link" class="block mb-0 text-xs md:text-sm font-medium text-gray-900 ">Enter Payment Method (optional)  </label>
                        <p className="pt-0 mt-0 mb-2 text-xs text-slate-400">Enter Payment Method  </p>
                        <div className='flex'>
                            <select id="services" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/6 p-1 text-xs md:text-base md:p-2.5 ">
                                <option selected value="N/A"> Select payment method </option>
                                <option value="Paypal" >Paypal</option>
                                <option value="UPI" >UPI</option>
                                <option value="Direct Bank Transfer" >Direct Bank Transfer</option>
                            </select>
                        </div>
                    </div>
                    <div>
                    <label for="Live Link" class="block mb-0 text-xs md:text-sm font-medium text-gray-900 ">References (optional)  </label>
                        <p className="pt-0 mt-0 mb-2 text-xs text-slate-400">Add link to References </p>
                        
                        <input type="url" name="referenceLink " value={referenceLink} onChange={(e)=>setReferenceLink(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:ring-primary-600 focus:border-primary-600 block md:w-full p-2.5 " placeholder="Dropbox/Drive/Live"  />
                    </div>
                    <div className="flex space-x-4">
                        <button type="submit" class="w-1/2 bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]      focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Send Proposal</button>
                        <button onClick={() => setActiveTabs(1)} type="button" class="w-1/2 border-2 border-[#0076CE]       bg-primary-600 text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)]     focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RequestedPropsalPage;