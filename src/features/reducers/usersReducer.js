import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users:[],
    isOpen:true
}
const usersReducer = createSlice({
    name:"users",
    initialState,
    reducers:{
        setIsOpen:(state,action)=>{
            state.isOpen=action.payload;
        }
    }
});

export const {setIsOpen}= usersReducer.actions;
export default usersReducer.reducer;