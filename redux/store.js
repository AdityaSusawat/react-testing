//This store is being provided to the React app through the main.jsx file using a Provider

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.js";
import bugsReducer from "./bugsSlice.js";
import toDoReducer from "./toDoSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bugs: bugsReducer,
    todo: toDoReducer,
  },
});
