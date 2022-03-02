import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";


export const userSlice=createSlice({
    name:"user",
    initialState:{
        value:"hari",
        api:'hkr'
    },
    reducers:{
        change_user:(state,action)=>{
            state.value=action.payload.user
        }
    }
})
export const {change_user}=userSlice.actions

export default userSlice.reducer