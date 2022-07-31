import {configureStore} from "@reduxjs/toolkit";
import articlesReducer from "../features/reducers/articlesReducer";
import usersReducer from "../features/reducers/usersReducer";

export const store = configureStore({
    reducer:{
        articles: articlesReducer,
        users:usersReducer
    }
});