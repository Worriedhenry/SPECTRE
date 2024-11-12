import React,{useState,useEffect,useRef} from "react";
import Header from "../Components/Header";
import axios from "axios";
import Footer from "../Components/Footer";
import ServiceSummary from "../Components/Search/SearchCard";
import Filters from "../Components/Search/Filters";
import { useNavigate,useSearchParams } from "react-router-dom"


const SearchPage = ({socket}) => {
    const [services, setServices] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get("query")?searchParams.get("query"):"");
    const lastElementRef = useRef(null)
    const [stopObserver, setStopObserver] = useState(false)

    const navigate=useNavigate()

    useEffect(() => {
        if(!searchParams.get("query")){
            setServices(null)
            return 
        }

        axios.get((import.meta.env.VITE_BACKEND_GATEWAY+ "/search/" || import.meta.env.VITE_BACKEND ) + "/search/" +searchTerm+"/1").then(
            (res) => {
                setServices(res.data)
                // console.log(res.data)
            }
        ).catch((err) => console.log(err))

    },[searchParams.get("query")])
    

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



    const fetchMoreData = async (currentTotal) => {
        const res= await axios.get((import.meta.env.VITE_BACKEND_SEARCH || import.meta.env.VITE_BACKEND )+"/search/"+searchTerm+"/"+parseInt(services?.length+1)/5)
        if(res.data.length!==5){
            setStopObserver(true)
            lastElementRef.current = null
        }else{
            setServices(prevServices => [...prevServices, ...res.data]);
        }
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate("/search/?query="+searchTerm)
        
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-100">
            <Header socket={socket} />
            {/* <div className="flex flex-grow w-full p-5 bg-black " > */}
            <div className=" w-full bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  py-5 flex" >
                <div class=" mx-auto rounded-lg w-full overflow-hidden ">
                    <div class="md:flex md:w-full">
                        <div class=" w-3/4 mx-auto">
                            <form className="flex w-full" onSubmit={(e)=>handleSubmit(e)} >
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                                <div class="flex relative left-7 items-center  pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} id="default-search" class="block md:p-4 p-2 md:pl-10 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." required />
                                <button type="submit" class="text-white  relative right-16 my-1  md:right-20  bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:px-4 md:py-2 px-2 ">Search</button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full pt-5 m-0 min-h-fit md:mb-5 md:space-x-7 ">
                <div className="hidden min-h-full p-2 bg-white shadow-xl md:w-1/6 rounded-2xl min-h-48 ">
                    <Filters/>

                </div>
                <div className="w-5/6 pb-6 m-0 bg-white shadow-xl md:w-5/6 md:h-full rounded-2xl ">
                    <div className="p-3">
                        <h2 className="font-medium md:text-lg">
                            Top Results
                        </h2>
                        <p className="text-slate-500">
                            Showing {services?.length} results
                        </p>
                    </div>
                    <div className="h-[70vh] overflow-y-scroll space-y-4 hide-scroll-bar snap-y snap-mandatory">
                        {services && services.map((service,index) =><ServiceSummary ref={index == services.length - 1 ? lastElementRef : null} data={service} location={service?.serviceProvider[0]?.location[0]} profilePic={service?.serviceProvider[0]?.profilePic}
                key={index} userId={service?.serviceProvider[0]?.userId} username={service?.serviceProvider[0]?.username} />)
                }
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SearchPage;