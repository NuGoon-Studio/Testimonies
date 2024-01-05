/************* Imports **************/
import { configureStore } from '@reduxjs/toolkit';

import appReducers from './AppReducers';

/************* Setup **************/
// CONFIG: Redux store
const appStore = configureStore({
  reducer: appReducers,
})

/************* Exports **************/
// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
export default appStore;