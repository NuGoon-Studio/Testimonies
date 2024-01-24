/************* Imports **************/
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../state/RootStore';

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
    // TODO: Pull reducers into their own file.
    // TODO: Create common reducers file
    resetState: () => initialState,
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { resetState, updateEmail } = userSlice.actions;

export const selectEmail = (state: RootState) => state.user.email;

export default userSlice.reducer;