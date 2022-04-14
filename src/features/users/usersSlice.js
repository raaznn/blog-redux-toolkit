import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Immanuel Kant",
  },
  {
    id: "1",
    name: "Georg Wilhelm Friedrich Hegel",
  },
  {
    id: "2",
    name: "Martin Heidegger",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
