import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux"

const BasicModification = () => {

    const { userId } = useSelector(state => state.auth)
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [streetAddress, setStreetAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [country, setCountry] = useState("")
    const [skills, setSkills] = useState(new Set([]))

    const navigate=useNavigate()
    
    const updateBasic = async (e) => {
        e.preventDefault()
        const location = [streetAddress, city, state, country, zipCode]
        const res = await axios.put(`http://localhost:3001/user/updatebasic/${userId}`, { fullname, location })
        if( res.status===204){
            alert("updated")
        } 
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/user/getbasic/${userId}`).then((res) => {

            setFullname(res.data.fullname)
            setUsername(res.data.username)
            setEmail(res.data.email)
            setPhone(res.data.phone)
            setStreetAddress(res.data.location[0])
            setCity(res.data.location[1])
            setState(res.data.location[2])
            setZipCode(res.data.location[4])
            setCountry(res.data.location[3])
        })

    }, [])


    return (
        <form onSubmit={(e) => updateBasic(e)}>
            <table>
                <thead>
                    <tr >
                        <td colSpan={3} className="mt-2 text-sm font-medium md:text-lg">
                            Basic Details
                        </td>
                    </tr>
                </thead>
                <tr className="flex ">

                    {/* <div class="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                    </div>
                    <div class="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                    </div> */}

                </tr>
                <tr className="mb-6">
                    <td className="w-20 text-xs md:w-28 md:text-base ">
                        Full Name:
                    </td>

                    <td className="hidden md:w-44 md:mr-8 md:table-cell"> <input type="text" value={fullname} onChange={e => setFullname(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder="John" required /></td>
                </tr>
                <tr className="s">
                    <td className="text-xs md:w-32 md:text-base ">
                        Email:
                    </td>
                    <td className="w-32 text-xs font-medium md:w-40 md:text-base text-slate-500">{email} </td>
                </tr>
                <tr className="s">
                    <td className="text-xs md:w-32 md:text-base ">
                        Username:
                    </td>
                    <td className="w-32 text-xs font-medium md:w-40 md:text-base text-slate-500">{username} </td>
                </tr>
                <tr className="s">
                    <td className="text-xs md:w-32 md:text-base">
                        Phone:
                    </td>
                    <td className="w-32 text-xs font-medium md:w-40 md:text-base text-slate-500">{phone} </td>

                </tr>
            </table>
            <table>
                <thead>
                    <thead>
                        <tr>
                            <td colSpan={3} className="mt-2 text-sm font-medium md:text-lg">
                                Location
                            </td>
                        </tr>
                    </thead>
                </thead>
                <tbody>
                    <tr className="mb-6">
                        <td className="w-20 text-xs md:w-32 md:text-base">
                            Country:
                        </td>

                        <td className="hidden md:table-cell">
                            <select id="countries" value={country} required onChange={e => setCountry(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">
                                <option value={""} selected>Choose a country</option>
                                <option value={"India"} >India</option>
                                <option value={"USA"} >USA</option>
                                <option value={"Bhutan"} >Bhutan</option>
                                <option value={"Nepal"} >Nepal</option>

                            </select>
                        </td>

                    </tr>
                    <tr>
                        <td className="text-xs md:w-32 md:text-base">
                            State:
                        </td>

                        <td className="hidden mr-8 w-44 md:table-cell"> <input type="text" value={state} onChange={e => setState(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " required /></td>

                    </tr>
                    <tr>
                        <td className="text-xs md:w-32 md:text-base">
                            City:
                        </td>

                        <td className="hidden mr-8 w-44 md:table-cell"> <input value={city} onChange={e => setCity(e.target.value)} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " required /></td>

                    </tr>
                    <tr>
                        <td className="text-xs md:w-32 md:text-base">
                            Street Address :
                        </td>

                        <td className="hidden mr-8 w-44 md:table-cell"> <input autoComplete="street-address" value={streetAddress} onChange={e => setStreetAddress(e.target.value)} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " required /></td>

                    </tr>
                    <tr>
                        <td className="text-xs md:w-32 md:text-base">
                            Zip Code :
                        </td>

                        <td className="hidden mr-8 w-44 md:table-cell"> <input value={zipCode} onChange={e => setZipCode(e.target.value)} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " required /></td>

                    </tr>
                </tbody>
            </table>
            
            <div className='mt-4 space-x-6 md:flex '>
                <button type="button "  class="text-white  hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] focus:outline-none bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]  font-medium rounded-lg  md:px-3 md:py-1  md:mr-2 mb-2  ">Update</button>
                <button type="reset" onClick={() => navigate(-1)} class="text-[#0076CE] bg-white hover:bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  md:text-base text-xs md:px-3 md:py-1 md:mr-2 mb-2 border-[#0076CE] border-2">Back</button>
            </div>

        </form>
    )
}

export default BasicModification;