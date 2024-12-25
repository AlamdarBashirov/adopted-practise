import { configureStore } from "@reduxjs/toolkit";
import  productsSlice  from "./reducers/productsSlice";
import basketSlice from "./reducers/basketSlice";
import  adminSlice  from "./reducers/adminSlice";

export const store = configureStore({
    reducer:{
        products: productsSlice,
        basket: basketSlice,
        admin: adminSlice
        // wishlist: wishlistSlice
    }
})