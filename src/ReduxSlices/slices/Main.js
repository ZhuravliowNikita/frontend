import axios from "axiosInstance.js"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchCategories = createAsyncThunk("main/fetchCategories", async() =>{
    const {data} = await axios.get("categories/").catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})

export const fetchTasks = createAsyncThunk("main/fetchTasks", async(page) =>{
    const {data} = await axios.get("tasks/"+page).catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})

export const fetchDevelopers = createAsyncThunk("main/fetchDevelopers", async(page) =>{
    const {data} = await axios.get("developers/"+page).catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})


const initialState = {
    categories: null,
    tasks: null,
    developers: null,
    currentPageTask: 1,
    currentPageDevs: 1,
    isCustomerMode: true,
    loading: false,
    error: null,
};

const mainSlice = createSlice({
    name: "Main",
    initialState,
    reducers: {
        changeToCustomer: (state) =>{
            state.isCustomerMode = true;
        },
        changeToDeveloper: (state) =>{
            state.isCustomerMode = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) =>{
            state.categories = null;
            state.error = null;
            state.loading = true;
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) =>{
            state.categories = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchCategories.rejected, (state, action) =>{
            state.error = action.payload;
            state.loading = false;
        });

        builder.addCase(fetchTasks.pending, (state) =>{
            state.tasks = null;
            state.error = null;
            state.loading = true;
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) =>{
            state.tasks = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchTasks.rejected, (state, action) =>{
            state.error = action.payload;
            state.loading = false;
        });
        
        builder.addCase(fetchDevelopers.pending, (state) =>{
            state.developers = null;
            state.error = null;
            state.loading = true;
        });
        builder.addCase(fetchDevelopers.fulfilled, (state, action) =>{
            state.developers = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchDevelopers.rejected, (state, action) =>{
            state.error = action.payload;
            state.loading = false;
        });
    }
})

export const selectIsCustomerMode = state => state.main.isCustomerMode;

export const mainReducer = mainSlice.reducer;

export const {changeToCustomer, changeToDeveloper} = mainSlice.actions;

