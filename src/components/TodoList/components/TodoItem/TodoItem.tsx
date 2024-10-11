import React, { FC } from "react";
import { Todo } from "../../../../store/store";
import styles from "./TodoItem.module.scss";
import Trash from "../../../../assets/images/trash.svg?react";

type Props = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem: FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <article className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
      >
        {todo.text}
      </span>
      <Trash onClick={() => deleteTodo(todo.id)} className={styles.deleteBtn} />
    </article>
  );
};

export default TodoItem;
