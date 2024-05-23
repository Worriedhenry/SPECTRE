import React, { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import Loading from "../Loading";
const Contact = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(false)


    const params = useParams();
    const userId = params.userId;


    useEffect(() => {
        getContact()
    }, [userId])

    async function getContact() {
        setLoading(true)
        const res = await axios.get(import .meta.env.VITE_BACKEND+"/user/getcontact/" + userId)
        setLoading(false)
        if (res.status === 200) {
            setData(res.data)
        }
    }

    if (!data) {
        return (
            <div className="flex items-center justify-center h-1/2">
                <Loading />
            </div>
        )
    }
    console.log(data)

    return (
        <div>
            <table>

                <tbody>
                    <tr>
                        <td className="w-32 font-medium ">Phone:</td>
                        <td className="font-medium max-w-32 text-slate-700">{data.phone}</td>
                    </tr>
                    <tr>
                        <td className="font-medium ">Address:</td>
                        <td className="font-medium max-w-46 text-slate-700 line-clamp-2">{data.location} </td>
                    </tr>
                    <tr>
                        <td className="font-medium ">Email:</td>
                        <td className="font-medium max-w-46 text-slate-700">{data.email}</td>
                    </tr>
                    <tr>
                        <td className="font-medium ">Site:</td>
                        <td className="font-medium max-w-46 text-slate-700">{data.personalSite ? data.personalSite : "N/A"}</td>
                    </tr>

                </tbody>
            </table>

            <table>
                <thead>
                    <th className="text-left" >Social Media </th>
                </thead>
                <tbody>
                    {data.socials && data.socials.map((social, index) =>

                        <tr>
                            <td className="w-32 font-medium ">{social.title}:</td>
                            <td className="font-medium max-w-32 text-slate-700"><a href={social.value} target="_blank">{social.value}</a>
                            </td>
                        </tr>

                    )

                    }
                    {!data?.socials?.length && <td className="w-32 font-medium ">N/A</td>}
                </tbody>
            </table>
            <table>
                <thead>
                    <th colSpan={2} className="text-left w-36">Payment Address </th>
                </thead>
                <tbody>
                    {
                        data.payment && data.payment.map((payment, index) => 
                            <tr>
                                <td className="w-32 font-medium ">{payment.title}:</td>
                                <td className="font-medium max-w-32 text-slate-700">{payment.value}</td>
                            </tr>
                        )
                    }
                    {!data?.payment?.length && <td className="w-32 font-medium ">N/A</td>}
                </tbody>
            </table>

        </div>
    )
}

export default React.memo(Contact);