/************* Imports **************/
import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from '../features/user/UserSlice';

/************* Setup **************/
// CONFIG: Register all reducers here to enable them across application
const appReducers = combineReducers({
  user:userSlice.reducer
});

// CONFIG: Singular Reducer to trigger all appReducers
// NOTE: This setup allows for a master reducer to trigger lifecycle state across the entire application
const rootReducer = (state: any, action: any) => {
  if(action.type === 'RESET_APP'){
    // CONFIG: Resets state across all reducers
    // NOTE: If you want to exclude a reducer add reducer to {} objects
    const {} = state;
    state = {};
  }

  return appReducers(state, action);
}

/************* Exports **************/
export default rootReducer;