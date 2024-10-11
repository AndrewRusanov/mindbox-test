import { configureStore, createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = TodoSlice.actions;

const store = configureStore({
  reducer: {
    todos: TodoSlice.reducer,
  },
});

export default store;
