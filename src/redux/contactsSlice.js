import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    // { name: 'Whatafuck?', number: '88000555665', id: 'aerhpjerp' },
  ],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        const id = nanoid();
        // console.log('' + name + number + id);
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
        const newContacts = state.filter(cont => cont.id !== contactId);
        return newContacts;
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
});

const contactsReduser = contactsSlice.reducer;
const { addContact, deleteContact } = contactsSlice.actions;

export { contactsReduser, addContact, deleteContact };
