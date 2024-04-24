import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const getProfile= createAsyncThunk(
    'user/getProfile',
    async ({userId}, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3001/user/getprofile/"+ userId)
            const {email,username,profilePic}=res.data
            return res.data

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

const getContact= createAsyncThunk(
    'user/getContact',
    async ({userId}, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3001/user/getcontact/"+ userId)
            return res.data

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

const getWorkHistory= createAsyncThunk(
    'user/getWorkHistory',
    async ({userId}, { rejectWithValue }) => {
        try {
           
            const res = await axios.get("http://localhost:3001/user/getworkhistory/"+ userId)
            console.log(res.data)
            return res.data

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

const getServices= createAsyncThunk(
    'user/getServices',
    async ({userId}, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3001/user/getservices/"+ userId)
            return res.data

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
  

export {getProfile,getContact,getWorkHistory,getServices};