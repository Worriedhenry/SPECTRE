import React from "react";

export default function Features() {
    return (
        <div className=" md:px-20 px-8 flex flex-col md:flex-row">
            <div className="left md:w-1/2 w-full flex flex-col">
                <p className="md:text-6xl text-xl font-bold">
                    <span className="  text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)]" >All-in-One </span>
                    platform that Makes Easier
                </p>
                <p className="md:text-xl text-xs  mt-4">
                    We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals
                </p>
                <div className="flex flex-wrap md:flex-row flex-col">
                    <div className="flex md:mt-10 mt-5 md:mr-8 md:ml-5 md:w-[40%]">
                        <img className="md:mr-6 mr-3 md:h-2/3 h-2/5" src="images/Lens.png" />
                        <p className="text-xs md:text-base"><span className="font-bold text-xs md:text-base">SEARCH </span>for vital company information </p>
                    </div>
                    <div className="flex md:mt-10 mr-8 md:ml-5 md:w-[40%]">
                        <img className="md:mr-6 mr-3 md:h-2/3 h-2/5" src="images/Connect.png" />
                        <p className="text-xs md:text-base"><span className="font-bold text-xs md:text-base ">CONNECT </span>with the resources to meet your business needs </p>
                    </div>
                    <div className="flex md:mt-10 mr-8 md:ml-5 md:w-[40%]">
                        <img className="md:mr-6 md:h-2/3 mr-3 h-2/5" src="images/Research.png" />
                        <p className="text-xs md:text-base"><span className="font-bold">RESEARCH </span>and generate reports that drive growth  </p>
                    </div>
                    <div className="flex md:mt-10 md:mr-8 md:ml-5 md:w-[40%]">
                        <img className="md:mr-6 mr-3 md:h-1/2 h-2/5" src="images/Academy.png" />
                        <p className="text-xs md:text-base"><span className="font-bold">ACADEMY </span>to give you the skills for success in your career </p>
                    </div>
                </div>
            </div>
            <div className="right pt-16 py-2 flex">
                <div className="flex">
                    <ul className="flex justify-end flex-col">
                        <li className="my-2 flex justify-end"><img src="images/Chat-bubble1.png" /></li>
                        <li className="my-2 flex justify-end"><img src="images/Chat-bubble2.png" /></li>
                        <li className="my-2 flex justify-end"><img src="images/Chat-bubble3.png" /></li>
                        <li className="my-2 flex justify-end"><img src="images/Chat-bubble4.png" /></li>
                        <li className="my-2 flex justify-end">
                            <div className="flex justify-center">
                                <img src="images/Teacher.png" />
                                <img className="h-fit" src="images/Chat-bubble5.png" />
                            </div>
                        </li>

                    </ul>
                </div>
                <div>
                    <img src="images/Student.png" />
                </div>
            </div>
        </div>
    )
}