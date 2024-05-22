import axios from "axiosInstance.js"
import { createAsyncThunk, createSlice, combineSlices } from "@reduxjs/toolkit";
import {profileSlice} from "ReduxSlices/slices/Profile"

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async(params) =>{
    const {data} = await axios.post("auth/login", params).catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})

export const fetchRegister = createAsyncThunk("auth/fetchRegister", async(params) =>{
    const {data} = await axios.post("auth/register", params).catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async() =>{
    const {data} = await axios.get("auth/me").catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) =>{
            state.user = null;
            state.error = null;
            state.loading = false;
            window.localStorage.removeItem("token")
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAuth.pending, (state) =>{
            state.user = null;
            state.error = null;
            state.loading = true;
        });
        builder.addCase(fetchAuth.fulfilled, (state, action) =>{
            state.user = action.payload;
            state.loading = false;
            window.localStorage.setItem("token", action.payload.token)
        });
        builder.addCase(fetchAuth.rejected, (state, action, ) =>{
            state.error = action.payload ?? action.error;
            state.user = null;
            state.loading = false;
        });

        builder.addCase(fetchAuthMe.pending, (state) =>{
            state.user = null;
            state.error = null;
            state.loading = true;
        });
        builder.addCase(fetchAuthMe.fulfilled, (state, action) =>{
            state.user = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchAuthMe.rejected, (state, action) =>{
            state.error = action.payload;
            state.loading = false;
        });

        builder.addCase(fetchRegister.pending, (state) =>{
            state.user = null;
            state.error = null;
            state.loading = true;
        });
        builder.addCase(fetchRegister.fulfilled, (state, action) =>{
            state.user = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchRegister.rejected, (state, action) =>{
            state.error = action.payload;
            state.user = null;
            state.loading = false;
        });

        
    }
})

export const selectIsAuth = state => Boolean(state.user.auth.user?.fullName);
export const selectIsAuthError = state => Boolean(state.user.auth.error);

export const authReducer = combineSlices(authSlice, profileSlice);


export const {logout} = authSlice.actions;