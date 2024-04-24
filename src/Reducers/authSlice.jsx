import { loginviaform, veriyUser } from "../Actions/authAction"
import { getProfile, getContact, getWorkHistory, getServices } from "../Actions/profileActions";
import { createSlice } from "@reduxjs/toolkit"
import { produce } from 'immer';
import axios from "axios"

const initialState = {
  loading: true,
  profilePic: null,
  email: null,
  username: null,
  userToken: false,
  error: null,
  userId: null,
  success: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    /**
     * Sets the state to indicate that the user is authenticated.
     *
     * @param {object} state - the state object
     * @return {void} 
     */
    setUserToken: (state, action) => {
      // state.userToken = action.payload
      state.userToken = action.payload.token
      state.userInfo.profilePic = action.payload.profilePic
      state.userInfo.email = action.payload.email
      state.userInfo.username = action.payload.username
      // console.log(action.payload)
    },
    logout: (state) => {
      console.log("hmm")
      state.userToken =false;
      state.userInfo = null;
      
    },
    stopLoading: (state) => {
      // console.log("Hmmm")
      state.loading = false
    },
    showError: (state,action) => {
      state.error=action.payload
      setTimeout(()=>{state.error=null},3000)
    }
  },
  /**
   * A function that adds extra reducers for handling login user actions.
   *
   * @param {object} builder - The reducer builder object.
   * @return {void} This function does not return anything.
   */
  extraReducers: (builder) => {
    builder
      .addCase(loginviaform.pending, (state) => {
        return produce(state, draftState => {
          draftState.loading = true;
          draftState.error = null;
        });
      })
      .addCase(loginviaform.fulfilled, (draftState, action) => {
          draftState.loading = false;
          if (action.payload.status === 200) {
            draftState.success = true;
            draftState.profilePic = action.payload.profilePic
            draftState.email = action.payload.email
            draftState.userId = action.payload.userId
            draftState.username = action.payload.username
            draftState.userToken = action.payload.token;
          } else {
            draftState.error = "Incorrect";
          }
      
      })
      .addCase(loginviaform.rejected, (state, action) => {
        return produce(state, draftState => {
          draftState.loading = false;
          draftState.error = "Invalid Data";
        });
      })
      .addCase(veriyUser.pending, (state) => {
        return produce(state, draftState => {
          // console.log("still pending")
          draftState.loading = true;
          draftState.error = null;
        });
      })
      .addCase(veriyUser.fulfilled, (state, action) => {
        return produce(state, draftState => {
          draftState.loading = false;
          // console.log(action.payload);
          if (action.payload.status === 200) {
            draftState.success = true;
            draftState.email = action.payload.email;
            draftState.username = action.payload.username;
            draftState.profilePic = action.payload.profilePic;
            draftState.userId = action.payload.userId;
            draftState.userToken = action.payload.token;
          } else {
            draftState.error = "Incorrect";
            // localStorage.removeItem("spectre-secret");
          }
        });
      })
      .addCase(veriyUser.rejected, (state, action) => {
        return produce(state, draftState => {
          // console.log("Hello cjdvdj");
          draftState.loading = false;
          draftState.error = "Invalid Data";
          localStorage.removeItem("spectre-secret");
        });
      })
     }
})
export const { setUserToken, logout, stopLoading , showError } = authSlice.actions;
export default authSlice.reducer;