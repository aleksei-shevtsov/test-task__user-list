import React from "react";

// import { useAppDispatch, useAppSelector } from "../redux/hooks";
// import { selectUsers } from "../redux/userList/selectors";
// import { setSearchData } from "../redux/userList/slice";

import { IUser } from "../redux/userList/types";

export const onSearchMethod = (str: string, users: IUser[]) => {
  // const users = useAppSelector(selectUsers);
  // const dispatch = useAppDispatch();

  const newArr = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(str.toLowerCase()) ||
        user.username.toLowerCase().includes(str.toLowerCase()) ||
        user.email.toLowerCase().includes(str.toLowerCase())
    )
    .map((user) => {
      return { ...user };
    });
  return newArr;
};
