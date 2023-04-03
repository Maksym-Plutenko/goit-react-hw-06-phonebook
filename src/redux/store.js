import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReduser } from './contactsSlice';
import { filterReduser } from './filterSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedcontactsReduser = persistReducer(persistConfig, contactsReduser);
// const persistedfilterReduser = persistReducer(persistConfig, filterReduser);







// const store = configureStore({
//   reducer: {
//     contacts: persistReducer(persistConfig, contactsReduser),
//     filter: filterReduser,
//   },
// });





// const rootPersistConfig = {
//   key: 'root',
//   storage: storage,
// };

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage: storage,
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(contactsPersistConfig, contactsReduser),
//   filter: filterReduser,
// });

// const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// const store = createStore(persistedReducer);


const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, contactsReduser);



const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReduser,
  },
});

// const store = configureStore({
//   reducer: {
//     contacts: contactsReduser,
//     filter: filterReduser,
//   },
// });


const persistor = persistStore(store);

export { store, persistor };
