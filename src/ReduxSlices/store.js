import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "ReduxSlices/slices/Auth";
import {mainReducer} from "ReduxSlices/slices/Main"
import {taskReducer} from "ReduxSlices/slices/Task"
import {profileReducer} from "ReduxSlices/slices/Profile"



const store = configureStore({
    reducer: { 
        user: authReducer,
        main: mainReducer,
        task: taskReducer,
        profile: profileReducer
    },
});

export default store;
