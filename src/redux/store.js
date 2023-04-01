import { configureStore } from "@reduxjs/toolkit";
import {contactsReduser} from "./contactsSlice";
import {filterReduser} from "./filterSlice";

const store = configureStore({
    reducer: {
        contacts: contactsReduser,
        filter: filterReduser,
    }
});

export {store};