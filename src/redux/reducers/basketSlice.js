import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsBasketThunk = createAsyncThunk('api/basket', async () => {
    const response = await axios.get('http://localhost:5000/basket')
    return response.data
})

export const deleteProductsBasketThunk = createAsyncThunk('api/basket/delete', async (id) => {
    const response = axios.delete(`http://localhost:5000/basket/${id}`)
    return id
})

export const basketSlice = createSlice({
    name: 'basket',
    initialState:{
        basket:[]
    },
    reducer:[],
    extraReducers:builder => 
    builder
    //get products
    .addCase(getProductsBasketThunk.fulfilled, (state, action) => {
        state.loading = false
        state.basket = action.payload
    })
    .addCase(getProductsBasketThunk.pending, (state) => {
        state.loading = true
    })
    .addCase(getProductsBasketThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
    //delete basket
    .addCase(deleteProductsBasketThunk.fulfilled, (state, action) => {
        state.loading = false
        state.basket = state.basket.filter(item => item.id !== action.payload)
    })
    .addCase(deleteProductsBasketThunk.pending, (state) => {
        state.loading = true
    })
    .addCase(deleteProductsBasketThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
})

export default basketSlice.reducer