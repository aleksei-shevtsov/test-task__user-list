import React from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { fetchUsers } from "../../redux/userList/asyncActions";

import { Grid } from "@mui/material";

import List from "./List";

const UsersList = () => {
  const dispatch = useAppDispatch();
  const { users, searchData } = useAppSelector((state) => state.userList);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Grid item xs={12} rowSpacing={5}>
      <List list={users} />
    </Grid>
  );
};

export default UsersList;
