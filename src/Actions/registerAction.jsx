import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export default registerUser = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            // console.log(data)
            
            
            return response.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)