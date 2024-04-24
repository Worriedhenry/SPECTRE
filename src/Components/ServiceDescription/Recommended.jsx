import React, { useState, useRef, useEffect, forwardRef } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Recommended({ user, topic,serviceId }) {
    const [stopObserver, setStopObserver] = useState(false)
    const [services, setServices] = useState(false)
     const lastElementRef = useRef(null)
    
    

    const fetchMoreData = (currentTotal) => {
        axios.get(`http://localhost:3001/user/getservices/${user._id}/${currentTotal}/2`).then(res => {
          if (res.status === 200) {
            if (res.data.length === 0) {
              lastElementRef.current = null;
              setStopObserver(true);
            } else {
              setServices(prevServices => [...prevServices, ...res.data]);
            }
          }
        });
      };

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              console.log('Last element is intersecting with the viewport!');
              fetchMoreData(services.length);
            }
          },
          { threshold: 0.5, rootMargin: "0px" }
        );
      
        if (lastElementRef.current && !stopObserver) {
          observer.observe(lastElementRef.current);
        }
        if(stopObserver) observer.disconnect()
      
        return () => {
          if (observer) {
            observer.disconnect(); // Stop observing when the component unmounts
          }
        };
      }, [services, lastElementRef, stopObserver]);
    


    useEffect(() => {
        axios
            .get("http://localhost:3001/user/getservices/" + user._id+"/0/4")
            .then(res => {
                if (res.status == 200) {
                    setServices(res.data)
                }
            })
            .catch(err => console.error(err));
    }, [])

    const data = {
        serviceName: "Web Development",
        serviceProvider: "theDesignerz",
        serviceRating: 4,
        serviceTags: ["Website", "Design", "PHP"],
        serviceBrief: "Web development is the building and maintenance of websites; it's the job of a web developer to create, design, and maintain the look and functionality of a website. ",
        serviceLocation: "Delhi,India"
    }

    return (
        <div className="mx-6 my-10 space-y-8 bg-white md:mx-10">
            <h1 className="text-xl font-bold md:text-2xl">More from <span className="bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)] text-transparent bg-clip-text">Micheal</span></h1>
            <div className="flex px-2 py-6 pb-6 space-x-2 overflow-x-scroll overflow-y-hidden snap-x flex-nowrap h-fit md:h-80 hide-scroll-bar">
                {services.length > 0 && services.map((service, index) => 
                    <ServiceSummary data={service} key={index} user={user} ref={index === services.length - 1 ? lastElementRef : null} />
                )}






            </div>
        </div>
    )
}
function RecommendedCard() {
    return (
        <div className="md:w-[26%] hidden cursor-default md:min-w-[26%]  hover:rounded-2xl hover:scale-105  space-y-5  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] md:h-full rounded-3xl mt-3 md:flex flex-col ">
            <img className="hidden rounded-2xl md:h-2/5" src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80" />
            <div className="flex justify-between px-5 text-sm font-bold md:text-base">
                <p >
                    Micheal Jackson
                </p>
                <p>
                    ₹4,370
                </p>
            </div>
            <p className="px-5 text-sm md:text-base ">I will do business evaluation and corporate services</p>
            <div className="px-5 mb-5">
                <button type="button" class="text-white bg-[#0076CE]  font-medium rounded-lg text-xs md:text-lg w-full py-2 text-center">View services</button></div>
        </div>
    )
}

const ServiceSummary =forwardRef( ({ data, user },ref) => {

    const navigate = useNavigate()


    const handleClick = () => {
        navigate("/service/" + data._id)
        window.scrollTo(0, 0)
    }

    return (
        <div ref={ref} className="flex flex-col  snap-start min-w-[50%] w-2/3  md:w-1/3 md:snap-center hover:border-0 hover:border-[#0076CE] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[#0076CE_0px_3px_8px] md:min-w-[33%] p-2 space-y-3 md:px-2 border-zinc-100 md:h-full md:py-3 ">

            <div className="md:w-full">
                <p>
                    <span className="text-sm font-bold md:text-lg bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-transparent bg-clip-text  ">{data.serviceName} </span>
                    <span onClick={()=>navigate("/profile/"+user._id+"")} className="text-sm cursor-pointer text-slate-500 md:text-lg">@{user.username} </span>
                </p>
                <p className="flex items-center space-x-1 text-xs md:text-base">
                    {data.rating ? data.rating : 0} <span></span> <FaStar className="text-[#0076CE] " />
                </p>
                <p className="text-xs md:text-base ">
                    {user.location[2]},{user.location[3]}
                </p>
                <p className="text-sm font-medium md:text-base text-[#0076CE]" > {data.serviceTags.map((e) => <span>{e}. </span>)} </p>

                <p dangerouslySetInnerHTML={{ __html: data.serviceBrief }} className="text-overflow-{ellipsis|clip} text-xs line-clamp-2  md:line-clamp-3 md:text-sm">
                   
                </p>
            </div>
            <div className="flex flex-col md:justify-between text-right">
                <div className="flex  items-center justify-start md:flex-row md:mb-2">
                    <p className="pr-0 text-xs font-bold md:text-left md:text-lg">{data.serviceCostCurrency} {data.serviceCost} </p>
                    <p className=" text-xs text-left pl-2 font-medium md:block md:w-2/6 text-slate-500 md:text-sm">{data.serviceCostDuration}</p>
                </div>
                <button onClick={()=>window.open("http://localhost:5173/service/"+data._id,"_blank","noopener,noreferrer")}  type="button" class="bg-white text-[#0076CE] border-2 border-[#0076CE]  hover:text-white hover:bg-[#0076CE]   font-medium rounded-lg text-xs md:px-3 md:py-1.5 px-2 py-1 md:mr-2 mb-2 md:text-base ">View</button>
            </div>

        </div>

    )
})

