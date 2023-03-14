import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IUserListState, IUser, Status } from './types'

import { fetchUsers } from './asyncActions';

const initialState: IUserListState = {
  isLoading: true,
  status: Status.LOADING,
  users: [],
  search: '',
  searchData: [],
}

const userList = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    setUsers(state: IUserListState, action: PayloadAction<IUser[]>) {
        state.users = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = Status.LOADING;
      state.users = [];
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.status = Status.SUCCESS;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = Status.ERROR;
      state.users = [];
    });
  },

})

export const { setUsers } = userList.actions

export default userList.reducer