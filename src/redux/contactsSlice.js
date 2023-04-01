import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {

    },
});

const contactsReduser = contactsSlice.reducer;

export {contactsReduser};