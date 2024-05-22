import React,{useEffect,useState} from "react";
import Header from "../Components/Header";
import { useNavigate,useParams } from "react-router-dom"
import axios from "axios"
import { getProfile } from "../Actions/profileActions";
import {useSelector,useDispatch} from 'react-redux'
import Footer from "../Components/Footer";
import RightProfile from "../Components/Profile/RighProfile";
import UserDetails from "../Components/Profile/UserDetails";
const ProfilePage = () => {
    const [data,setData]=useState(false)
    const [loading,setLoading]=useState(false)
    
    const params = useParams();
    const userId = params.userId;
    const navigate = useNavigate()
    const dispatch=useDispatch()

    useEffect(() => {
        
        getProfileData()
    }, [userId])
    
    async function getProfileData(){
        setLoading(true)
        const res = await axios.get("http://localhost:3001/user/getprofile/" + userId)
        setLoading(false)
        if (res.status === 200) {
            setData(res.data)
        }
    }
    return (
        <div className="divide-y bg-slate-100 ">
            <Header />
            <div className="flex p-2 m-1 space-x-2">
                <RightProfile data={data}  />
                <UserDetails data={data}  />
            </div>
            <Footer/>
        </div>
    )
}

export default ProfilePage;