import React, { useEffect, useState, useRef } from "react";
import ServiceSummary from "../Search/SearchCard";
import axios from "axios";
import Loading from "../Loading";

export default React.memo(function userServices({ userId, profilePic, location, username }) {

    const lastElementRef = useRef(null)

    const [services, setServices] = useState(null)
    const [stopObserver, setStopObserver] = useState(false)
    useEffect(() => {
        console.log("running")
        axios
            .get("http://localhost:3001/user/getservices/" + userId + "/0/3")
            .then(res => {
                if (res.status == 200) {
                    setServices(res.data)
                }
            })
            .catch(err => console.error(err));
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {

                    fetchMoreData(services.length);
                }
            },
            { threshold: 0.5 }
        );

        if (lastElementRef.current) {
            observer.observe(lastElementRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect(); // Stop observing when the component unmounts
            }
        }
    }, [services, lastElementRef, stopObserver])


    const fetchMoreData = (currentTotal) => {
        axios.get(`http://localhost:3001/user/getservices/${userId}/${currentTotal}/2`).then(res => {
            if (res.status === 200) {
                if (res.data.length === 0) {
                    lastElementRef.current = null;
                    setStopObserver(true);
                } else {
                    setServices(prevServices => [...prevServices, ...res.data]);
                }
            }
        }
        )
    }
    
    return (
        <div className="md:max-h-[600px] hide-scroll-bar overflow-y-auto">
            {!services && <Loading />}
            {services && services.length === 0 && <p className="text-center text-gray-500 font-medium italic ">No Services</p>}
            {services && services.length > 0 && services.map((service, index) => <ServiceSummary ref={index == services.length - 1 ? lastElementRef : null} data={service} location={location} profilePic={profilePic}
                key={index} userId={userId} username={username} />)}

        </div>
    );
}   )