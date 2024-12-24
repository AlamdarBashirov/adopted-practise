import { configureStore } from "@reduxjs/toolkit";
import  productsSlice  from "./reducers/productsSlice";
import basketSlice from "./reducers/basketSlice";

export const store = configureStore({
    reducer:{
        products: productsSlice,
        basket: basketSlice,
        // wishlist: wishlistSlice
    }
})