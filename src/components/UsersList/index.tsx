import React, { ReactElement } from "react";
import * as DOMPurify from "dompurify";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { removeItem } from "../../redux/userList/slice";
import { fetchUsers } from "../../redux/userList/asyncActions";
import { selectUsers } from "../../redux/userList/selectors";

import { Status } from "../../redux/userList/types";

import { Grid, Box, LinearProgress, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import styles from "./UsersList.module.css";

// import Highlight from "./Highlighter";

const UsersList = () => {
  const dispatch = useAppDispatch();
  const { users, inputValue, status, searchData } = useAppSelector(
    (state) => state.userList
  );
  console.log(users, searchData);

  function highlighter(inputText: string, dataText: any) {
    const specialSigns = /[\\[{().+*?|^$]/g;
    let regExp = new RegExp(`${inputText}`, "gi");

    if (inputText !== "") {
      if (specialSigns.test(inputText)) {
        inputText.replace(specialSigns, "\\$&");
        return dataText.replace(regExp, "<mark>$&</mark>");
      }
      return {
        __html: DOMPurify.sanitize(dataText.replace(regExp, "<mark>$&</mark>")),
      };
    } else {
      return {
        __html: DOMPurify.sanitize(dataText),
      };
    }
  }

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Grid item xs={12} rowSpacing={5}>
      {
        // <Box sx={{ width: "100%" }}>
        //   <LinearProgress />
        // </Box>

        searchData.length
          ? searchData.map((user) => (
              <Box
                key={user.id}
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
                <Grid item xs={1}>
                  <div>
                    <b>name:</b>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div
                    dangerouslySetInnerHTML={highlighter(inputValue, user.name)}
                  ></div>
                </Grid>

                <Grid item xs={1}>
                  <div>
                    <b>username:</b>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div>{user.username}</div>
                </Grid>

                <Grid item xs={1}>
                  <div>
                    <b>email:</b>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div>{user.email}</div>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <div className={styles.deleteButton}>
                    <HighlightOffIcon
                      onClick={() => dispatch(removeItem(user.id))}
                    />
                  </div>
                </Grid>
              </Box>
            ))
          : users.map((user) => (
              <Box
                key={user.id}
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
                <Grid item xs={1}>
                  <div>
                    <b>name:</b>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div
                    dangerouslySetInnerHTML={highlighter(inputValue, user.name)}
                  ></div>
                </Grid>

                <Grid item xs={1}>
                  <div>
                    <b>username:</b>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div>{user.username}</div>
                </Grid>

                <Grid item xs={1}>
                  <div>
                    <b>email:</b>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div>{user.email}</div>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <div className={styles.deleteButton}>
                    <HighlightOffIcon
                      onClick={() => dispatch(removeItem(user.id))}
                    />
                  </div>
                </Grid>
              </Box>
            ))
      }
    </Grid>
  );
};

export default UsersList;
