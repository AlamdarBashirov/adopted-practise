import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsHomeThunk = createAsyncThunk('api/products', async () => {
    const response = await axios.get("http://localhost:5050/products")
    return response.data
})

export const postProductsToBasket = createAsyncThunk('api/products/sendBasket', async (data) => {
    const response = await axios.post("http://localhost:5000/basket", {...data,id: data.id.toString()})
    return data
})

export const postProductsToWishlist = createAsyncThunk('api/products/sendWishlist', async (data) => {
    const response = await axios.post("http://localhost:5000/wishlist", {...data,id: data.id.toString()})
    return data
})

export const productsSlice = createSlice({
    name: 'products',
    initialState:{
        products:[]
    },
    reducer:[],
    extraReducers:builder => 
    builder
    //get products
    .addCase(getProductsHomeThunk.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
    })
    .addCase(getProductsHomeThunk.pending, (state) => {
        state.loading = true
    })
    .addCase(getProductsHomeThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
    //postBasket
    .addCase(postProductsToBasket.fulfilled, (state, action) => {
        state.loading = false
    })
    .addCase(postProductsToBasket.pending, (state) => {
        state.loading = true
    })
    .addCase(postProductsToBasket.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
    //post wishlist
    .addCase(postProductsToWishlist.fulfilled, (state, action) => {
        state.loading = false
    })
    .addCase(postProductsToWishlist.pending, (state) => {
        state.loading = true
    })
    .addCase(postProductsToWishlist.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
})

export default productsSlice.reducer