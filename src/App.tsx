import { store } from "./redux/store";
import { Provider } from "react-redux";

import { Grid } from "@mui/material";
import UsersList from "./components/UsersList";
import Search from "./components/Search";

function App() {
  return (
    <Provider store={store}>
      <Grid
        container
        rowSpacing={5}
        sx={{
          color: "text",
          maxWidth: 1200,
          margin: {
            xs: "3rem auto",
            sm: "5rem auto",
            md: "10rem auto",
          },
          fontSize: { xs: "13px", sm: "16px" },
        }}
      >
        <Search />
        <UsersList />
      </Grid>
    </Provider>
  );
}

export default App;
