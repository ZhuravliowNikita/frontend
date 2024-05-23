import axios from "axiosInstance.js"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchAuth = createAsyncThunk("auth/fetchAuth", async(params) =>{
    const {data} = await axios.post("auth/login", params).catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})

const initialState = {
    currentForm: null,
    loading: false,
    error: null,
};

export const profileSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        
        
    },
    extraReducers: (builder) => {
        
    }
})


export const {changeProfileMenuItem} = profileSlice.actions;

