import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "ReduxSlices/slices/Auth";
import {mainReducer} from "ReduxSlices/slices/Main"
import {taskReducer} from "ReduxSlices/slices/Task"



const store = configureStore({
    reducer: { 
        user: authReducer,
        main: mainReducer,
        task: taskReducer,
    },
});

export default store;
