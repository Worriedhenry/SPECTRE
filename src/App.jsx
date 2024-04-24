import {useEffect} from 'react'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './Pages/ShowService'
import ProfilePage from './Pages/Profile';
import SearchPage from './Pages/SearchPage';
import ChatPage from './Pages/ChatPage';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import ContactPage from './Pages/ContactPage';
import ModifyServicePage from './Pages/ModifyService';
import ModifyProfilePage from './Pages/ModifyProfile';
import Tasks from './Pages/tasks';
import FullTasks from './Pages/FullTask';
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'

import RestrictedRoutes from './Pages/Restricted';
import { veriyUser } from './Actions/authAction';
import {stopLoading,logout} from './Reducers/authSlice'
export default function App() {
  const {userToken}=useSelector(state=>state.auth)

  const dispatch=useDispatch()

  useEffect(() => {
    const LocalJwtToken=localStorage.getItem("spectre-secret")
    const sessionJwtToken=sessionStorage.getItem("spectre-secret")
    if (LocalJwtToken) {
      dispatch(veriyUser(LocalJwtToken))
    }
    else if(sessionJwtToken){
      dispatch(veriyUser(sessionJwtToken))
    }
    else{
      dispatch(stopLoading())
    }

    const Interval=setInterval(()=>{
      if (LocalJwtToken) {
        dispatch(veriyUser(LocalJwtToken))
      }
      else if(sessionJwtToken){
        dispatch(veriyUser(sessionJwtToken))
      }
      else{
        dispatch(logout())
      }
    },15*60*1000)

    return ()=>clearInterval(Interval)

  }, [userToken])
  // console.log(userToken)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='service/:serviceId' element={<Profile />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='chats' element={<RestrictedRoutes Component={<ChatPage />} condition={userToken} otherwise={<LoginPage />} />} />
        <Route path='login' element={<RestrictedRoutes Component={LoginPage} condition={!userToken} otherwise="/" />} />
        <Route path='register' element={<RestrictedRoutes Component={RegisterPage } condition={!userToken} otherwise={"/"} />} />
        <Route path='profile/:userId' element={<RestrictedRoutes Component={ProfilePage } condition={userToken} otherwise="/login"  />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='modify/profile' element={<RestrictedRoutes Component={ModifyProfilePage} condition={userToken} otherwise="/login" next="/modify/profile" />} />
        <Route path='modify/service' element={<RestrictedRoutes Component={ModifyServicePage } condition={userToken} otherwise="/login" next="/service/edit/:serviceId" />} />
        <Route path='profile/tasks' element={<RestrictedRoutes Component={Tasks } condition={userToken} otherwise="/login" next={"/profile/tasks"} />} /> 
        <Route path='profile/viewtask' element={<RestrictedRoutes Component={FullTasks} condition={userToken} otherwise="/login" next={"/profile/viewtask"} />} /> 
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  )
}
