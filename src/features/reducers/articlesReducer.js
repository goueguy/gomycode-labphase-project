
import {createSlice} from "@reduxjs/toolkit";

const initialState =  {
    articles:[]
}
export const articlesReducer = createSlice({
    name:"articles",
    initialState,
    reducers:{
        getAllArticle:(state)=>{

        }
    }

})

export const {getAllArticle}= articlesReducer.actions;
export default articlesReducer.reducer;