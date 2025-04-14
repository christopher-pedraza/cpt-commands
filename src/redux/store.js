import { configureStore } from "@reduxjs/toolkit";
import jsonReducer from "./Slices/jsonSlice";

export const store = configureStore({
    reducer: {
        json: jsonReducer,
    },
});
