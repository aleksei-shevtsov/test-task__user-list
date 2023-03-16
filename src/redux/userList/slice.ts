import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IUserListState, IUser, Status } from "./types";

import { fetchUsers } from "./asyncActions";

const initialState: IUserListState = {
  status: Status.LOADING,
  users: [],
  inputValue: "",
  searchData: [],
};

const userList = createSlice({
  name: "userList",
  initialState,
  reducers: {
    removeItem(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user) => {
        if (user.id !== action.payload) {
          return user;
        } else {
          return (user.isDeleted = true);
        }
      });
    },
    resetRemovedItems(state) {
      state.users = state.users.map((user) => ({ ...user, isDeleted: false }));
    },
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    setSearchData(state, action: PayloadAction<IUser[]>) {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = Status.LOADING;
      state.users = [];
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<IUser[]>) => {
        state.status = Status.SUCCESS;
        state.users = action.payload.map((user) => {
          return { ...user, isDeleted: false };
        });
      }
    );
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = Status.ERROR;
      state.users = [];
    });
  },
});

export const { removeItem, resetRemovedItems, setInputValue, setSearchData } =
  userList.actions;

export default userList.reducer;
