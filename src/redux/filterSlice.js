import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {},
});

const filterReduser = filterSlice.reducer;

export {filterReduser};