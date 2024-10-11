import { FC } from "react";
import styles from "./TodoList.module.scss";
import { Todo } from "../../store/store";
import TodoItem from "./components/TodoItem";

type Props = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoList: FC<Props> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <section className={styles.todoList}>
      {todos.map((item, index) => (
        <TodoItem
          key={index}
          todo={item}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </section>
  );
};

export default TodoList;
