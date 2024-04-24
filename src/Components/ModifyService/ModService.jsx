import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import RateModifiation from "./RateModification";

export default function ModedServiceDetails() {

    const [activeTab, setActiveTab] = useState(2);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    return (
        <div className="flex w-5/6 p-1 bg-white md:w-2/3 md:flex-col md:p-6 rounded-xl ">
            

           
            <div className="w-full p-4  ">

            <RateModifiation/> 

            </div>


        </div>
    )
}
