import axios from "axiosInstance.js"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchCategories = createAsyncThunk("main/fetchCategories", async() =>{
    const {data} = await axios.get("categories/").catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})


const initialState = {
    categories: null,
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
    }
})

export const selectIsCustomerMode = state => state.main.isCustomerMode;

export const mainReducer = mainSlice.reducer;

export const {changeToCustomer, changeToDeveloper} = mainSlice.actions;

