import {React,useState, useEffect} from "react";
import axios from "axios"
import { useParams } from "react-router-dom"; 
import {getWorkHistory} from '../../Actions/profileActions'
import {useSelector,useDispatch} from 'react-redux'
import Loading from "../Loading";

const HistoryCard = () => {
    
    const Data =
    {
        name: "Desinerz",
        type: "Corporations",
        proposal: "27th Jan,2024",
        accepted: "27th Jan,2024",
        status: "Pending",
        service: "Website Development",
    }

    return (
        <div className=" parent group transition-all shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg  w-full cursor-pointer justify-between p-2 border-slate-200 my-4 ">
            <h1 className="font-medium text-slate-600"><span className="text-lg text-transparent bg-clip-text font-medium bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]">{Data.service}</span> @{Data.name}</h1>
            <div className="flex">
                <div className="w-1/3 transition-all">
                    <p className="font-medium ">Details</p>
                    <table>
                        <tbody>
                            <tr>
                                <td className="w-40 text-sm font-medium">Client type:</td>
                                <td className="text-sm font-medium text-slate-700">Corporations</td>
                            </tr>
                            <tr>
                                <td className="text-sm font-medium ">Proposal Requested:</td>
                                <td className="text-sm font-medium text-slate-700 w-fit">27th Jan,2024 </td>
                            </tr>
                            <tr>
                                <td className="text-sm font-medium ">Proposal Accepted:</td>
                                <td className="text-sm font-medium text-slate-700">27th Jan ,2024</td>
                            </tr>
                            <tr>
                                <td className="text-sm font-medium ">Work Submitted:</td>
                                <td className="text-sm font-medium text-slate-700">28th Feb, 2024  </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="w-1/3 transition-all">
                    <p className="font-medium">Completed</p>
                    <table>
                        <tbody>
                            <tr>
                                <td className="w-40 text-sm font-medium">Rating:</td>
                                <td className="text-sm font-medium max-w-32 text-slate-700 ">5/5</td>
                            </tr>
                            <tr>
                                <td className="text-sm font-medium ">Communication:</td>
                                <td className="text-sm font-medium text-slate-700">3/5 </td>
                            </tr>
                            <tr>
                                <td className="text-sm font-medium ">Timeline :</td>
                                <td className="text-sm font-medium text-slate-700">4/5</td>
                            </tr>
                            <tr>
                                <td className="text-sm font-medium ">Quality:</td>
                                <td className="text-sm font-medium text-slate-700">5/5  </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="w-1/3 transition-all ">
                    <p className="font-medium">Review</p>
                    <p className="text-sm text-overflow-{ellipsis|clip}  md:line-clamp-5 font-medium text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure tempore maiores harum? Deserunt obcaecati eligendi inventore, dolores officia vel numquam cupiditate iste odit doloremque neque beatae. Quisquam, aliquid delectus?</p>
                </div>
            </div>
        </div>
    )
}


const WorkHistory = () => {
    const params = useParams();
    const userId = params.userId;
    const [data,setData] = useState(null)
    const dispatch= useDispatch()


    const {workHistory} = useSelector(state => state.user)


    useEffect(() => {
        if(!workHistory){
            dispatch(getWorkHistory({userId}))
        }
    }, [userId,workHistory])

    async function getWorkHistory(){
        const res= await axios.get("http://localhost:3001/user/getworkhistory/"+userId)
        if( res.status === 200){
            setData(res.data)
        }
    }



    if(!workHistory){
        return (
            <div className="flex items-center justify-center h-1/2">
                <Loading/>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center w-full space-y-2 " >
        {workHistory && workHistory.map((item) => <HistoryCard key={item._id} data={item} />) }
        {!workHistory.length && <p className="text-sm font-medium text-slate-700">No Work History</p>}
            
        
        </div>
    )
}
export default WorkHistory;