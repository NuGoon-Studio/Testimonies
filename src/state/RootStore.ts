/************* Imports **************/
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './RootReducer';

/************* Setup **************/
// CONFIG: Redux store
const rootStore = configureStore({
  reducer: rootReducer,
})

/************* Exports **************/
// Infer the `rootState` and `rootDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>
export type RootDispatch = typeof rootStore.dispatch
export default rootStore;