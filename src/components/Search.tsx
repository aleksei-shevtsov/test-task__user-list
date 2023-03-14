import { Grid, TextField } from "@mui/material";

const Search = () => {
  return (
    <Grid item xs={12} margin={2}>
      <TextField
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
