import React from "react";
import JoinCard from "./JoinCard";
export default function JoinUs() {

    const [intersectionOfHeading, setIntersectionHeading] = React.useState([false,false]);
    const [intersectionOfBody, setIntersectionBody] = React.useState([false,false]);

    // Interection obserevr api
    const headRef = React.useRef();
    const bodyRef=React.useRef();
    React.useEffect(() => {
        const HeadingObserver = new IntersectionObserver((entries) => {
            const entry=entries[0];
            if (!intersectionOfHeading[1] && entry.isIntersecting){
                setIntersectionHeading([entry.isIntersecting,true]);
                }
            //  else if (entry.isIntersecting){
                // setIntersectionHeading([false,true])
        })

        const BodyObserver = new IntersectionObserver((entries) => {
            const entry=entries[0];
            if (!intersectionOfBody[1] && entry.isIntersecting){
                setIntersectionBody([entry.isIntersecting,true]);
                }
            
        })
        HeadingObserver.observe(headRef.current)

        BodyObserver.observe(bodyRef.current)
    },[])

    return (
        <div  className="px-8 mb-8 joinus md:px-20">
            
            <h1 ref={headRef} style={{ transitionProperty: "opacity",  transitionDuration: "0.5s" }} className={`font-bold md:text-6xl sm:text-4xl text-2xl w-full text-center transition-transform duration-[2000ms] transform ${intersectionOfHeading[0] ? 'translate-x-0 opacity-100' : '-translate-x-1/4 opacity-0'}`}>Want to <span className="text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)] ">Join</span> Us?</h1>
            <p className={`w-full font-600 text-center text-sm my-4 md:text-lg transition-transform duration-1000 transform ${intersectionOfBody[0] ? 'translate-x-0' : 'translate-x-20'}`} >To remain with us, it is essential that you diligently follow the steps provided</p>
            <div ref={bodyRef} className={`flex space-y-10 md:space-y-0 flex-wrap items-center md:flex-row flex-col  md:justify-between transition-transform duration-1000 transform ${intersectionOfBody[0] ? 'translate-x-0' : '-translate-x-full'} `}>
                <JoinCard  Data={Data1}/>
                <JoinCard Data={Data2}/>
                <JoinCard Data={Data3}/>

            </div>
        </div>
    )
}

 const Data1={
    Num:1,
    MainHead:'Account Registeration',
    SubText:'Company/Individual must register an account to provide/view the service(s)',
    Due:'Immediately ',
    Penality:'None'
}
 const Data2={
    Num:2,
    MainHead:'Commencement of Service ',
    SubText:'Service provider must confirm payment and office address ',
    Due:'Within 10 days ',
    Penality:'₹50,000 for the company'
}
 const Data3={
    Num:3,
    MainHead:'Terms & Conditions',
    SubText:'Service user/provider must accept Terms & Conditions',
    Due:'After every update',
    Penality:'Account access denial'
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