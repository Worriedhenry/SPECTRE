import { createSlice } from "@reduxjs/toolkit";

const URL = import.meta.env.VITE_BACKEND



const chatSlice= createSlice({
  name: "chats",
  initialState: {
    notifications: {},
    socket: null,
    chatRoom:null,
    roomDetails:{}
  },
  reducers: {
    initiatConnection: (state, action) => {
      if(state.socket) return
      const socketIo = io(URL,{
        auth: { userId: action.payload.userId },
        autoConnect: false,
        transports: ['websocket']
      })
      
      state.socket=socketIo.connect()
    },
    setChatRoom: (state, action) => {
      state.chatRoom=action.payload
    },
    setRoomDetails:(state,action)=>{
      state.roomDetails=action.payload
    },
    addNotification: (state, action) => {
      state.notifications[action.payload.proposalId] = state.notifications[action.payload.proposalId] ? state.notifications[action.payload.proposalId] + 1 : 1
    },
    resetNotifications: (state, action) => {
      state.notifications[action.payload] = null
    },
    
  },
  /**
   * A function that defines extra reducers for handling different cases of registering a user.
   *
   * @param {Object} builder - The builder object for defining reducers.
   * @return {void} This function does not return anything.
   */
  extraReducers: (builder) => {
    builder
      
  },
})

export default chatSlice.reducer
export const {initiatConnection,setChatRoom,setRoomDetails,addNotification,resetNotifications}=chatSlice.actions




