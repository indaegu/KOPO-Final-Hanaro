/*eslint-disable*/

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { RouterProvider } from "react-router-dom";

let user = createSlice({
  name: "user",
  initialState: [
    { id: 1, name: "test-user1", age: 12 },
    { id: 2, name: "test-user2", age: 13 },
  ],
  reducers: {
    testFuc(state) {},
  },
});

export let { testFuc } = user.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
  },
});
