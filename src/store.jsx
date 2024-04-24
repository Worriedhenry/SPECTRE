import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./Reducers/authSlice.jsx"
import userReducer from "./Reducers/userSlice.jsx" 

export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
    
})     