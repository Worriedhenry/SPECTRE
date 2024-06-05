import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./Reducers/authSlice.jsx"
import chatReducer from "./Reducers/chataSlice.jsx"

export default configureStore({
    reducer: {
        auth: authReducer,
        chats: chatReducer
    },

})     