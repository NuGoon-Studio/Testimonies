/************* Imports **************/
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from '../../state/AppStore';

/************* Setup **************/
interface UserState {
  email: string
};

const initialState: UserState = {
  email: 'email@email.com',
};

/************* Exports **************/
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetState: (state) => {
      state = {...initialState};
    },

    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { resetState, updateEmail } =  userSlice.actions;

export const selectEmail = (state: AppState) => state.user.email;

export default userSlice.reducer;