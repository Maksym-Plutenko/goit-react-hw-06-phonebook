import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        const id = nanoid();
        return {
          payload: {
            name,
            number,
            id,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const contactId = action.payload.id;
        const newContacts = state.contacts.filter(
          cont => cont.id !== contactId
        );

        state.contacts = newContacts;
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
    setFilterStatus: {
      reducer(state, action) {
        state.filter = action.payload.value;
      },
      prepare(formValue) {
        return {
          payload: {
            value: formValue,
          },
        };
      },
    },
  },
});

const rootReducer = rootSlice.reducer;
const { addContact, deleteContact, setFilterStatus } = rootSlice.actions;

export { rootReducer, addContact, deleteContact, setFilterStatus };
