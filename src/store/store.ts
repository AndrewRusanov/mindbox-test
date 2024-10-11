import { configureStore, createSlice } from "@reduxjs/toolkit";

export type Todo = {
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
        id: state.length,
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (
      state,
      action: {
        payload: number;
      }
    ) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (
      state,
      action: {
        payload: number;
      }
    ) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = TodoSlice.actions;

const store = configureStore({
  reducer: {
    todos: TodoSlice.reducer,
  },
});

export default store;
