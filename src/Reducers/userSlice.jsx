import { createSlice } from "@reduxjs/toolkit";
import {getProfile,getWorkHistory} from "../Actions/profileActions"
import {getContact} from "../Actions/profileActions"

// import registerUser from "./Actions/registerAction"



const userSlice= createSlice({
  name: "user",
  initialState: {
    username: null,
    fullname: null,
    phone: null,
    email: null,
    location: null,
    userTags: null,
    profilePic: null,
    socials: null,
    personalSite: null,
    payment: null,
    createdAtMonth: null,
    createdAtYear: null,
    education: null,
    achievements: null,
    avgRating: null,
    avgResponseTime: null,
    services: null,
    about: null,
    workHistory: null,
  },
  reducers: {
    
  },
  /**
   * A function that defines extra reducers for handling different cases of registering a user.
   *
   * @param {Object} builder - The builder object for defining reducers.
   * @return {void} This function does not return anything.
   */
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, action) => {
        // console.log("Fulfilled", action.payload)
        state.location=action.payload.user.location
        state.userTags=action.payload.user.userTags
        state.profilePic=action.payload.user.profilePic
        state.createdAtMonth=action.payload.createdAtMonth
        state.createdAtYear=action.payload.createdAtYear
        state.education=action.payload.user.education
        state.achievements=action.payload.user.achievements
        state.avgRating=action.payload.user.avgRating
        state.avgResponseTime=action.payload.user.avgResponseTime
        state.fullname=action.payload.user.fullname,
        state.about=action.payload.user.about
      })
      .addCase(getProfile.rejected, (state, action) => {
        console.log("Error", action.payload)
      })
      .addCase(getContact.fulfilled, (state, action) => {
        console.log("Fulfilled", action.payload)
        state.phone=action.payload.phone
        state.socials=action.payload.socials
        state.personalSite=action.payload.personalSite
        state.payment=action.payload.payment
      })
      .addCase(getContact.rejected, (state, action) => {
        console.log("Error", action.payload)
      })
      .addCase(getWorkHistory.pending, (state, action) => {
        console.log("Pending", action.payload)
      })
      .addCase(getWorkHistory.fulfilled, (state, action) => {
        state.workHistory=action.payload.workHistory
      })
      .addCase(getWorkHistory.rejected, (state, action) => {
        console.log("Error", action.payload)
      })
  },
})

export default userSlice.reducer




// createdAtMonth
// : 
// 4
// createdAtYear
// : 
// 2024
// user
// : 
// about
// : 
// "Hey, I am using Tailwind+React"
// achievements
// : 
// []
// avgRating
// : 
// 0
// avgResponseTime
// : 
// "0"
// createdAt
// : 
// "2024-04-08T08:10:09.275Z"
// education
// : 
// []
// email
// : 
// "kaushikankitsharma05@gmail.com"
// fullname
// : 
// "Ankit Sharma"
// location
// : 
// (5) ['304A ', 'Baltana,Zirkpur', 'Punjab', 'India', '140604']
// profilePic
// : 
// "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
// services
// : 
// []
// userTags
// : 
// (2) ['Strict Routine', 'Flexible']
// username
// : 
// "WorriedHenry"
// _id
// : 
// "6613a66144b6e01c92dbd289"