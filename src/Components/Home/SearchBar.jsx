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
        axios.get('https://mcs-backend-9d1v.onrender.com/searchAll')
            .then((response) => setCAData(response.data))
            .catch((error) => console.error(error));
    }, []);
    const handleInputChange = (value) => {
        setNoSuggestion(true)
        setSearchTerm(value);
        const suggestedCAs = caData.filter((ca) =>
            ca.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions(suggestedCAs);
    }
    const handleSearch=async ()=>{
        if (searchTerm.length>0){
            navigate("search/"+searchTerm)
        }
        

    }
    const handleSuggestionClick = (suggestion) => {
        setNoSuggestion(false)
        setSearchTerm(suggestion); // Update the input with the selected suggestion
        setSuggestions([]); // Clear the suggestions
        // You can also trigger the search here if needed
      }
    return (
        <div className="md:px-20 px-8 md:my-36 flex flex-col md:flex-row  md:py-10 bg-[#FAFBFC] ">
            <div className="left md:max-w-[50%]">
                <p className="relative inline-block text-xl text-center text-black font-bold md:text-6xl leading-normal ">
                    Find <span className="text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)] md:text-6xl ">Partners</span> (CAs) available online
                </p>
                <p className=" text-[#616161] mt-5 text-xs md:text-base ">
                    <span className=" font-bold text-sm md:text-xl">Connect</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support
                </p>
                <div className="mt-12">
                    <form onSubmit={handleSearch}>
                        <div class="max-w-xl ">
                            <div class="flex rounded-md overflow-hidden w-full">
                                <input type="text" value={searchTerm} onChange={(e)=>handleInputChange(e.target.value)} class="w-full rounded-md px-6 font-bold rounded-r-none border-2 border-[#BFBFBF]" placeholder="Search by name" />
                                <button onClick={()=>handleSearch} className="bg-[#0076CE] text-white md:px-14 px-2 md:text-lg text-xs font-semibold py-4 rounded-r-md">Search</button>
                            </div>
                        </div>
                        {searchTerm  &&<div className="mt-2 relative">
                            {suggestions.length==0 && NoSuggestion && <div>
                                No user Found
                                </div>}
                            {suggestions.map((suggestion, index) => (
                                <div key={index} onClick={() => handleSuggestionClick(suggestion)} className="px-6 py-2 border border-gray-300 cursor-pointer hover:bg-gray-100">
                                    {suggestion}
                                </div>
                            ))}
                        </div>}
                    </form>
                </div>
            </div>
            <div className="right h-fit mt-5 md:mt-0">
                <ul className="flex h-full space-x-4">
                    <li className="flex items-end"><img className="h-[90%]" src='images/Landing_triplet_left.png' /></li>
                    <li className="flex items-start"><img className="h-[90%]" src='images/Landing_triplet_middle.png' /></li>
                    <li className="flex items-center"><img className="h-[90%]" src='images/Landing_triplet_right.png' /></li>

                </ul>
            </div>
        </div>
    )
}
