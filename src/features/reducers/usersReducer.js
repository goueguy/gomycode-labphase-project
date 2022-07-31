import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users:[],
    currentModal:"login"
}
const usersReducer = createSlice({
    name:"users",
    initialState,
    reducers:{
        getUser:()=>{

        }
    }
});

export const {getUser}= usersReducer.actions;
export default usersReducer.reducer;