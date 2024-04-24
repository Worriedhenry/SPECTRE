import React, { useState } from "react";
import Header from "../Components/Header";
import RegisterTwo from "../Components/Authorisations/RegisterTwo";
import Register from "../Components/Authorisations/RegisterFirst";
import RegisterThree from "../Components/Authorisations/RegisterThree";
import RegisterFour from "../Components/Authorisations/RegisterFour";
import RegisterProfileTags from "../Components/Authorisations/RegiserProfileTags";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
// import registerUser from "../Actions/registerAction"
import {setUserToken} from "../Reducers/authSlice";
import axios from "axios";
const RegisterPage=()=>{
    const [activeTabs,setActiveTabs]=useState(1)
    const [imageCloudinfo,setImageCloudinfo]=useState(null)
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [selectCountry, setSelectCountry] = useState("");
    const [selectState, setSelectState] = useState("");
    const [selectCity, setSelectCity] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [password, setPassword] = useState("");
    
    const [tags, setTags] = useState(new Set([]))
    const [alertMessage, setAlertMessage] = useState(100);
    const navigate=useNavigate()
  
    const {user,userToken}=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const handleRegister= async ()=>{
        const location=[streetAddress,selectCity,selectState,selectCountry,postalCode]
        const payload={
            username,fullname,phone,email,location,password,proilePic:imageCloudinfo?.url,userTags:[...tags]
        }
        setAlertMessage(300)
        const res=await axios.post("http://localhost:3001/auth/registerviaform",payload)
        if (res.status===200){
            dispatch(setUserToken(res.data))
            localStorage.setItem("spectre-secret",res.data.token)
            setAlertMessage(200);
            resetAlertMessage()
        }
        else{
            setAlertMessage(400);
        }
    }
    function resetAlertMessage() {
        setTimeout(() => {
            setAlertMessage(100);
            resetAlertMessage();
        }, 3000);
    }

    return(
        <div>
            <Header/>
            {activeTabs===1 && <Register setActiveTabs={setActiveTabs} username={username} setUsername={setUsername} fullname={fullname} setFullname={setFullname} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} />}
            {activeTabs===2 && <RegisterTwo setActiveTabs={setActiveTabs} selectCountry={selectCountry} setSelectCity={setSelectCity} setSelectState={setSelectState} setSelectCountry={setSelectCountry} streetAddress={streetAddress} setStreetAddress={setStreetAddress} postalCode={postalCode} setPostalCode={setPostalCode} selectState={selectState} selectCity={selectCity} />}
            {activeTabs===3 && <RegisterThree setActiveTabs={setActiveTabs} imageCloudinfo={imageCloudinfo} setImageCloudinfo={setImageCloudinfo} selectedImage={selectedImage} setSelectedImage={setSelectedImage} selectedImageFile={selectedImageFile} setSelectedImageFile={setSelectedImageFile}  />}
            {activeTabs===4 && <RegisterFour setActiveTabs={setActiveTabs} password={password} setPassword={setPassword}  />}
            {activeTabs===5 && <RegisterProfileTags alertMessage={alertMessage} setActiveTabs={setActiveTabs} tags={tags} setTags={setTags} handleRegister={handleRegister} />}
            <Footer />            
        </div>            
    )
}

export default RegisterPage;