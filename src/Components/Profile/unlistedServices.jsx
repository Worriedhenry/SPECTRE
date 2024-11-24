import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";


export default function UnlistedServices() {
    const [services, setServices] = React.useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_GATEWAY + "/services" + "/services/unlistedservices").then(res => setServices(res.data))
    }, [])


    return (
        <div className="space-y-6">
            <ul>
                {
                    services.map((service, ind) => {
                        return (
                            <div className="flex w-full justify-between  p-2 space-x-3 border-2 snap-start md:px-2 border-zinc-100 md:h-32 md:py-3 ">
                                <div className="justify-center hidden w-1/5 h-full md:flex md:max-w-xs ">
                                    <img className="h-full rounded-full aspect-square " src={service.profilePic ? service.profilePic : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
                                </div>
                                <div className="md:w-2/3">
                                    <p>
                                        <span onClick={() => navigate(`/profile/${editor._id}`)} className=" cursor-pointer text-sm font-medium md:text-lg bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent">{service.serviceName}  </span>

                                    </p>
                                    <span className="text-sm text-slate-500 md:text-base">by {service?.admin?.username} </span>
                                </div>
                                <div className="flex flex-col justify-between text-right">

                                    <button type="button" onClick={() => navigate("/service/" + service._id)} class="text-white bg-[#0076CE]   font-medium rounded-lg text-xs md:px-3 md:py-1.5 px-2 py-1 md:mr-2 mb-2 md:text-base ">View</button>
                                </div>

                            </div>
                        )
                    })
                }
            </ul>
            {services.length === 0 && <p className="text-center text-gray-500 font-medium italic ">No Unlisted Services</p>}
        </div>
    )
}