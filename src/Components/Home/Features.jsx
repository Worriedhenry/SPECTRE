import React,{useEffect, useRef,useState} from "react";

export default function Features() {

    const [intersectionOfHeading, setIntersectionHeading] = React.useState([false,false]);

    // intersection obserevr api
    const headRef=useRef()
    useEffect(() => {
        const HeadingObserver = new IntersectionObserver((entries) => {
            const entry=entries[0];
            if(!intersectionOfHeading[1] && entry.isIntersecting ){
                setIntersectionHeading([entry.isIntersecting,true]);
            }
            else if (entry.isIntersecting){
                setIntersectionHeading([false,true])
            }
        })

        HeadingObserver.observe(headRef.current)
    },[])
    
    
    return (
        <div className="flex flex-col px-8 py-2 mt-6 md:px-20 md:flex-row">
            <div className="flex flex-col w-full left md:w-1/2">
                <p className={` text-xl font-bold md:text-6xl transition-transform duration-[1000ms] transform ${intersectionOfHeading[0] ? 'translate-x-0 opacity-100' : '-translate-x-1/4 opacity-0'}`}>
                    <span className={`text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)]   `} >All-in-One </span>
                    platform that Makes Easier
                </p>
                <p ref={headRef} style={{ transitionDelay: "100ms" }} className={`mt-4 text-xs md:text-xl  transition-transform duration-[1000ms] transform ${intersectionOfHeading[0] ? 'translate-x-0 opacity-100' : 'translate-x-1/4 opacity-0'}`}>
                    We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals
                </p>
                <div style={{ transitionDelay: "200ms", transitionProperty: "opacity", transitionDuration: "0.5s" }} className={`flex flex-col flex-wrap  md:flex-row   gap-y-5 transition-transform duration-[1000ms] md:mt-10 mt-5 transform ${intersectionOfHeading[0] ? 'translate-x-0 opacity-100' : 'translate-x-1/4 opacity-0'} `}>
                    <div className="flex  md:w-1/2 gap-x-4 items-center">
                        <div className=" flex  md:w-1/4  ">
                            <img className=" max-w-full max-h-full w-10 " src="images/Lens.png" />
                        </div>
                        <p className="text-sm w-full md:text-base"><span className="text-xs font-bold md:text-base">SEARCH </span>for vital services for company  </p>
                    </div>
                    <div className="flex   md:w-1/2 gap-x-4">
                        <div className=" flex  md:w-1/4 ">
                            <img className="max-w-full max-h-full w-10 " src="images/Connect.webp" />
                        </div>
                        <p className="text-sm w-full md:text-base"><span className="text-xs font-bold md:text-base ">CONNECT </span>with the resources needed  </p>
                    </div>
                    <div className="flex  gap-x-4  md:w-1/2">
                        <div className="  flex  md:w-1/4">
                            <img className="max-w-full max-h-full w-10 " src="images/Research.png" />
                        </div>
                        <p className="text-sm md:text-base w-full"><span className="font-bold">RESEARCH </span>and generate reports that drive growth  </p>
                    </div>
                    <div className="flex  md:w-1/2 gap-x-4">
                        <div className=" flex md:w-1/4">
                            <img className="max-w-full max-h-full w-10 " src="images/Academy.png" />
                        </div>
                        <p className="text-sm md:text-base w-full"><span className="font-bold">ACADEMY </span>to give you the skills for success  </p>
                    </div>
                </div>
            </div>
            <div className="flex py-2 pt-16 right">
                <div className="flex">
                    <ul className="flex flex-col justify-end">
                        <li style={{ transitionDelay: "100ms", transitionProperty: "opacity", transitionDuration: "0.5s" }} className={` transition-transform duration-[1000ms] transform ${intersectionOfHeading && intersectionOfHeading[0] ? 'translate-x-0 opacity-100' : 'translate-x-1/4 opacity-0'} flex justify-end my-2`} ><img src="images/Chat-bubble1.png" /></li>
                        <li style={{ transitionDelay: "800ms", transitionProperty: "opacity", transitionDuration: "0.5s" }} className={` transition-transform duration-[1000ms] transform ${intersectionOfHeading && intersectionOfHeading[0] ? 'translate-x-0 opacity-100' : 'translate-x-1/4 opacity-0'} flex justify-end my-2`} ><img src="images/Chat-bubble2.png" /></li>
                        <li style={{ transitionDelay: "1800ms", transitionProperty: "opacity", transitionDuration: "0.5s" }} className={` transition-transform duration-[1000ms] transform ${intersectionOfHeading && intersectionOfHeading[0] ? 'translate-x-0 opacity-100' : 'translate-x-1/4 opacity-0'} flex justify-end my-2`} ><img src="images/Chat-bubble3.png" /></li>
                        <li style={{ transitionDelay: "2500ms", transitionProperty: "opacity", transitionDuration: "0.5s" }} className={` transition-transform duration-[1000ms] transform ${intersectionOfHeading && intersectionOfHeading[0] ? 'translate-x-0 opacity-100' : 'translate-x-1/4 opacity-0'} flex justify-end my-2`} ><img src="images/Chat-bubble4.png" /></li>
                        <li style={{ transitionDelay: "500ms", transitionProperty: "opacity", transitionDuration: "0.5s" }} className={` transition-transform duration-[1000ms] transform ${intersectionOfHeading && intersectionOfHeading[0] ? 'translate-x-0 opacity-100' : 'translate-x-1/4 opacity-0'} flex justify-end my-2`} >
                            <div className="flex justify-center">
                                <img className="relative l-10 md:block hidden" src="images/Teacher.webp" />
                                <img style={{ transitionDelay: "3500ms", transitionProperty: "opacity", transitionDuration: "0.5s" }} className={` transition-transform duration-[1000ms] hidden transform ${intersectionOfHeading && intersectionOfHeading[0] ? 'translate-x-0 opacity-100' : 'translate-x-1/4 opacity-0'} h-fit `} src="images/Chat-bubble5.png" />
                            </div>
                        </li>

                    </ul>
                </div>
                <div>
                    <img className={` transition-transform duration-[1000ms] transform ${intersectionOfHeading && intersectionOfHeading[0] ? 'translate-x-0 opacity-100' : 'translate-x-1/4 opacity-0'}`} src="images/Student.webp" />
                </div>
            </div>
        </div>
    )
}