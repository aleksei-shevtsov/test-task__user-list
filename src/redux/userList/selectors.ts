import { RootState } from "../store";

export const selectUsers = (state: RootState) => state.userList.users;
