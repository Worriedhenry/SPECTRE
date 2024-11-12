import React, { useEffect, useState } from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import SearchResult from "../Components/ServiceDescription/SearchResult"
import Recommended from "../Components/ServiceDescription/Recommended"
import { useParams } from "react-router-dom"
import axios from "axios"
import Loading from "../Components/Loading"
import ServiceReview from "../Components/ServiceDescription/Revviews"
export default function ShowService({socket}) {
    const [data, setData] = useState(false)
    const { serviceId } = useParams()
    const topic = "More from Micheal";

    useEffect(() => {
        axios
            .get((import .meta.env.VITE_BACKEND_GATEWAY+"/services" ||import .meta.env.VITE_BACKEND)+"/services/getservice/" + serviceId)
            .then(res => {
                if (res.status == 200) {
                    setData(res.data)
                }
            })
            .catch(err => console.error(err));
    }, [serviceId])


    return (
        <div className="">
            <Header socket={socket} />
            {!data ? <div><Loading/></div> :
                <>
                    <SearchResult data={data} serviceId={serviceId} />
                    <ServiceReview data={data.serviceReviews} serviceId={data._id} />
                    {data.serviceProvider?.services?.length>1 && <Recommended topic={topic} serviceId={data.id} user={data?.serviceProvider} />}
                    
                    <Footer />
                </>
            }
            
        </div>
    )
}