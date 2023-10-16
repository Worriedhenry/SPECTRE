import React from "react";
import PersonalDetails from "./PersonalDetails";
import About from "./About";
import { useNavigate } from "react-router-dom";
export default function SearchResult({Data}) {
    const navigate =useNavigate()
    return(<>
            <button type="button" onClick={()=>navigate("/")} class="text-white bg-[#0076CE]  font-medium rounded-lg text-xs md:px-5 md:py-2.5 px-2 py-1 md:mr-2 mb-2 md:text-base ">Go back</button>
        <div className="md:px-20 px-4 flex flex-col md:flex-row space-x-10 mt-16"> 
            <div>
            </div>
            <PersonalDetails Data={Data}/>
            <About Data={Data} />
        </div>
        </>
    )
}