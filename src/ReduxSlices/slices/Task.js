import axios from "axiosInstance.js"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const createTask = createAsyncThunk("main/task/createTask", async(params) =>{
    const {data} = await axios.post("task/", params).catch(function (error) {
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
    name: "task",
    initialState,
    reducers: {
        
        
    },
    extraReducers: (builder) => {
        builder.addCase(createTask.pending, (state) =>{
            state.currentForm = null;
            state.error = null;
            state.loading = true;
        });
        builder.addCase(createTask.fulfilled, (state, action) =>{
            state.currentForm = action.payload;
            state.loading = false;
        });
        builder.addCase(createTask.rejected, (state, action) =>{
            state.error = action.payload;
            state.loading = false;
        });
    }
})


export const {changeProfileMenuItem} = profileSlice.actions;

