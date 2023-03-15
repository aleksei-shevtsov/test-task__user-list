import { store } from "./redux/store";
import { Provider } from "react-redux";

import { Grid } from "@mui/material";
import UsersList from "./components/UsersList";
import Search from "./components/Search";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Grid
        container
        rowSpacing={5}
        sx={{ color: "text" }}
        style={{ margin: "10rem 0" }}
      >
        <Search />
        <UsersList />
      </Grid>
    </Provider>
  );
}

export default App;
