import React,{useState,useEffect} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function SearchComponent() {
    const [caData, setCAData] = useState([]);
    const [Data, setData] = useState([]);
    const [NoSuggestion,setNoSuggestion]=useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const navigate=useNavigate()
    

    useEffect(() => {
        // I want to implemet debounce here
        const getData = setTimeout(() => {
            axios
            .get(import .meta.env.VITE_BACKEND+`/searchname/${searchTerm}`)
            .then((response) => {
              setSuggestions(response.data);
            });
          }, 700)

          return () => clearTimeout(getData)
    }, [searchTerm]);


    const handleInputChange = (value) => {
        // setNoSuggestion(true)
        setSearchTerm(value);
        
    }
    const handleSearch=async ()=>{
        if (searchTerm.length>0){
            navigate("search/?query="+searchTerm)
        }
        

    }
    const handleSuggestionClick = (suggestion) => {
        // setNoSuggestion(false)
        setSearchTerm(suggestion.serviceName); // Update the 
      }
    return (
        <div className="md:px-20 px-8 md:my-36 flex flex-col md:flex-row  md:py-10 bg-[#FAFBFC] ">
            <div className="left md:max-w-[50%]">
                <p className="relative inline-block text-2xl font-bold leading-normal text-black md:text-left sm:text-center md:text-6xl ">
                    Find <span className="text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)]  md:text-6xl ">Services</span> available online
                </p>
                <p className=" text-[#616161] mt-5 text-xs md:text-base ">
                    <span className="text-sm font-bold md:text-xl">Connect</span> with us where your services are listed and visible to a myriad of businesses seeking services
                </p>
                <div className="mt-12">
                    <form onSubmit={handleSearch}>
                        <div class="max-w-xl ">
                            <div class="flex rounded-md overflow-hidden w-full">
                                <input type="text" value={searchTerm} onChange={(e)=>handleInputChange(e.target.value)} class="w-full rounded-md px-6 font-bold text-sm md:text-base rounded-r-none border-2 border-[#BFBFBF]" placeholder="Search service" />
                                <button onClick={()=>handleSearch} className="hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] focus:outline-none bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white md:px-14 px-8 md:text-lg text-xs font-semibold py-4 rounded-r-md">Search</button>
                            </div>
                        </div>
                        {searchTerm  &&<div className="relative mt-2">
                            {suggestions.length==0 && NoSuggestion && <div>
                                No user Found
                                </div>}
                            {suggestions.map((suggestion, index) => (
                                <div key={index} onClick={() => handleSuggestionClick(suggestion)} className="px-6 py-2 border border-gray-300 cursor-pointer hover:bg-gray-100">
                                    {suggestion.serviceName}
                                </div>
                            ))}
                        </div>}
                    </form>
                </div>
            </div>
            <div className="mt-5 right h-fit md:mt-0">
                <ul className="flex h-full space-x-4">
                    <li className="flex items-end"><img className="h-[90%]" src='images/Landing_triplet_left.webp' /></li>
                    <li className="flex items-start"><img className="h-[90%]" src='images/Landing_triplet_middle.webp' /></li>
                    <li className="flex items-center"><img className="h-[90%]" src='images/Landing_triplet_right.webp' /></li>

                </ul>
            </div>
        </div>
    )
}
