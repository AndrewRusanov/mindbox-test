import { ChangeEvent, FC } from "react";
import styles from "./TextField.module.scss";

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  addTodo: () => void;
};

const TextField: FC<Props> = ({ value, onChange, addTodo }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Новая задача"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      <button
        type="button"
        className={styles.addBtn}
        disabled={value.length === 0}
        onClick={addTodo}
      >
        Добавить задачу
      </button>
    </div>
  );
};

export default TextField;
