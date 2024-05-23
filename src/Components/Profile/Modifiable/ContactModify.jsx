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
    const [editPayment, setEditPayment] = useState(false)
    const [paymentTitle, setPaymentTitle] = useState("")
    const [paymentValue, setPaymentValue] = useState("")
    const [payments, setPayments] = useState([])
    const [socials, setSocials] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
        axios.get(import .meta.env.VITE_BACKEND+`/user/getcontact/${userId}`).then((res) => {
            if (res.status === 200) {
                setPayments(res.data.payment)
                setSocials(res.data.socials)
            }
        })
    }, [])

    const updateContact = async () => {
        const res = await axios.put(import .meta.env.VITE_BACKEND+`/user/updatecontact/${userId}`, { payments, socials })
        if (res.status==204){
            alert("Data modified successfully");
            } 
    }

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

    const handlePaymentChange = (title, newValue) => {
        setPayments(prevState => {
            return prevState.map((payment) => {
                if (payment.title === title) {
                    return { ...payment, value: newValue };
                }
                return payment;
            });
        });
    }

    const addNewPayment = (e) => {
        e.preventDefault()
        setPayments([...payments, { title: paymentTitle, value: paymentValue }])
        setPaymentTitle("")
        setPaymentValue("")
        setEditPayment(false)
    }

    const addNewSocial = (e) => {
        e.preventDefault()
        setSocials([...socials, { title: socialTitle, value: socialValue }])
        setSocialTitle("")
        setSocialValue("")
        setOpenSocials(false)
    }
    return (
        <div>
            <table className="space-y-2">
                <thead>
                    <th colSpan={3} className="text-sm text-left md:text-lg " >Social Media </th>
                </thead>
                <tbody>
                    {socials && socials.map((social, index) =>
                        <>
                            <tr>
                                <td className="w-32 text-xs md:w-32 md:text-base ">{social.title}</td>

                                <td className="mr-8  md:w-44 md:table-cell"> <input type="text" value={social.value} onChange={(e) => handleSocialsChange(social.title, e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder={social.title + " url"} /></td>
                                <td>
                                    {<GrSubtractCircle onClick={() => setSocials(prevState => prevState.filter((s) => s.title !== social.title))} title={"Remove " + social.title} className="text-red-800 border-red-600 b-2 rounded-full bg-white hover:text-white hover:bg-red-600 " />}
                                </td>
                            </tr >

                        </>
                    )}
                </tbody>
            </table>
            {openSocials && <form onSubmit={(e) => addNewSocial(e)} className="space-y-2 my-2">
                <label htmlFor="social-Title" class="text-sm font-medium text-gray-900 " >Title</label>
                <input type="text" value={socialTitle} onChange={(e) => setSocialTitle(e.target.value)} id={socialTitle} class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder="Enter Title" required />
                <label htmlFor="social-Url" class="text-sm font-medium text-gray-900" >Url</label>
                <input type="url" value={socialValue} onChange={(e) => setSocialValue(e.target.value)} id={socialValue} class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder={"Enter " + socialTitle + " url"} required />
                <button type="submit" className="text-[#0076CE] hover:text-white hover:bg-[#0076CE]  border-2 border-[#0076CE] text-xs px-2 py-1  md:text-sm  font-medium rounded-lg    md:mr-2 mb-2  ">Add Social</button>
                <button type="reset" onClick={() => setOpenSocials(false)} className="text-red-600 hover:text-white hover:bg-red-600  border-2 border-red-600 text-xs px-2 py-1  md:text-sm  font-medium rounded-lg    md:mr-2 mb-2  ">Cancle</button>
            </form>}
            {!openSocials && <button type="button " onClick={() => setOpenSocials(true)} title="Add social" className="text-[#0076CE] hover:text-white hover:bg-[#0076CE]  border-2 border-[#0076CE] text-xs px-2 py-1  md:text-sm  font-medium rounded-lg    md:mr-2 mb-2 ">Create Social</button>}
            <table className="my-2">
                <thead>
                    <th colSpan={3} className="text-sm text-left w- md:text-lg ">Payment Address </th>
                    {/* <th colSpan={5} className="text-xs text-gray-300 text-left w- md:text-sm" >Adding Payment addresses is required to post any service</th> */}
                </thead>
                <tbody className="space-y-2 ">
                    <tr className="text-xs text-gray-600 text-left">
                        *Adding Payment addresses is required to post any service
                    </tr>
                    {payments && payments.map((payment, index) =>
                        <tr>
                            <td className="w-32 text-xs md:text-base md:w-44">UPI ID:</td>

                            <td className="mr-8  w-44 md:table-cell"> <input type="url" id="first_name" onChange={(e) => handlePaymentChange(payment.title, e.target.value)} value={payment.value} class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder="John" required /></td>
                            <td>
                                {<GrSubtractCircle onClick={() => setPayments(prevState => prevState.filter((s) => s.title !== payment.title))} title={"Remove " + payment.title} className="text-red-800 border-red-600 b-2 rounded-full bg-white hover:text-white hover:bg-red-600 " />}
                            </td>

                        </tr>
                    )}

                </tbody>
            </table>
            {editPayment && <form onSubmit={(e) => addNewPayment(e)} className="space-y-2 my-2">
                <label htmlFor="social-Title" class="text-sm font-medium text-gray-900 " >Payment name</label>
                <input type="text" value={paymentTitle} onChange={(e) => setPaymentTitle(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder="Enter Title" required />
                <label htmlFor="social-Url" class="text-sm font-medium text-gray-900" >Address</label>
                <input type="text" value={paymentValue} onChange={(e) => setPaymentValue(e.target.value)} id={socialValue} class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder={"Enter " + paymentTitle + " Address"} required />
                <button type="submit" className="text-[#0076CE] hover:text-white hover:bg-[#0076CE]  border-2 border-[#0076CE] text-xs px-2 py-1  md:text-sm  font-medium rounded-lg    md:mr-2 mb-2  ">Add Payment</button>
                <button type="reset" onClick={() => setEditPayment(false)} className="text-red-600 hover:text-white hover:bg-red-600  border-2 border-red-600 text-xs px-2 py-1  md:text-sm  font-medium rounded-lg    md:mr-2 mb-2  ">Cancle</button>
            </form>}
            {!editPayment && <button type="button " onClick={() => setEditPayment(true)} title="Add social" className="text-[#0076CE] hover:text-white hover:bg-[#0076CE]  border-2 border-[#0076CE] text-xs px-2 py-1  md:text-sm  font-medium rounded-lg    md:mr-2 mb-2 ">Create Payment</button>}
            <div className='mt-4 space-x-6 md:flex '>
                <button type="button " onClick={()=>updateContact()} className="text-white  hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] focus:outline-none bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-sm ms:text-base font-medium rounded-lg md:px-3 px-2 py-1  md:mr-2 mb-2  ">Update</button>
                <button type="reset" onClick={() => navigate("/profile/" + userId)} className="text-[#0076CE] bg-white hover:bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  md:text-base text-xs md:px-3 px-2 py-1 md:py-1 md:mr-2 mb-2 border-[#0076CE] border-2">Back</button>
            </div>
        </div>
    )
}

export default ContactModify;