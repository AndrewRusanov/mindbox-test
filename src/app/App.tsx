import { ChangeEvent, useState } from "react";
import Header from "../components/Header";
import "./styles/index.scss";
import TextField from "../components/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, Todo, toggleTodo } from "../store/store";
import TodoList from "../components/TodoList";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: { todos: Todo[] }) => state.todos);
  const [inputValue, setInputValue] = useState<string>("");

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
          todos={todos}
          toggleTodo={handleToggleTodo}
          deleteTodo={handleDeleteTodo}
        />
      </div>
    </main>
  );
};

export default App;
