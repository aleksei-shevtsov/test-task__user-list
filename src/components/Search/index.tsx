import React from "react";

import { onSearchMethod } from "../../utils/onSearchMethod";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  resetRemovedItems,
  setInputValue,
  setSearchData,
} from "../../redux/userList/slice";
import { selectUsers } from "./../../redux/userList/selectors";

import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Search = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState<string>("");

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
    const newArr = onSearchMethod(event.target.value, users);
    dispatch(setSearchData(newArr));
  };

  const updateSearchValue = React.useCallback((str: string) => {
    dispatch(setInputValue(str));
  }, []);

  return (
    <Grid container justifyContent="center" sx={{ flexWrap: "nowrap" }}>
      <Grid
        item
        xs={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "background.paper",
          marginLeft: 2,
        }}
      >
        <TextField
          value={value}
          onChange={onChangeInput}
          fullWidth
          autoFocus
          className="input"
          placeholder="Leanne Graham"
          id="outlined-required"
          label="I'm looking for..."
        />
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "background.paper",
          marginRight: 2,
        }}
      >
        <Button onClick={() => dispatch(resetRemovedItems())} variant="text">
          Reset
        </Button>
      </Grid>
    </Grid>
  );
};

export default Search;
