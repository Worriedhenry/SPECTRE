import React, { useState, useRef, useMemo, useEffect } from 'react'
import { GrSubtractCircle } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from 'react-redux'
import { showError } from '../../Reducers/authSlice'
import { FaLink } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import axios from "axios";
const config = {
    placeholder: 'Enter Brief',

}
const RateModifiation = () => {
    const [tags, setTags] = useState(new Set([]))
    const [serviceName, setServiceName] = useState("")
    const [serviceBrief, setServiceBrief] = useState("")
    const [complexity, setComplexity] = useState("")
    const [serviceTags, setServiceTags] = useState([])
    const [workSamples, setWorkSamples] = useState([])
    const [serviceCost, setServiceCost] = useState(0)
    const [serviceCostDuration, setServiceDuration] = useState("Per Hour")
    const [serviceCostCurrency, setServiceCostCurrency] = useState("$")
    const [addSample, setAddSample] = useState(false)
    const [serviceDeadline, setServiceDeadline] = useState("N/A")
    const [workSampleLink, setWorkSampleLink] = useState("")
    const [workSampleBrief, setWorkSampleBrief] = useState("")
    const { userToken, error } = useSelector(state => state.auth)
    let [searchParams, setSearchParams] = useSearchParams();
    const serviceId = searchParams.get("service")
    console.log(serviceId)
    const editor = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const addTags = (e) => {
        if (tags.has(e.target.value)) {
            return
        }
        else {
            const newTags = new Set([...tags, e.target.value])
            setTags(newTags)
        }
    }
    const removeTags = (e) => {
        const newTags = new Set([...tags])
        newTags.delete(e)
        setTags(newTags)
    }

    const addWorkSample = () => {
        // e.preventDefault()
        var newSample = {
            workSampleLink: workSampleLink,
            workSampleBrief: workSampleBrief
        }
        setWorkSamples([...workSamples, newSample])
        setWorkSampleLink("")
        setWorkSampleBrief("")
        setAddSample(false)
    }

    const removeWorkSample = (key) => {
        const newSamples = [...workSamples]
        newSamples.splice(key, 1)
        setWorkSamples(newSamples)
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post(import .meta.env.VITE_BACKEND+"/services/create", { serviceName, serviceBrief, serviceTags: [...tags], complexity, workSamples, serviceCost, serviceCostDuration, serviceCostCurrency, serviceDeadline, userToken })

        if (res.status == 200) {
            alert("service added successfully")
            navigate("/service/" + res.data.id)
        }
        else {
            dispatch(showError("An error occured. Please try again later"))
        }

    }

    useEffect(() => {
        console.log(searchParams.get("create"))
        if (searchParams.get("create") !== "true") {
            console.log("getting service")
            axios
                .get(import .meta.env.VITE_BACKEND+"/services/getfullservice/" + serviceId)
                .then(res => {
                    setServiceName(res.data.serviceName)
                    setServiceBrief(res.data.serviceBrief)
                    setTags(new Set(res.data.serviceTags))
                    setComplexity(res.data.complexity)
                    setWorkSamples(res.data.workSamples)
                    setServiceCost(res.data.serviceCost)
                    setServiceDuration(res.data.serviceCostDuration)
                    setServiceCostCurrency(res.data.serviceCostCurrency)
                    setServiceDeadline(res.data.serviceDeadline)
                })
                .catch(err => console.error(err));
        }
    }, [])

    const updateService = async () => {
        const res = await axios.put(import .meta.env.VITE_BACKEND+"/services/updateservice/" + serviceId, { serviceId, serviceName, serviceBrief, serviceTags:[...tags], complexity, workSamples, serviceCost, serviceCostDuration, serviceCostCurrency, serviceDeadline })
        if(res.status==204){
            alert("service updated successfully")
            navigate("/service/" + serviceId)
        }
    }

    const deleteService= async ()=>{
        const res = await axios.delete(import .meta.env.VITE_BACKEND+"/services/deleteservice/" + serviceId)
        if(res.status==204){
            alert("service deleted successfully")
            navigate("/")
        }
    }

    return (
        <div className='p-2 space-y-6 divide-y'>
            <p className='block pb-0 mb-0 text-sm font-medium text-gray-900 md:text-xl '>Service</p>
            <form className='space-y-3' onSubmit={(e) => onSubmit(e)}>
                <div className='my-5 space-y-3'>
                    <p className='block pb-0 mb-0 text-sm font-medium text-gray-900 md:text-base'>Service Name </p>
                    <input type="text" name="servce" id="deadline" value={serviceName} onChange={(e) => setServiceName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Web Development" required />

                </div>
                <div className='my-5 space-y-3'>
                    <p className='block pb-0 mb-0 text-sm font-medium text-gray-900 md:text-base'>About Service</p>
                    {/* <textarea id="message" rows="4" value={serviceBrief} required name="serviceBrief" onChange={(e) => setServiceBrief(e.target.value)} class="block p-2.5 w-full md:text-sm text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Describe about service and your experience,proefficency in it "></textarea> */}
                    <JoditEditor
                        ref={editor}
                        value={serviceBrief}
                        config={config}

                        onBlur={newContent => setServiceBrief(newContent)}
                    // onChange={newContent => setServiceBrief(newContent)}
                    />
                </div>
                <div>
                    <p className='block pb-0 mb-0 text-sm font-medium text-gray-900 md:text-base'>SERVICE CHARGES</p>
                    <div>
                        <label for="Live Link" class="block mb-2 text-xs md:text-sm font-medium text-gray-900 ">Enter Average Cost  </label>
                        <div className='flex'>
                            <input type="string" value={serviceCost} onChange={(e) => setServiceCost(e.target.value)} required name="serviceCost" id="Live Link" class="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  md:p-2.5 p-1 w-3/6 md:text-base text-xs" placeholder="Enter service cost" />
                            <select id="services" value={serviceCostCurrency} onChange={(e) => setServiceCostCurrency(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-1 text-xs md:text-base md:p-2.5 ">
                                <option selected>$</option>
                            </select>
                            <select id="services" value={serviceCostDuration} onChange={(e) => setServiceDuration(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/6 p-1 text-xs md:text-base md:p-2.5 ">
                                <option selected>Per Hour</option>
                                <option >Complete</option>
                                <option >Per Day</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='space-y-4'>
                    <p className='flex justify-between font-medium md:text-base'>Service Complexity

                    </p>
                    <select id="complexity" required onChange={(e) => setComplexity(e.target.value)} value={complexity} class="bg-gray-50 border border-gray-300 text-gray-900   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-1 text-xs md:text-base md:p-2.5 " >
                        <option value="" selected>Choose Complexity</option>
                        <option value="Easy" >Easy</option>
                        <option value="Easy-Medium">Easy-Medium</option>
                        <option value="Medium">Medium</option>
                        <option value="Medium-Hard">Medium-Hard</option>
                        <option value="Hard">Hard</option>
                        <option value="Easy-Hard">Easy-Hard</option>
                    </select>
                    <div>
                        <label htmlFor="deadline" class="block mb-2 text-sm font-medium text-gray-900 ">Estimated completion Duration</label>
                        <input type="text" name="deadline" id="deadline" value={serviceDeadline} onChange={(e) => setServiceDeadline(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="..within 3-5 days" required />
                    </div>

                </div>
                <div>
                    <p class="block pb-0 text-sm md:text-base font-medium text-gray-900 mb-0 ">Profile Tags</p>
                    <p className="pt-0 mt-0 mb-2 text-xs text-slate-400">Using Tags increase chances of getting the proposal accepted sooner. </p>
                    <select id="countries" value={tags} onChange={(e) => addTags(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected value="Web Development">Web Development</option>
                        <option value="Fresher">Fresher</option>
                        <option value="Flexible">Flexible</option>
                        <option value="Strict Routine" >Strict Routine</option>
                        <option value="Newbie" >Newbie</option>
                    </select>
                    <div className="flex flex-wrap w-full align-top max-h-32 bg-slate-100">
                        {tags && Array.from(tags).map((tag) => <div className="h-fit">
                            <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] rounded  text-white m-1">
                                {tag}
                                <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" data-dismiss-target="#badge-dismiss-default" onClick={() => removeTags(tag)} aria-label="Remove" >
                                    <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </span>
                        </div>
                        )}
                    </div>
                </div>
                <div className='space-y-2'>
                    <p className='flex justify-between font-medium md:text-base'>Work Samples
                        <button type='button' onClick={() => setAddSample(!addSample)}><FaPlus className={`hover:bg-green-400 rounded-full p-0.5 border-2 hover:border-0 hover:text-white text-green-500 border-green-400 ${addSample ? "hidden" : "block"}`} /></button>
                    </p>
                    <div className={`${addSample ? "block" : "hidden"} p-3 space-y-3 border-2 md:p-6 border-slate-200`}>

                        <div>
                            <label for="email" class="block  text-xs md:text-sm font-medium text-gray-900 ">Enter Drive/Dropbox/Githib/Preview Link</label>
                            <p className='mt-0 mb-2 text-xs text-slate-400 '>Enter public link to image/vedio/code etc</p>
                            <input type="url" name="url" id="url" class="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:p-2.5 p-1 md:text-base text-xs" placeholder="Ente your public link" />
                        </div>
                        <label for="workBrief" class="block mb-2 text-xs md:text-sm font-medium text-gray-900 " ></label>
                        <textarea id="workBrief" rows="4" value={workSampleBrief} onChange={(e) => setWorkSampleBrief(e.target.value)} class="block p-2.5 w-full md:text-sm text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Brief about the work "></textarea>

                        <div className='space-x-6 md:flex '>
                            <button type="button" onClick={() => setAddSample(!addSample)} disabled={!workSampleBrief && !workSampleLink} class="text-red-600 hover:bg-red-600 hover:text-white bg-white font-medium rounded-lg text-xs md:px-5 md:py-2.5 px-2 py-1 md:mr-2 mb-2 md:text-md border-red-600 border-2">Cancel</button>
                            <button type="button" onClick={() => addWorkSample()} class="text-green-600 hover:bg-green-600 hover:text-white bg-white font-medium rounded-lg text-xs md:px-5 md:py-2.5 px-2 py-1 md:mr-2 mb-2 md:text-md border-green-600 border-2  ">Add</button>
                        </div>

                    </div>
                    {workSamples && workSamples.map((sample, key) =>
                        <div className='flex flex-col items-center justify-between px-4 py-2 border-2 border-slate-200'>
                            <div className='flex justify-between w-full'>
                                <div>
                                    <div title={sample.workSampleLink} className="flex items-center">
                                        <span><FaLink className="fill-[#0076CE]" /></span> <span title={key} className=" bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-transparent bg-clip-text text-sm md:text-base font-bold cursor-pointer">Link to sample</span>
                                    </div>
                                    <p className="pl-4 text-xs md:text-md ">{sample.workSampleBrief}</p>
                                </div>
                                <button onClick={() => removeWorkSample(key)} className='text-red-800'>
                                    <GrSubtractCircle />
                                </button>
                            </div>
                        </div>
                    )}
                    {!workSamples?.length && <p>Your work samples will show here</p>}
                </div>
                <p className='font-medium text-red-600' > {error}</p>
                {searchParams.get("create") == "true" && <button type="submit" class="text-green-600 hover:bg-green-600 hover:text-white bg-white font-medium rounded-lg text-xs mb-1 md:px-5 md:py-2.5 px-2 py-1 md:mr-2  md:text-md border-green-600 border-2  ">Create</button>}
                {searchParams.get("create") != "true" && <button onClick={() => updateService()} type="button" class="text-green-600 hover:bg-green-600 hover:text-white bg-white font-medium rounded-lg text-xs mb-1 md:px-5 md:py-2.5 px-2 py-1 md:mr-2  md:text-md border-green-600 border-2  ">Update</button>}
                {searchParams.get("create") != "true" && <button type="button" onClick={() => deleteService()}  class="text-red-600 hover:bg-red-600 hover:text-white bg-white font-medium rounded-lg text-xs mb-1 md:px-5 md:py-2.5 px-2 py-1 md:mr-2  md:text-md border-red-600 border-2  ">Delete</button>}

            </form>
        </div>
    )
}

export default RateModifiation;
