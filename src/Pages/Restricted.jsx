import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Login from '../Pages/Login';
import Loading from '../Components/Loading';
import { useSelector } from 'react-redux';
const RestrictedRoutes = ({Component,condition,otherwise,next,socket})=> {
  const {loading} = useSelector(state=>state.auth)
  if(loading){
    return <Loading />
  }
  return condition ? <Component socket={socket} /> : <Navigate to={otherwise} replace={false}/>
};

export default RestrictedRoutes;