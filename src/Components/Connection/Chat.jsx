import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

import Loading from "../Loading";
import { addNotification } from "../../Reducers/chataSlice"
import axios from "axios"
const ChatComponent = ({ socket }) => {
    const { userId } = useSelector(state => state.auth)
    const [message, setMessage] = useState("")
    const { chatRoom, roomDetails, notifications } = useSelector(state => state.chats)
    const [data, setData] = useState(null)
    const chatBox = useRef()
    const dispatch = useDispatch()
    useEffect(() => {
        if (chatRoom) {
            axios.get(import.meta.env.VITE_BACKEND + "/chats/" + chatRoom + "/1").then((res) => {
                setData(res.data)

            }
            )
        }
    }, [chatRoom])

    useEffect(() => {
        if (data) {
            chatBox.current.scrollTop = chatBox.current.scrollHeight
        }
    }, [data])



    useEffect(() => {
        if (socket) {
            const handleReceiveMessage = (info) => {
                if (info.proposalId !== roomDetails._id) {
                    dispatch(addNotification({ proposalId: info.proposalId }))
                    return;
                }
                setData(prevData => prevData ? [...prevData, info] : [info]);
            };

            socket.on("receive-message", handleReceiveMessage);

            return () => {
                socket.off("receive-message", handleReceiveMessage);
            };
        }
    }, [socket, roomDetails._id]);

    const handleSendMessage = async (e) => {
        e.preventDefault()
        setMessage("")
        const newMessage = {
            message: message,
            clientId: roomDetails.client._id,
            serviceProviderId: roomDetails.serviceProvider._id,
            proposalId: roomDetails._id,
            senderId: userId
        }
        socket.emit("send-message", newMessage)
        setData([...data, newMessage])
        const res = await axios.post(import.meta.env.VITE_BACKEND + "/chats/storemessage", newMessage)
    }


    if (!data || !roomDetails) {
        return <div className="w-full"><Loading /></div>
    }
    return (
        <div className="flex flex-col justify-between flex-1 h-full p-2 m-1 bg-white sm:pl-6 md:m-2 rounded-xl">
            <div className="flex flex-col align-top md:h-5/6">
                <div className="flex justify-between py-3 pr-2 border-b-2 border-gray-200 sm:items-center">
                    <div className="relative flex items-center space-x-4">
                        <div className="relative">
                            {/* <span className="absolute bottom-0 right-0 text-green-500">
                                <svg width="20" height="20">
                                    <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                                </svg>
                            </span> */}
                            <img src={userId == roomDetails.client._id ? roomDetails.serviceProvider.profilePic : roomDetails.client.profilePic} alt="" className="w-8 h-8 rounded-full md:w-12 md:h-12" />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <div className="flex items-center mt-1 text-xl">
                                <span className="mr-3 text-sm font-medium text-gray-700 md:text-xl">{userId == roomDetails.client._id ? roomDetails.serviceProvider.username : roomDetails.client.username}</span>
                            </div>
                            <span className="text-xs font-medium text-slate-400">{roomDetails.service.serviceName}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">

                        {roomDetails.proposalStatus == 1 && <p className="text-[#0076CE] font-medium animate-pulse before:content-['*'] before:ml-1 before:text-[#]  ">Requested</p>}
                        {roomDetails.proposalStatus == 2 && <p className="text-[#0076CE] font-medium animate-pulse before:content-['*'] before:ml-1 before:text-[#] ">Accepted</p>}
                        {roomDetails.proposalStatus == 3 && <p className="text-[#0076CE] font-medium animate-pulse before:content-['*'] before:ml-1 before:text-[#] ">Submitted</p>}
                        {roomDetails.proposalStatus == 4 && <p className="text-[#]">Closed</p>}

                    </div>
                </div>
                <div id="messages" ref={chatBox} className="flex flex-col w-full p-3 pb-6 space-y-4 overflow-x-hidden overflow-y-scroll scrolling-touch align-top md:h-[75vh] h-[65vh] grow scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 md:space-x-10 hide-scroll-bar">
                    {/* <div className=" flex items-center bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]  rounded-lg text-white px-2 py-2 m-auto text-xs md:text-xs font-medium w-fit">
                        <CiCircleInfo /> All message are end to end Encrypted
                    </div> */}

                    {data && data.length == 0 && <p className="italic font-medium text-center text-gray-500 ">Be the first one to message</p>}
                    {data && data.map((item, index) => {
                        return <ChatBubble key={index} data={item} userId={userId} />
                    })}




                    {/* <div className="flex items-end justify-end">
                        <div className="flex flex-col items-end order-1 max-w-xs mx-2 space-y-2 text-xs">
                            <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none md:text-sm  font-medium bg-[#9400D3] text-white ">yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem</span></div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="order-2 w-6 h-6 rounded-full" />
                    </div> */}


                    {/* <div className="flex items-end">
                        <div className="flex flex-col items-start order-2 max-w-xs mx-2 space-y-2 text-xs">
                            <div><span className="px-4 py-2 text-white md:text-sm font-medium rounded-lg inline-block bg-[#0076CE] ">I get the same error on Arch Linux (also with sudo)</span></div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="order-1 w-6 h-6 rounded-full" />
                    </div> */}


                </div>
            </div>
            <form onSubmit={(e) => handleSendMessage(e)} className="sticky z-10 px-4 pt-4 mb-2 bg-white border-t-2 border-gray-200 bottom-3 sm:mb-0">
                <div className="relative flex">
                    <span className="absolute inset-y-0 flex items-center">
                        <button type="button" className="inline-flex items-center justify-center w-12 h-12 text-gray-500 transition duration-500 ease-in-out rounded-full hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-gray-600 md:h-6 md:w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                            </svg>
                        </button>
                    </span>

                    <input type="text" placeholder="Write your message!" required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full py-3 pl-12 text-xs text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md focus:outline-none focus:placeholder-gray-400" />
                    <div className="absolute inset-y-0 right-0 flex items-center">

                        <button type="submit" className="inline-flex bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] items-center justify-center rounded-lg md:px-4 px-2 py-2 transition text-xs duration-500 ease-in-out text-white  hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] focus:outline-none">
                            <span className="font-bold">Send</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 ml-2 transform rotate-90 md:h-6 md:w-6">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                            </svg>
                        </button>

                    </div>

                </div>
            </form>
        </div>


    )
}

export default ChatComponent;

const ChatBubble = ({ data, userId }) => {
    const [isSender, setSender] = useState(userId == data.senderId)
    const { roomDetails } = useSelector((state) => state.chats)
    return (
        <div className={`flex ${!isSender ? 'items-start justify-start flex-row-reverse w-fit max-w-[75%] md:max-w-[50%] ' : ' items-end justify-end flex-row pl-[25%]'} `}>
            <div className="flex flex-col items-end order-1 max-w-xs mx-2 text-xs">
                <div><span className={`px-4 py-2 rounded-lg inline-block rounded-br-none md:text-sm m-0 font-medium ${isSender ? 'bg-[#0076CE]' : 'bg-[#9400D3]'}  text-white `}>{data.message}</span></div>
                <div className="text-[0.5rem] p-0 m-0">{data.createdAt.substring(0,10)}</div>
            </div>
            <img src={data.senderId == data.clientId ? roomDetails.client.profilePic : roomDetails.serviceProvider.profilePic} alt="My profile" className="order-2 w-6 h-6 rounded-full" />

        </div>
    )
}