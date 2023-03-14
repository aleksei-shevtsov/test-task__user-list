import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'userList/fetchUsers',
    async () => {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
      return data
    }
)