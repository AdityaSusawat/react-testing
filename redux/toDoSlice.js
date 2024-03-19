import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, description: "First sample to do", completed: false },
];

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newID =
        state.length > 0 ? Math.max(...state.map((t) => t.id)) + 1 : 1;
      return [
        ...state,
        { id: newID, description: action.payload, completed: false },
      ];
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    },
    deleteAllCompleted: (state) => {
      return state.filter((task) => task.completed === false);
    },
  },
});

export default toDoSlice.reducer;
export const { addTask, deleteTask, toggleCompleted, deleteAllCompleted } =
  toDoSlice.actions;
