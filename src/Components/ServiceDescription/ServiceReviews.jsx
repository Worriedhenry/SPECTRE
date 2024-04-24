import React from "react";

const ReviewCard=()=>{
    return(
        <div className="shadow-xl mb-4 px-3 rounded-md p-3 space-y-4">
            <div className="flex  justify-between text-lg" >
                <p className="font-medium ">Username</p>
                <p className="text-slate-500">March 14,2021</p>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, magni doloribus. At aspernatur iste sunt, fugit optio assumenda labore ea voluptate, quisquam quia incidunt? Ex recusandae et est quasi amet.
            </div>
        </div>
    )
}



const ServiceReviews=()=>{
    return (
        <div className=" md:mx-16  m-4 flex-col md:flex-row space-x-10 bg-white mt-16 border-red  ">
            <h1 className="text-2xl font-bold">Reviews for Micheal</h1>
            <ReviewCard />
            <ReviewCard />
        </div>
    )
}

export default ServiceReviews ;