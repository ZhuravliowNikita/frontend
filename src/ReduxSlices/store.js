import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "ReduxSlices/slices/Auth";
import {mainReducer} from "ReduxSlices/slices/Main"



const store = configureStore({
    reducer: { 
        auth: authReducer,
        main: mainReducer,
    },
});

export default store;
