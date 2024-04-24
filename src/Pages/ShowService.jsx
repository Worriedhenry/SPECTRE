import React, { useEffect, useState } from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import SearchResult from "../Components/ServiceDescription/SearchResult"
import Recommended from "../Components/ServiceDescription/Recommended"
import { useParams } from "react-router-dom"
import axios from "axios"
import Loading from "../Components/Loading"
import ServiceReview from "../Components/ServiceDescription/Revviews"
export default function ShowService() {
    const [data, setData] = useState(false)
    const { serviceId } = useParams()
    const topic = "More from Micheal";

    useEffect(() => {
        axios
            .get("http://localhost:3001/services/getservice/" + serviceId)
            .then(res => {
                if (res.status == 200) {
                    setData(res.data)
                }
            })
            .catch(err => console.error(err));
    }, [serviceId])

    // console.log(data?.serviceProvider)

    return (
        <div className="">
            <Header />
            {!data ? <div><Loading/></div> :
                <>
                    <SearchResult data={data} />
                    <ServiceReview data={data.serviceReviews} serviceId={data._id} />
                    {data.serviceProvider?.services?.length>1 && <Recommended topic={topic} serviceId={data.id} user={data?.serviceProvider} />}
                    <Recommended topic="Recommended for you"  user={data?.serviceProvider} />
                    <Footer />
                </>
            }
            
        </div>
    )
}