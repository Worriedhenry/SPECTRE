import React from "react";
import { FaStar } from "react-icons/fa"
import { LuCalendarDays } from "react-icons/lu";
export default function PersonalDetails({Data}) {
    console.log(Data)
    return (
        <div className="md:w-1/2 mb-5">
            <p className="md:text-3xl text-2xl font-bold my-3">{Data.name}</p>
            <p className="font-normal md:text-base text-sm">{Data.intro}</p>
            <p className="flex items-center text-sm md:text-lg space-x-1 my-5">
                <span>
                    <FaStar style={{ color: '#0076CE' }} />
                </span><span className="text-[#0076CE] font-bold">{Data.rating}</span>
                <span>({Data.reviewCount})</span>
            </p>
            <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl bg-white px-6 py-4">
                <p className="flex justify-between text-sm md:text-lg mt-3">
                    <span>{Data.taskComplexity}</span>
                    <span className="font-bold">{Data.price}</span>
                </p>
                <p className="flex items-center text-sm md:text-base space-x-2 my-3">
                    <span><LuCalendarDays style={{ color: '#0076CE' }} /></span>
                    <span className="font-bold">{Data.deliveryTime
}</span>
                </p>
                <div className="buttonGroup md:flex md:justify-center mt-8 space-x-1">
                    <button type="button" class="text-white bg-[#0076CE]  font-medium rounded-lg text-sm md:px-6 px-2 py-2.5 md:mr-2 mb-2 focus:outline-none ">Request Proposal</button>
                    <button type="button" class="text-[#0076CE] bg-white font-medium rounded-lg text-sm md:px-8 px-2 py-2.5 md:mr-2 mb-2 border-[#0076CE] border-2">Chat with me</button>
                </div>
            </div>
            <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl bg-white px-6 py-4 my-6">
                <h3 className="font-bold md:text-2xl text-lg  my-3">What people say?</h3>
                <p className="text-sm md:text-base">{Data.testimonial?.text}</p>
            </div>
        </div>
    )
}