import React from "react"
import Header from "../Components/Header"
import ChatComponent from "../Components/Connection/Chat"
import ChatChange from "../Components/Connection/ChatChange"
const ChatPage=()=>{

    return (
        <div className="bg-slate-200">
        <Header/>
        <div className="flex h-[83vh]">
        <ChatChange  />        
        <ChatComponent />
        </div>
        </div>
    )
}

export default ChatPage ;