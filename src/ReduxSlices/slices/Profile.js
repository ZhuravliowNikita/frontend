import axios from "axiosInstance.js"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchContactType = createAsyncThunk("profile/fetchContactType", async() =>{
    const {data} = await axios.get("contact/contactTypes/").catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})

export const fetchContacts = createAsyncThunk("profile/fetchContacts", async(params) =>{
    const {data} = await axios.post("contacts/", params).catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})

export const createContact = createAsyncThunk("profile/createContact", async(params) =>{
    const {data} = await axios.post("contact/", params).catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})


const menuItems = {
    Tasks: "Tasks",
    Education: "Education",
    Projects: "Projects",
    Contacts: "Contacts",
}
const initialState = {
    menuItems,
    contacts: null,
    contactTypes: null,
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
        builder.addCase(fetchContactType.pending, (state) =>{
            state.contactTypes = null;
            state.error = null;
            state.loading = true;
        });
        builder.addCase(fetchContactType.fulfilled, (state, action) =>{
            state.contactTypes = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchContactType.rejected, (state, action) =>{
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchContacts.pending, (state) =>{
            state.contacts = null;
            state.error = null;
            state.loading = true;
        });
        builder.addCase(fetchContacts.fulfilled, (state, action) =>{
            state.contacts = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchContacts.rejected, (state, action) =>{
            state.error = action.payload;
            state.loading = false;
        });

    }
})


export const {changeProfileMenuItem} = profileSlice.actions;

export const profileReducer = profileSlice.reducer;

