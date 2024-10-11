import { ChangeEvent, useEffect, useState } from "react";
import Header from "../components/Header";
import "./styles/index.scss";
import TextField from "../components/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  selectAll,
  Todo,
  toggleTodo,
} from "../store/store";
import TodoList from "../components/TodoList";
import Bottom from "../components/Bottom";
import { Filters } from "./types/types";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: { todos: Todo[] }) => state.todos);
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<Filters>(Filters.ALL);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleSelectAll = () => {
    dispatch(selectAll());
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const NeedTodos = todos.filter((todo) => Boolean(!todo.completed));

  const filteredTodos = todos.filter((todo) => {
    if (filter === Filters.ALL) return true;
    if (filter === Filters.ACTIVE) return !todo.completed;
    if (filter === Filters.COMPLETED) return todo.completed;
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <main className="app">
      <div className="container">
        <Header />
        <TextField
          value={inputValue}
          onChange={handleChange}
          addTodo={handleAddTodo}
        />
        <TodoList
          todos={filteredTodos}
          toggleTodo={handleToggleTodo}
          deleteTodo={handleDeleteTodo}
        />
        <Bottom
          needTodo={NeedTodos}
          filter={filter}
          setFilter={setFilter}
          selectAll={handleSelectAll}
        />
      </div>
    </main>
  );
};

export default App;
