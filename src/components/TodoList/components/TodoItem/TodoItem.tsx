import { FC } from "react";
import { Todo } from "../../../../store/store";
import trash from "../../../../assets/images/trash.svg";
import styles from "./TodoItem.module.scss";

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
      <button
        type="button"
        className={styles.deleteBtn}
        onClick={() => deleteTodo(todo.id)}
      >
        <img src={trash} alt="Удалить задачу" className={styles.deleteImg} />
      </button>
    </article>
  );
};

export default TodoItem;
