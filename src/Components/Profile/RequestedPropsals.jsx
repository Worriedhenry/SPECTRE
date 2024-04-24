import React, { useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";





const RequestedProposal = ({ component }) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const params = useParams();
    const userId = params.userId;

    useEffect(() => {
        getProposalDetails()
    }, [userId])


    async function getProposalDetails() {
        setLoading(true)
        const res = await axios.get("http://localhost:3001/user/getproposals/" + userId)
        setLoading(false)
        if (res.status === 200) {
            setData(res.data)
        }
    }

    return (
        <div className="border-slate-200 flex flex-col space-y-3  parent group transition-all shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg  justify-between p-2">
            <div className="flex justify-between p-2 l md:flex-row parent group ">
                <div className="w-2/5 transition-all md:w-2/5 md:space-x-3">
                    <p className="md:text-lg text-md bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent font-bold">Website Development</p>
                    <table>
                        <tbody>
                            <tr>
                                <td className="text-xs font-medium md:w-40 md:text-sm">Client :</td>
                                <td className="text-xs md:text-sm">theDesignerrz</td>
                            </tr>
                            <tr>
                                <td className="text-xs font-medium md:text-sm"> <span className="hidden md:inline">Proposal</span> Requested:</td>
                                <td className="text-xs md:text-sm w-fit">27th Jan,2024 </td>
                            </tr>
                            <tr>
                                <td className="text-xs font-medium md:text-sm"> <span className="hidden md:inline">Proposal</span> Accepted:</td>
                                <td className="text-xs md:text-sm">27th Jan ,2024</td>
                            </tr>
                            <tr>
                                <td className="text-xs font-medium md:text-sm"><span className="hidden md:inline">Expected</span> Deadline:</td>
                                <td className="text-xs md:text-sm">28th Feb, 2024  </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className="w-3/5 transition-all group-hover:block md:w-5/12">
                    <p className="text-sm font-medium md:text-base">Description</p>
                    <p className="text-xs  md:text-sm text-overflow-{ellipsis|clip} text-justify line-clamp-3 md:line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure tempore maiores harum? Deserunt obcaecati eligendi inventore, dolores officia vel numquam cupiditate iste odit doloremque neque beatae. Quisquam, aliquid delectus?</p>
                </div>
            </div>
            <div className="flex flex-wrap w-full">
                <span class="bg-green-600 text-white text-xs font-medium me-2 px-2.5 py-0.5 h-fit rounded-full  ">Easy</span>
                <span class="bg-yellow-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 h-fit rounded-full">Medium</span>
                <span class="bg-red-700 text-white text-xs font-medium me-2 px-2.5 py-0.5 h-fit rounded-full ">Hard</span>
            </div>
            <div className="flex flex-row-reverse items-center justify-between ">
                <div>
                    <button type="button" class="text-[#0076CE] hover:bg-[#0076CE]  bg-white hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-5 md:py-1.5 md:mr-2 mb-2 border-[#0076CE] border-2">View Details</button>
                </div>
                {component && component === "task" && <div>
                    <ol class="flex items-center w-full text-xs  md:text-sm font-medium text-center  text-gray-500 dark:text-gray-400 sm:text-base">
                        <li class="flex md:w-full items-center sm:after:content-[''] after:w-24 after:h-1 text-blue-500  after:border-b-2 after:border-blue-500 after:border-1 after:hidden sm:after:inline-block after:mx-2   ">
                            <span class="flex items-center after:content-['>'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent flex ">
                                    <span class="hidden sm:inline-flex sm:me-2">Proposal </span> Requested</span>
                            </span>
                        </li>
                        <li class="flex md:w-full items-center   sm:after:content-[''] after:w-24 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 dark:after:border-gray-700">
                            <span class="flex animate-pulse items-center after:content-['>'] sm:after:hidden after:animate-pulse after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                <span class="me-2">2</span>
                                <span class="hidden sm:inline-flex sm:me-2">Proposal</span> Accepted
                            </span>
                        </li>
                        <li class="flex md:w-full items-center   sm:after:content-[''] after:w-24 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 dark:after:border-gray-700">
                            <span class="flex items-center after:content-['>'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                <span class="me-2">3</span>
                                Submitted
                            </span>
                        </li>

                        <li class="flex items-center">
                            <span class="me-2">4</span>
                            Closed
                        </li>
                    </ol>
                </div>}
            </div>

        </div >
    )
}
// code a javascript function to add two numbers

// 

export default RequestedProposal;