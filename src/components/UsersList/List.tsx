import React, { useState } from "react";
import isHighlight from "../../utils/onHighlight";

import { IUser } from "../../redux/userList/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeItem } from "../../redux/userList/slice";

import { Box, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import ModalWindow from "../ModalWindow";

import styles from "./UsersList.module.css";

type ListProps = {
  list: IUser[];
};

const List: React.FC<ListProps> = ({ list }) => {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const dispatch = useAppDispatch();
  const { inputValue, searchData } = useAppSelector((state) => state.userList);

  const renderList = searchData.length ? searchData : list;

  return (
    <>
      {renderList.map(
        (user) =>
          !user.isDeleted && (
            <React.Fragment key={user.id}>
              <Box
                onClick={() => setSelectedUser(user)}
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
                    dangerouslySetInnerHTML={isHighlight(inputValue, user.name)}
                  ></div>
                </Grid>

                <Grid item xs={1.5}>
                  <div>
                    <b>username:</b>
                  </div>
                </Grid>
                <Grid item xs={2.5}>
                  <div
                    dangerouslySetInnerHTML={isHighlight(
                      inputValue,
                      user.username
                    )}
                  ></div>
                </Grid>

                <Grid item xs={1}>
                  <div>
                    <b>email:</b>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div
                    dangerouslySetInnerHTML={isHighlight(
                      inputValue,
                      user.email
                    )}
                  ></div>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <div
                    className={styles.deleteButton}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IconButton
                      aria-label="delete"
                      onClick={() => dispatch(removeItem(user.id))}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </Grid>
              </Box>
            </React.Fragment>
          )
      )}

      {selectedUser && (
        <ModalWindow
          handleClose={() => setSelectedUser(null)}
          user={selectedUser}
        />
      )}
    </>
  );
};

export default List;
