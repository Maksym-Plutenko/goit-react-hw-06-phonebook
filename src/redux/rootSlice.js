import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    contacts: [{ name: 'Whatafuck?', number: '88000555665', id: 'aerhpjerp' }],
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
        // return {
        //   contacts: newContacts,
        // };
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
        // return {
        //   filter: action.payload.value,
        // };
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

const rootReduser = rootSlice.reducer;
const { addContact, deleteContact, setFilterStatus } = rootSlice.actions;

export { rootReduser, addContact, deleteContact, setFilterStatus };
