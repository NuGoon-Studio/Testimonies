/************* Imports **************/
import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from '../features/user/UserSlice';

/************* Setup **************/
// CONFIG: Register all reducers here to enable them across application
const appReducers = combineReducers({
  user:userSlice.reducer
});

/************* Exports **************/
export default appReducers;