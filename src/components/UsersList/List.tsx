import React, { useState } from "react";
import isHighlight from "../../utils/onHighlight";

import { IUser } from "../../redux/userList/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeItem } from "../../redux/userList/slice";

import { responsiveBox, responsiveValue, responsiveWrapper } from "./constants";

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
              <Box onClick={() => setSelectedUser(user)} sx={responsiveWrapper}>
                <Grid xs={1.5} md={3} sx={responsiveBox}>
                  <Grid item xs={3}>
                    <Box>
                      <b>name:</b>
                    </Box>
                  </Grid>
                  <Grid item xs={9} sx={responsiveValue}>
                    <Box
                      dangerouslySetInnerHTML={isHighlight(
                        inputValue,
                        user.name
                      )}
                    ></Box>
                  </Grid>
                </Grid>

                <Grid xs={2} md={3} sx={responsiveBox}>
                  <Grid item xs={5}>
                    <b>username:</b>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sx={responsiveValue}
                    dangerouslySetInnerHTML={isHighlight(
                      inputValue,
                      user.username
                    )}
                  ></Grid>
                </Grid>

                <Grid xs={3} md={3} sx={responsiveBox}>
                  <Grid item xs={3}>
                    <b>email:</b>
                  </Grid>
                  <Grid
                    item
                    xs={9}
                    sx={responsiveValue}
                    dangerouslySetInnerHTML={isHighlight(
                      inputValue,
                      user.email
                    )}
                  ></Grid>
                </Grid>

                <Grid
                  item
                  xs={1.5}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: { xs: "center", md: "unset" },
                    alignSelf: { xs: "end", sm: "unset" },
                  }}
                >
                  <Box
                    className={styles.deleteButton}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IconButton
                      aria-label="delete"
                      onClick={() => dispatch(removeItem(user.id))}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
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
