import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// we have to use a method configureStore to initialize
export const store = configureStore({
    reducer:{
        // to add reducers
        counter:counterSlice
    }
})