import React from "react";
import { useNavigate } from "react-router-dom";
export default function About({ data }) {
    // console.log(data.images)
    const services = ["Website Development", "UI/UX", "Maintanence"]
    const benefits = ["Website Development", "UI/UX", "Maintanence"]

    const navigate = useNavigate()

    // const data={
    //     name:"Micheal Jackson",
    //     country:"India",
    //     joined:"2022",
    //     avgResponse:"30min",
    //     about:"I will do business evaluation and corporate services Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eaque non illo iste repellendus est. Doloremque corporis velit vero illo, cum, iusto esse non quo laboriosam quas, dolore explicabo id",
    //     services:["Website Development","UI/UX","Maintanence"],
    //     benefits:["Website Development","UI/UX","Maintanence"],
    // }

    // console.log(data.id,data)
    
    return (
        <div className="space-y-5 py-4 w-1/3 px-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl  mb-6 bg-white hidden md:block">
            <div className="md:w-[80%] t text-center flex justify-center">
                <img className="max-w-[250px] w-3/4 h-1/2 rounded-full " src={data.profilePic? data.profilePic : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
            </div>
            <h2 className="text-2xl font-medium">About <span onClick={() => navigate(`/profile/${data?._id}`)}  className="cursor-pointer bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent">{data?.username}</span> </h2>
            <div>
                <table class="min-w-full text-center text-sm font-light">
                    <thead class="font-medium">
                        <tr>
                            <th scope="col" class=" md:py-4 py-1 text-left w-[1/3]   font-medium text-xs md:text-sm">FROM</th>
                            <th scope="col" class="py-1 text-left md:py-4   font-medium text-xs md:text-sm">PARTNER SINCE</th>
                            <th scope="col" class="text-left py-1 md:py-4   font-medium text-xs md:text-sm"><spam className="hidden md:block">AVERAGE</spam> RESPONSE TIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="whitespace-nowrap text-sm md:text-base text-slate-800 text-left py-4 font-medium w-1/3">{data.location[2]},{data.location[3]}</td>
                            <td class="whitespace-nowrap w-1/3 text-sm md:text-base py-4 text-slate-800 text-left font-medium">{data.createdAt.slice(0, 10)}</td>
                            <td class="whitespace-nowrap text-sm md:text-base text-slate-800 py-4 text-left font-medium">{data.avgResponseTime}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="my-5 space-y-3">
                <p className="text-xs font-medium md:text-sm">ABOUT</p>
                <p className="text-sm md:text-base text-slate-800">{data.about}</p>
            </div>
            <div className="flex space-x-3">
                <div className="w-[50%] s  md:space-y-3">
                    <p className="text-xs font-medium md:text-sm">PAYMENT OPTIONS</p>
                    <ul className="text-sm list-disc md:px-10 md:text-base">
                        {data.payment?.map((e) =>
                            <li className="text-slate-800">
                                {e}
                            </li>
                        )}
                        {!data.payment && <li className="text-slate-800">N/A</li>}
                    </ul>
                </div>
                {/* <div className="space-y-3">
                    <p className="text-xs font-medium md:text-sm">WHY ME?</p>
                    <ul className="text-sm list-disc md:px-10 md:text-base">
                        {data.benefits?.map((e) =>
                            <li className="text-slate-800">
                                {e}
                            </li>
                        )}
                    </ul>
                </div> */}
                <div className="space-y-3">
                    <p className="text-xs font-medium md:text-sm">Connect With me</p>
                    <ul className="text-sm list-disc md:px-10 md:text-base">
                        <li className="text-slate-800"><a href="https://www.w3schools.com" target="_blank">Instagram</a></li>
                        {data.socials?.map((e) =>
                            <li className="text-slate-800"><a href="https://www.w3schools.com" target="_blank">{e.title}</a></li>
                        )}
                    </ul>
                </div>
            </div>
                <div className="md:mt-2">
                    <p className="text-lg font-medium md:mb-3">Tags </p>
                    <div className="flex flex-wrap w-full align-top max-h-32 bg-slate-100">
                        <div>{
                            data.userTags && data.userTags.map((tag) =>
                                <span title="Experience 0-1 year " id="badge-dismiss-default" class="cursor-pointer hover:bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                                    {tag}
                                </span>)}
                        </div>
                    </div>
                </div>
        </div>
    )
}