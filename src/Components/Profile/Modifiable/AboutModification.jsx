import React,{useState,useEffect} from 'react'
import { GrSubtractCircle } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import axios from 'axios';
import { useSelector } from 'react-redux';
import Loading from '../../Loading';
const AboutModifiation = () => {
    
    const [about,setAbout]=useState(false)
    const [education,setEducation]=useState([])
    const [achievements,setAchievments]=useState([]) 
    const [degree,setDegree]=useState("")
    const [institution,setInstitution]=useState("")
    const [startYear,setStartYear]=useState("")
    const [instiituteLocation,setInstiituteLocation]=useState("")
    const [endYear,setEndYear]=useState("")
    const [grades,setGrades]=useState("")
    const [data, setData] = useState(false) 
    const [achievmentTitle,setAchievmentTitle]=useState("")
    const [achievmentDesc,setAchievmentDesc]=useState("")
    const [achievmentStartYear,setAchievmentStartYear]=useState("")
    const [achievmentEndYear,setAchievmentEndYear]=useState("")
    const [openEducation,setOpenEducation]=useState(false)
    const [openAchievment,setOpenAchievment]=useState(false)
    
    // const []
    const {userId}=useSelector(state=>state.auth)

    const removeEducation=(index)=>{
        setEducation(education.filter((item,i)=>i!==index))
    }
    const addEducation=(e)=>{
        e.preventDefault()
        setEducation([...education,{institution,degree,startYear,endYear,instiituteLocation,grades}])
        setOpenEducation(false)
        setDegree("")
        setInstitution("")
        setStartYear("")
        setEndYear("")
        setInstiituteLocation("")
        setGrades("")
        
    }
    const removeAchievment=(index)=>{
        setAchievments(achievements.filter((item,i)=>i!==index))   
    }
    const addAchievment=(e)=>{
        e.preventDefault()
        setAchievments([...achievements,{achievmentTitle,achievmentDesc,achievmentStartYear,achievmentEndYear}])
        setOpenAchievment(false)
        setAchievmentTitle("")
        setAchievmentDesc("")
        setAchievmentStartYear("")
        setAchievmentEndYear("")
        console.log(achievements)
    }

    const updateAbout= async ()=>{
        const res = await axios.put(import .meta.env.VITE_BACKEND+"/user/updateabout/"+userId,{about,education,achievements})
        if(res.status==204) alert("updated")
    }

    useEffect(()=>{
        window.scrollTo(0, 0)
        axios.get(import .meta.env.VITE_BACKEND+"/user/getabout/"+userId).then(res=>{
            setAbout(res.data.about)
            setEducation(res.data.education)
            setAchievments(res.data.achievements)
            }).catch(err=>console.log(err))
    },[])
    if(!about) return <Loading/>

    return (
        <div className='space-y-6 divide-y'>
            <div className='my-5 space-y-3'>
                <p className='text-xs font-bold md:text-base'>ABOUT</p>

                <textarea id="message" rows="4" value={about} onChange={e=>setAbout(e.target.value)} class="block p-2.5 w-full md:text-sm text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Describe yourself along with your skills,experiences and usp. "></textarea>

            </div>
            <div className='space-y-2'>
                <p className='flex justify-between font-medium md:text-lg'>Education
                    <button type='button'  onClick={()=>setOpenEducation(!openEducation)} ><FaPlus className='hover:bg-green-400 rounded-full p-0.5 border-2 hover:border-0 hover:text-white text-green-500 border-green-400' /></button>
                </p>
                {openEducation && <form onSubmit={(e)=>addEducation(e)} className='p-3 space-y-3 border-2 md:p-6 border-slate-200'>
                    <label for="countries" class="block mb-2 text-xs md:text-sm  font-medium text-gray-900 ">Select Degree *</label>
                    <select id="countries" value={degree} required onChange={e=>setDegree(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1  md:text-base md:p-2.5 ">
                        <option value="" selected>Choose Degree</option>
                        <option value={"Bachelor of Technology"} >Bachelor of Technology</option>
                        <option value={"Metric" } >Metric</option>
                        <option value={"High School"} >High School</option>
                        <option value={"PHD"} >PHD</option>
                    </select>
                    
                    <label for="institute" class="block mb-2 text-xs md:text-sm font-medium text-gray-900 ">Enter Institute/School Name</label>
                    <input type="text " value={institution} onChange={e=>setInstitution(e.target.value)}  name="institute" id="institute" class="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:p-2.5 p-1 md:text-base text-xs" placeholder="Enter Institute name" />

                    <label for="location" class="block mb-2 text-xs md:text-sm font-medium text-gray-900 ">Enter Institute/School Location</label>
                    <input type="text" value={instiituteLocation} onChange={e=>setInstiituteLocation(e.target.value)} required name="location" id="location" class="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:p-2.5 p-1 md:text-base text-xs" placeholder="Enter Institute Location" />

                    <div className='md:space-x-6 md:flex'>
                        <p>
                            <label for="startYear" class="block mb-2 text-xs md:text-sm font-medium text-gray-900 ">Start Year</label>
                            <input type="number" min={1999} value={startYear} required onChange={e=>setStartYear(e.target.value)} name="startYear" id="startYear" class="bg-gray-50 border border-gray-300 w-16  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-1 md:p-2.5 text-xs " placeholder="2021" />
                        </p>
                        <p>
                            <label for="endYear" class="block mb-2 text-xs md:text-sm font-medium text-gray-900 ">End Year (expected)</label>
                            <input type="number" min={startYear}  value={endYear} required onChange={e=>setEndYear(e.target.value)} name="endYear" id="endYear" class="bg-gray-50 border border-gray-300 w-16  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-1 md:p-2.5 text-xs " placeholder="2021" />
                        </p>
                        <p>
                            <label for="grades" class="block md:mb-2  text-xs md:text-sm font-medium text-gray-900 ">Final/Current Grades</label>
                            <input type="text"  value={grades} required onChange={e=>setGrades(e.target.value)} name="grades"  id="grades" class="bg-gray-50 border text-xs border-gray-300 md:w-24 w-16  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-1 md:p-2.5 " placeholder="8.5" />
                        </p>
                    </div>
                    <div className='space-x-6 md:flex '>
                        <button type="submit"   class="text-white text-xs hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] focus:outline-none bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]  font-medium rounded-lg  md:px-3 md:py-1  md:mr-2 mb-2 p-2  `  /.,MNB VCQ  ">Save</button>
                        <button type="reset" onClick={()=>setAbout(false)} class="text-[#0076CE] bg-white hover:bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  md:text-base text-xs md:px-3 md:py-1 md:mr-2 mb-2 border-[#0076CE] border-2 p-1">Cancel</button>
                    </div>


                </form>}
                {education && education.map((edu,index)=><div className='flex items-center justify-between px-6 py-2 border-2 border-slate-200'>
                    <div>
                        <p className='font-semibold'>{edu.degree}</p>
                        <p className='text-sm font-medium text-slate-600'>
                            {edu.institute}
                        </p>
                        <p className='text-sm font-medium text-slate-600'>{edu.instiituteLocation}</p>
                    </div>
                    <div>
                        <p className='font-medium'>{edu.startYear}-{edu.endYear}</p>
                        <p className='text-sm font-medium text-slate-600'>{edu.grades}</p>
                    </div>
                    <button onClick={()=>removeEducation(index)} className='text-red-800'>
                        <GrSubtractCircle  />
                    </button>
                </div>)}
                {!education.length && <p className='text-sm font-medium text-slate-600'>No Education Added</p>}
            </div>
            <div>
                <p className='flex justify-between text-lg font-medium'>Achievments
                    <button onClick={()=>setOpenAchievment(!openAchievment)}><FaPlus className='hover:bg-green-400 rounded-full p-0.5 border-2 hover:border-0 hover:text-white text-green-500 border-green-400' /></button>
                </p>
                { openAchievment &&  <form onSubmit={(e)=>addAchievment(e)} className='space-y-3 border-2 md:p-6 border-slate-200'>
                    

                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 ">Enter Title</label>
                    <input type="text" autoComplete required value={achievmentTitle} onChange={e=>setAchievmentTitle(e.target.value)} class="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="title " />

                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 ">Enter Small Description</label>
                    <input type="text" autoComplete required value={achievmentDesc} onChange={e=>setAchievmentDesc(e.target.value)} class="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Description" />

                    <div className='space-x-6 md:flex'>
                        <p>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Start Year</label>
                            <input type="number" value={achievmentStartYear} onChange={e=>setAchievmentStartYear(e.target.value)} min={1999} required name="email" id="email" class="bg-gray-50 border border-gray-300 w-24  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 " placeholder="2021" />
                        </p>
                        <p>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">End Year (expected)</label>
                            <input type="number" value={achievmentEndYear} onChange={e=>setAchievmentEndYear(e.target.value)} min={1999} required name="email" id="email" class="bg-gray-50 border border-gray-300 w-24  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 " placeholder="2021" />
                        </p>

                    </div>
                    <div className='space-x-6 md:flex '>
                        <button type="submit"  class="text-white  hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] focus:outline-none bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]  font-medium rounded-lg  md:px-3 md:py-1  md:mr-2 mb-2  ">Save</button>
                        <button type="reset" onClick={() => setOpenAchievment(false)} class="text-[#0076CE] bg-white hover:bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  md:text-base text-xs md:px-3 md:py-1 md:mr-2 mb-2 border-[#0076CE] border-2">Cancel</button>
                    </div>


                </form>}
                { achievements && achievements.map((achievment,index)=><div className='flex items-center justify-between px-6 py-2 border-2 border-slate-200'>
                    <div className='w-4/5'>
                        <p className='flex items-center font-semibold'><FaMedal/> {achievment.achievmentTitle}</p>
                        <p className='text-sm font-medium text-slate-600'>
                            {achievment.achievmentDesc}
                        </p>
                    </div>
                    <div>
                        <p className='font-medium'>{achievment.achievmentStartYear}-{achievment.achievmentEndYear}</p>
                        
                    </div>
                    <button type="button" onClick={()=>removeAchievment(index)} className='text-red-800'>
                        <GrSubtractCircle />
                    </button>
                </div>)}
                {!achievements.length && <p className='text-sm font-medium text-slate-600'>No Achievements added</p>}
            </div>
            <div className='space-x-6 md:flex '>
                        <button type="button " onClick={() => updateAbout()} class="text-white  hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] focus:outline-none bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]  font-medium rounded-lg  md:px-3 md:py-1  md:mr-2 mb-2  ">Update</button>
                        <button type="reset"  class="text-[#0076CE] bg-white hover:bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  md:text-base text-xs md:px-3 md:py-1 md:mr-2 mb-2 border-[#0076CE] border-2">Back</button>
                    </div>

        </div>
    )
}

export default AboutModifiation;
