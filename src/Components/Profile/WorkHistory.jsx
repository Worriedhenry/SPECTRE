import {React,useState, useEffect} from "react";
import axios from "axios"

import Loading from "../Loading";
import { ProposalCard } from "./RequestedPropsals";
import {useSelector} from 'react-redux'

const WorkHistory = () => {
    const [data,setSData]=useState(null)
    const {userId}=useSelector(state=>state.auth)

    useEffect(() => {
        axios.get(import .meta.env.VITE_BACKEND+"/proposal/archives/"+userId).then(
            res => {
                setSData(res.data)
            }
        )
    })
    return (<>
        {!data && <Loading/>}
        {data && data.length===0 && <p className="text-center text-gray-500 font-medium italic ">No Archieves</p>}
        {data &&  data.map(proposal => <ProposalCard data={proposal} userId={userId} />)}
        </>
    )
}
export default WorkHistory;