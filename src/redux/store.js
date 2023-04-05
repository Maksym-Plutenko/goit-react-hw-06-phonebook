import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
// import { combineReducers } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { contactsReduser } from './contactsSlice';
// import { filterReduser } from './filterSlice';
import {rootReducer} from './rootSlice';




// const persistConfig = {
//   key: 'root',
//   storage,
// }
 
// const persistedReducer = persistReducer(persistConfig, contactsReduser);

// const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//     filter: filterReduser,
//   },
// });

// const store = configureStore({
//   reducer: {
//     contacts: contactsReduser,
//     filter: filterReduser,
//   },
// });


// const persistor = persistStore(store);

// export { store, persistor };



// NEW ATTEMPT

// const rootPersistConfig = {
//   key: 'root',
//   storage: storage,
//   // blacklist: ['auth']
// }
 
// const authPersistConfig = {
//   key: 'auth',
//   storage: storage,
//   // blacklist: ['somethingTemporary']
// }
 
// const rootReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, contactsReduser),
//   other: filterReduser,
// })

// const store = createStore(rootReducer);
// let persistor = persistStore(store);
// export { store, persistor };



const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };