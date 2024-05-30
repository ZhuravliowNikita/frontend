import axios from "axiosInstance.js"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const createTask = createAsyncThunk("task/createTask", async (params) => {
    const { data } = await axios.post("task/", params).catch(function (error) {
        console.log(error.toJSON());
    });
    return data;
})

export const updateTask = createAsyncThunk("task/updateTask", async (params) => {
    const { data } = await axios.patch("task/"+params.id, params).catch(function (error) {
        console.log(error.toJSON());
    });
    return data;
})
export const deleteTask = createAsyncThunk("task/deleteTask", async (id) => {
    const { data } = await axios.delete("task/"+id).catch(function (error) {
        console.log(error.toJSON());
    });
    return data;
})

export const fetchTask = createAsyncThunk("task/fetchTask", async (id) => {
    const { data } = await axios.get("task/" + id).catch(function (error) {
        console.log(error.toJSON());
    });
    return data;
})

export const fetchSkillsByCategory = createAsyncThunk("task/fetchSkillsByCategory", async(id) =>{
    const {data} = await axios.get("skillsByCategory/"+id).catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})

export const fetchCategories = createAsyncThunk("task/fetchCategories", async() =>{
    const {data} = await axios.get("categories/").catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})

export const applyTask = createAsyncThunk("task/applyTask", async(params) =>{
    const {data} = await axios.post("taskdev/", params).catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})

export const assignTask = createAsyncThunk("task/assignTask", async(params) =>{
    const {data} = await axios.patch("taskassigndev/"+params._id, params).catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})

export const estimateTask = createAsyncThunk("task/estimateTask", async(params) =>{
    const {data} = await axios.patch("taskestimate/"+params._id, params).catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})

export const fetchDevelopersRecomendation = createAsyncThunk("task/fetchDevelopersRecomendation", async(id) =>{
    const {data} = await axios.get("taskdevrecomendation/"+id).catch(function (error) {
        console.log(error.toJSON());
      });
    return data;
})



const initialState = {
    recomendations: null,
    currentCategory: null,
    currentSkills: null,
    currentState: "create",
    skills: null,
    categories: null,
    states: {
        create: "create",
        edit: "edit",
        view: "view",
    },
    currentForm: null,
    loading: false,
    error: null,
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        changeState: (state, action) => {
            state.currentState = action.payload;
        },
        setSkills: (state, action) => {
            state.currentSkills = action.payload;
        },
        setCategory: (state, action) => {
            state.currentCategory = action.payload;
            state.currentSkills = null;
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
        builder.addCase(updateTask.pending, (state) => {
            state.currentForm = null;
            state.error = null;
            state.loading = true;
        });
        builder.addCase(updateTask.fulfilled, (state, action) => {
            state.currentForm = action.payload;
            state.loading = false;
        });
        builder.addCase(updateTask.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(createTask.pending, (state) => {
            state.currentForm = null;
            state.error = null;
            state.loading = true;
        });
        builder.addCase(createTask.fulfilled, (state, action) => {
            state.currentForm = action.payload;
            state.loading = false;
        });
        builder.addCase(createTask.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchTask.pending, (state) => {
            state.currentForm = null;
            state.error = null;
            state.loading = true;
        });
        builder.addCase(fetchTask.fulfilled, (state, action) => {
            console.log(action.payload)
            state.currentForm = action.payload;
            state.currentCategory = state.currentForm.Category._id
            state.currentSkills = state.currentForm.Skills.map(taskSkill => { return taskSkill.Skill._id })
            state.loading = false;
        });
        builder.addCase(fetchTask.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchSkillsByCategory.pending, (state) =>{
            state.skills = null;
            state.error = null;
            state.loading = true;
        });
        builder.addCase(fetchSkillsByCategory.fulfilled, (state, action) =>{
            state.skills = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchSkillsByCategory.rejected, (state, action) =>{
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(deleteTask.pending, (state) => {
            state.currentForm = null;
            state.error = null;
            state.loading = true;
        });
        builder.addCase(deleteTask.fulfilled, (state) => {
            state.currentForm = null;
            state.currentState = "create";
            state.loading = false;
        });
        builder.addCase(deleteTask.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(applyTask.pending, (state) => {
            state.error = null;
            state.loading = true;
        });
        builder.addCase(applyTask.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(applyTask.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(assignTask.pending, (state) => {
            state.error = null;
            state.loading = true;
        });
        builder.addCase(assignTask.fulfilled, (state, action) => {
            state.currentForm = action.payload;
            state.loading = false;
        });
        builder.addCase(assignTask.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(estimateTask.pending, (state) => {
            state.error = null;
            state.loading = true;
        });
        builder.addCase(estimateTask.fulfilled, (state, action) => {
            state.currentForm = action.payload;
            state.loading = false;
        });
        builder.addCase(estimateTask.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchDevelopersRecomendation.pending, (state) => {
            state.error = null;
            state.loading = true;
        });
        builder.addCase(fetchDevelopersRecomendation.fulfilled, (state, action) => {
            state.recomendations = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchDevelopersRecomendation.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
    }
})

export const { changeState, setSkills, setCategory } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;