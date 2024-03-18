import { createSlice } from "@reduxjs/toolkit";

let initialState = [];
let lastID = 0;

export const bugsSlice = createSlice({
  name: "bugs",
  initialState,
  reducers: {
    addBug: (state, action) => {
      //No need to return as we are mutating the original state and Immer takes care of it bts
      state.push({
        id: ++lastID,
        description: action.payload,
        resolved: false,
      });
    },
    deleteBug: (state, action) => {
      //We are returning a new modified copy of the state, NOT mutating the OG, that's why we need return
      return state.filter((bug) => bug.id !== action.payload);
    },
    toggleBug: (state, action) => {
      return state.map((bug) =>
        bug.id !== action.payload ? bug : { ...bug, resolved: !bug.resolved }
      );
    },
  },
});

export const { addBug, deleteBug, toggleBug } = bugsSlice.actions;
export default bugsSlice.reducer;
