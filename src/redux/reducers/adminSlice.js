import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsAdminPanelThunk = createAsyncThunk('api/adminPanel', async () => {
    const response = await axios.get('http://localhost:5050/products/')
    return response.data
})

export const deleteItemFromAdminPanelThunk = createAsyncThunk('api/adminPanel/delete', async (id) => {
    const response = await axios.delete(`http://localhost:5050/products/${id}`)
    return id
})

export const addToPageFromAdminThunk = createAsyncThunk('api/adminPanel/sendToPage', async (data) => {
    const response = await axios.post("http://localhost:5050/products", data)
    return data
})

export const adminSlice = createSlice({
    name:'admin',
    initialState:{
        admin:[]
    },
    reducer:[],
    extraReducers:builder=>
        builder


    //get admin products
    .addCase(getProductsAdminPanelThunk.fulfilled, (state, action) => {
        state.loading = false
        state.admin = action.payload
    })
    .addCase(getProductsAdminPanelThunk.pending, (state) => {
        state.loading = true
    })
    .addCase(getProductsAdminPanelThunk.rejected, (state,action) => {
        state.loading = false
        state.error = action.error.message
    })


    //delete admin products
    .addCase(deleteItemFromAdminPanelThunk.fulfilled, (state, action) => {
        state.loading = false
        state.admin = state.admin.filter(item => item._id !== action.payload)
    })
    .addCase(deleteItemFromAdminPanelThunk.pending, (state) => {
        state.loading = true
    })
    .addCase(deleteItemFromAdminPanelThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
})

export default adminSlice.reducer