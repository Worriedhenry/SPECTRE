import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux"
import { GrSubtractCircle } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
const ContactModify = () => {

    const { userId } = useSelector(state => state.auth)
    const [openSocials, setOpenSocials] = useState(false)
    const [socialTitle, setSocialTitle] = useState("")
    const [socialValue, setSocialValue] = useState("")
    const [socials, setSocials] = useState([{title:"Instagram",value:""},{title:"Facebook",value:""},{title:"Twitter",value:""},{title:"LinkedIn",value:""},{title:"Website",value:""}])

    const navigate=useNavigate()
    

    useEffect(() => {
        axios.get(`http://localhost:3001/user/getcontact/${userId}`).then((res) => {

        })
    }, [])

    const handleSocialsChange = (title, newValue) => {
        setSocials(prevState => {
          return prevState.map((social) => {
            if (social.title === title) {
              return { ...social, value: newValue };
            }
            return social; 
          });
        });
      };

     const addNewSocial = (e) => {
        e.preventDefault()
        setSocials([...socials,{title:socialTitle,value:socialValue}])
        setSocialTitle("")
        setSocialValue("")
        setOpenSocials(false)
     } 
    return (
        <div>
            <table>
                <thead>
                    <th colSpan={3} className="text-sm text-left md:text-lg " >Social Media </th>
                </thead>
                <tbody>
                    {socials && socials.map((social, index) =>
                        <>
                            <tr>
                                <td className="w-32 text-xs md:w-32 md:text-base ">{social.title}</td>

                                <td className="mr-8  md:w-44 md:table-cell"> <input type="text" value={social.value} onChange={(e) =>handleSocialsChange(social.title, e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder={social.title+" url"}/></td>
                                <td>
                                {index > 4 && <GrSubtractCircle onClick={() => setSocials(prevState => prevState.filter((s) => s.title !== social.title))} title={"Remove "+ social.title} className="text-red-800 border-red-600 b-2 rounded-full bg-white hover:text-white hover:bg-red-600 " />}
                                </td>
                            </tr >

                        </>
                    )}
                </tbody>
            </table>
                    {openSocials && <form onSubmit={(e)=>addNewSocial(e)} className="space-y-2 my-2">
                        <label htmlFor="social-Title" class="text-sm font-medium text-gray-900 " >Title</label>
                        <input type="text" value={socialTitle} onChange={(e) => setSocialTitle(e.target.value)} id={socialTitle} class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder="Enter Title" required />  
                        <label htmlFor="social-Url" class="text-sm font-medium text-gray-900" >Url</label> 
                        <input type="url" value={socialValue} onChange={(e) => setSocialValue(e.target.value)} id={socialValue} class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder={"Enter "+socialTitle + " url"} required />
                        <button type="submit" className="text-[#0076CE] hover:text-white hover:bg-[#0076CE]  border-2 border-[#0076CE] text-xs px-2 py-1  md:text-sm  font-medium rounded-lg    md:mr-2 mb-2  ">Add Social</button>  
                    </form>}
                    {!openSocials && <button type="button " onClick={() => setOpenSocials(true)} title="Add social" className="text-[#0076CE] hover:text-white hover:bg-[#0076CE]  border-2 border-[#0076CE] text-xs px-2 py-1  md:text-sm  font-medium rounded-lg    md:mr-2 mb-2 ">Create Social</button>}
            <table>
                <thead>
                    <th colSpan={3} className="text-sm text-left w- md:text-lg ">Payment Address </th>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-32 text-xs md:text-base md:w-44">UPI ID:</td>

                        <td className="mr-8  w-44 md:table-cell"> <input type="url" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder="John" required /></td>

                    </tr>
                    <tr>
                        <td className="w-32 text-xs md:text-base md:w-44">Bank Account :</td>

                        <td className="mr-8  w-44 md:table-cell"> <input type="url" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder="John" required /></td>
                    </tr>
                    <tr>
                        <td className="w-40 text-xs md:text-base md:w-44">Bank Code:</td>
                        <td className="hidden mr-8 w-44 md:table-cell"> <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder="John" required /></td>
                    </tr>
                    <tr>
                        <td className="text-xs md:w-32 md:text-base">Paypal ID:</td>

                        <td className="mr-8  w-44 md:table-cell"> <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder="John" required /></td>

                    </tr>
                </tbody>
            </table>
            <div className='mt-4 space-x-6 md:flex '>
                <button type="button " class="text-white  hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] focus:outline-none bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-sm ms:text-base font-medium rounded-lg md:px-3 px-2 py-1  md:mr-2 mb-2  ">Update</button>
                <button type="reset" onClick={() => navigate("/profile/"+userId)} class="text-[#0076CE] bg-white hover:bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  md:text-base text-xs md:px-3 px-2 py-1 md:py-1 md:mr-2 mb-2 border-[#0076CE] border-2">Back</button>
            </div>
        </div>
    )
}

export default ContactModify;