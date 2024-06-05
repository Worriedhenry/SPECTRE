import axios from "axios";
import React, { useEffect, useState } from "react";
import { setChatRoom, setRoomDetails, resetNotifications } from '../../Reducers/chataSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
const ChatChange = () => {

    const [rooms, setRooms] = useState(null)
    const [selectedRoom, setSelectedRoom] = useState(null)
    const { userId } = useSelector(state => state.auth)
    const { chatRoom, notifications, roomDetails } = useSelector(state => state.chats)
    const navigate = useNavigate()
    const dispatch = useDispatch()



    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND + "/user/getRooms/" + userId + "/1").then((res) => {
            setRooms(res.data)
            if (res.data.length > 0) {
                handleRoomSelect(res.data[0])
            }
        })
    }, [])


    const handleRoomSelect = (e) => {
        setSelectedRoom(e._id)
        dispatch(setChatRoom(e._id))
        dispatch(setRoomDetails(e))
        dispatch(resetNotifications(e._id))

    }



    return (
        <div className="w-2/6 p-2 m-1 bg-white md:m-2 md:w-1/4 rounded-xl">

            <form className="w-full">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 " ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 text-xs text-gray-900 border border-gray-300 rounded-lg ps-10 md:text-sm bg-gray-50 " placeholder="Search chat" required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs  md:text-sm md:px-4 md:py-2 py-1 px-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <div className="mt-1 divide-y">
                {!rooms && <p>Loading</p>}
                {rooms && rooms.length === 0 && <p>No rooms found</p>}
                {rooms && rooms.map((room, index) => (
                    <div key={index} onClick={() => handleRoomSelect(room)} className={` cursor-pointer md:mt-4 md:pt-2 justify-between flex ${room._id == selectedRoom ? "bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]" : ""}   rounded-lg items-center mb-4  border-slate-100 p-2 `}>
                        <div className="flex">
                            {userId == room.client._id ? <img src={room.serviceProvider.profilePic} alt="" className="w-6 h-6 mr-4 border-2 border-white rounded-full md:w-10 md:h-10" /> : <img src={room.client.profilePic} alt="" className="w-6 h-6 mr-4 border-2 border-white rounded-full md:w-10 md:h-10" />}

                            <div>
                                <p className={`md:text-lg text-sm line-clamp-1 cursor-pointer ${room._id == selectedRoom ? "text-white" : "text-black"}  font-medium`}>{userId != room.client._id ? room.client.username : room.serviceProvider.username}</p>
                                <p className={`cursor-pointer ${room._id == selectedRoom ? "text-white" : "text-black"} md:text-sm text-xs line-clamp-1 `}>{room.service.serviceName}</p>
                            </div>
                        </div>
                        <p className="bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] text-white rounded-full px-2 py-0.5 text-xs md:text-sm md:px-4 md:py-1 ]">{notifications[room._id]}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ChatChange;