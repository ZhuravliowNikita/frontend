import axios from "axiosInstance.js"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const menuItems = {
    Tasks: "Tasks",
    Education: "Education",
    Projects: "Projects",
    Contacts: "Contacts",
}
const initialState = {
    menuItems,
    activeMenu: menuItems.Tasks,
    loading: false,
    error: null,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        changeProfileMenuItem: (state, action) =>{
            state.activeMenu = action.payload;
        },
        
    },
    extraReducers: (builder) => {
        
    }
})


export const {changeProfileMenuItem} = profileSlice.actions;

