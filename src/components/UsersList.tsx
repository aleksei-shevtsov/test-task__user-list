import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchUsers } from "../redux/userList/asyncActions";
import { Grid, Box } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const UsersList = () => {
  const users = useAppSelector((state) => state.userList.users);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Grid item xs={12} rowSpacing={5}>
      {users &&
        users.map((user) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              boxShadow: 5,
              borderRadius: 2,
              bgcolor: "background.paper",
              minWidth: 300,
              padding: 4,
              margin: 2,
            }}
          >
            <Grid xs={1}>
              <div>
                <b>name:</b>
              </div>
            </Grid>
            <Grid xs={3}>
              <div>{user.name}</div>
            </Grid>

            <Grid xs={1}>
              <div>
                <b>username:</b>
              </div>
            </Grid>
            <Grid xs={3}>
              <div>{user.username}</div>
            </Grid>

            <Grid xs={1}>
              <div>
                <b>email:</b>
              </div>
            </Grid>
            <Grid xs={2}>
              <div>{user.email}</div>
            </Grid>
            <Grid xs={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
              <HighlightOffIcon />
            </Grid>
          </Box>
        ))}
    </Grid>
  );
};

export default UsersList;
