import React from "react";
import JoinCard from "./JoinCard";
export default function JoinUs() {
    return (
        <div className=" joinus my-16 md:px-20 px-8 ">
            
            <h1 className="font-bold md:text-6xl text-2xl w-full text-center">Want to <span className="text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)] ">Join</span> Us?</h1>
            <p className="w-full font-600 text-center text-sm my-4 md:text-lg">To remain with us, it is essential that you diligently follow the steps provided</p>
            <div className="flex flex-wrap  justify-between">
                <JoinCard  Data={Data1}/>
                <JoinCard Data={Data2}/>
                <JoinCard Data={Data3}/>
                <JoinCard Data={Data4}/>
                <JoinCard Data={Data5}/>
                <JoinCard Data={Data6}/>
            </div>
        </div>
    )
}

 const Data2={
    Num:2,
    MainHead:'Auditor Appointment',
    SubText:'Company informs new auditor and submits ADT.1 form to ROC.',
    Due:'Within 30 days',
    Penality:'300 per month'
}
 const Data1={
    Num:1,
    MainHead:'Commencement of business ',
    SubText:'Invested shareholders must confirm payment and office address ',
    Due:'Within 180 days ',
    Penality:'₹50,000 for the company ₹1,000 /day for directors'
}
 const Data3={
    Num:3,
    MainHead:'DIN eKYC',
    SubText:'Directors share personal information for identification & verification ',
    Due:'Every Year',
    Penality:'5000 one time'
}
 const Data4={
    Num:4,
    MainHead:'DPT-3',
    SubText:'Companies report money taken from people to ROC; auditors confirm details.',
    Due:'Within 30 days ',
    Penality:'300 per month'
}
 const Data5={
    Num:5,
    MainHead:'MCA Form AOC-4',
    SubText:"It's like an official report card for a company's documents",
    Due:'On or Before 30th November  ',
    Penality:'₹200 per day (No upper limit)*'
}
 const Data6={
    Num:6,
    MainHead:'MCA Form MGT-7',
    SubText:"Companies must annually report activities and finances to the registrar.",
    Due:'On or Before 31st December',
    Penality:'₹200 per day(No upper limit)* '
}