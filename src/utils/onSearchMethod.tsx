import { IUser } from "../redux/userList/types";

export const onSearchMethod = (str: string, users: IUser[]) => {
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
