import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


// Add reject with value too

const loginviaform= createAsyncThunk(
    'auth/loginviaform',
    async ({email,password,rememberMe}, { rejectWithValue }) => {
        try {

            const res = await axios.post((import .meta.env.VITE_BACKEND_AUTH ||import .meta.env.VITE_BACKEND)+"/auth/loginviaform", { email, password })
            if (res.status === 200) {
                if (rememberMe) {
                localStorage.setItem("spectre-secret", res.data.token)
                }
                else{
                    sessionStorage.setItem("spectre-secret", res.data.token)
                }
            }
            return {status:res.status,profilePic:res.data.userInfo.profilePic,username:res.data.userInfo.username,token:res.data.token,email,userId:res.data.userInfo.userId}

        } catch (error) {
            console.log("error", error)
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)


const veriyUser= createAsyncThunk("/auth/verifyUser", async (token, { rejectWithValue }) => {
    try {
        const res = await axios.get((import .meta.env.VITE_BACKEND_AUTH ||import .meta.env.VITE_BACKEND)+"/auth/checktoken/"+  token)
        const {email,username,profilePic,userId}=res.data
        return {email,username,profilePic,token,status:200,userId}
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})




export {loginviaform,veriyUser}

