import React from "react";

export default function Recommended() {
    return (
        <div className="md:px-20 px-8 my-10 space-y-8">
            <h1 className="font-bold text-xl md:text-3xl">Recommended for you</h1>
            <div className="flex md:flex-row flex-col space-y-5 md:space-x-10">
                <RecommendedCard/>
                <RecommendedCard/>
                <RecommendedCard/>
            </div>
        </div>
    )
}
function RecommendedCard() {
    return (
        <div className="md:w-2/5 space-y-5 pb-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-2xl">
            <img className="w-full rounded-2xl" src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80" />
            <div className="font-bold md:text-base text-sm flex justify-between px-5">
                <p >
                    Micheal Jackson
                </p>
                <p>
                    ₹4,370
                </p>
            </div>
            <p className="px-5 md:text-base text-sm ">I will do business evaluation and corporate services</p>
            <div className="px-5 mb-5">
            <button type="button" class="text-white bg-[#0076CE]  font-medium rounded-lg text-xs md:text-lg w-full py-2 text-center">View services</button></div>
        </div>
    )
}