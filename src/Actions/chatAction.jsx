import { createAsyncThunk } from "@reduxjs/toolkit";

const createRoom= createAsyncThunk(
    "chats/createMessage",
    async ({client,serviceProvider,proposalId,socket}, { rejectWithValue }) => {
        try {

            const res = await axios.post(import .meta.env.VITE_BACKEND+"/chats/createroom", {client,serviceProvider,proposalId}) 
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