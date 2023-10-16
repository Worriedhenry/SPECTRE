import React from "react";

export default function About({Data}) {
    console.log(Data.images)
    return (
        <div className="space-y-5">
            <img className="h-1/2 w-3/4 rounded-xl" src={Data.image} />
            <h2 className="font-bold text-2xl">About {Data.name}</h2>
            <div>
                <table class="min-w-full text-center text-sm font-light">
                    <thead class="font-medium">
                        <tr>
                            <th scope="col" class=" md:py-4 py-1 text-left w-[1/3] text-[#999999]  font-bold text-xs md:text-sm">FROM</th>
                            <th scope="col" class="py-1 text-left md:py-4 text-[#999999]  font-bold text-xs md:text-sm">PARTNER SINCE</th>
                            <th scope="col" class="text-left py-1 md:py-4 text-[#999999]  font-bold text-xs md:text-sm">AVERAGE RESPONSE TIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="whitespace-nowrap text-sm md:text-base text-left py-4 font-medium w-1/3">{Data.about?.from}</td>
                            <td class="whitespace-nowrap w-1/3 text-sm md:text-base py-4 text-left font-medium">{Data.about?.partnerSince}</td>
                            <td class="whitespace-nowrap text-sm md:text-base  py-4 text-left font-medium">{Data.about?.averageResponseTime}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="my-5 space-y-3">
                <p className="text-[#999999]  font-bold text-xs md:text-sm">ABOUT</p>
                <p className="text-sm md:text-base">{Data.about?.description}</p>
            </div>
            <div className="flex space-x-3">
                <div className="w-[50%] s  md:space-y-3">
                    <p className="text-[#999999] font-bold text-xs md:text-sm">SERVICES I OFFER</p>
                    <ul className="list-disc md:px-10 text-sm md:text-base">
                        {Data.about?.services?.map((e)=>
                        <li>
                            {e}
                        </li>
                        )}

                    </ul>
                </div>
                <div className="space-y-3">
                    <p className="text-[#999999]  font-bold text-xs md:text-sm">WHY ME?</p>
                    <ul className="list-disc md:px-10 text-sm md:text-base">
                    {Data.about?.benefits?.map((e)=>
                        <li>
                            {e}
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}