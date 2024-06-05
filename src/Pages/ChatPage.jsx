import React, { useEffect } from "react"
import Header from "../Components/Header"
import ChatComponent from "../Components/Connection/Chat"
import { useSelector } from 'react-redux'
import ChatChange from "../Components/Connection/ChatChange"
import { initiatConnection } from "../Reducers/chataSlice";
import { useDispatch } from "react-redux";
const ChatPage = ({ socket }) => {
    const dispatch = useDispatch()
    const { userId } = useSelector(state => state.auth)
    const URL = import.meta.env.VITE_BACKEND

    return (
        <div className="flex flex-col h-screen bg-slate-200">
            <Header socket={socket} />
            <div className="flex overflow-hidden grow hide-scroll-bar">
                <ChatChange />
                <ChatComponent socket={socket} />
            </div>
        </div>
    )
}

export default ChatPage;