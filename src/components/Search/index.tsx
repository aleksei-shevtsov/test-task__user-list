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
  const [value, setValue] = React.useState<string>("");
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const responsiveInputGrid = {
    display: "flex",
    justifyContent: "center",
    bgcolor: "background.paper",
    marginLeft: 2,
  };

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
      <Grid item xs={9} sm={10} md={11} sx={responsiveInputGrid}>
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
        xs={3}
        sm={2}
        md={1}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          bgcolor: "background.paper",
          marginRight: { xs: "35px" },
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
