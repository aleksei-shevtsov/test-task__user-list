import React from "react";
import debounce from "lodash.debounce";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setInputValue, setSearchData } from "../../redux/userList/slice";
import { selectUsers } from "./../../redux/userList/selectors";

import { Grid, TextField } from "@mui/material";
import { onSearchMethod } from "../../utils/onSearchMethod";

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

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      console.log("str", str);
      dispatch(setInputValue(str));
    }, 800),
    []
  );

  return (
    <Grid item xs={12} margin={2}>
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
  );
};

export default Search;
