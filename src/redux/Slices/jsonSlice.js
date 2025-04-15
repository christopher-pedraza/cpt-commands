import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    files: [],
};

export const jsonSlice = createSlice({
    name: "json",
    initialState,
    reducers: {
        addFile: (state, action) => {
            state.files = [...state.files, action.payload];
        },
        addFiles: (state, action) => {
            state.files = [...state.files, ...action.payload];
        },
        removeFile: (state, action) => {
            state.files = state.files.filter(
                (file) => file.id !== action.payload
            );
        },
        clearFiles: (state) => {
            state.files = [];
        },
    },
});

// Action creators are generated for each case reducer function
export const { addFile, addFiles, removeFile, clearFiles } = jsonSlice.actions;

export const selectFiles = (state) => state.json.files;
export const selectFileById = (state, id) =>
    state.json.files.find((file) => file.id === id);

export default jsonSlice.reducer;
