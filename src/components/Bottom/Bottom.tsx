import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./Bottom.module.scss";
import { Todo } from "../../store/store";
import { Filters } from "../../app/types/types";

type Props = {
  needTodo: Todo[];
  filter: Filters;
  setFilter: Dispatch<SetStateAction<Filters>>;
  selectAll: () => void;
};

const Bottom: FC<Props> = ({ needTodo, filter, setFilter, selectAll }) => {
  const filtres = Object.values(Filters);

  const getFormattedTasks = (countTask: number) => {
    const count = countTask % 10;
    if (count === 0) return "задач осталось";
    if (count === 1) return "задача осталась";
    if (count >= 2 && count <= 4) return "задачи осталось";
    return "задач осталось";
  };

  return (
    <section className={styles.bottom}>
      <span className={styles.needTodo}>
        {needTodo.length} {getFormattedTasks(needTodo.length)}
      </span>
      <div className={styles.filters}>
        {filtres.map((filterItem, index) => (
          <button
            key={index}
            className={`${styles.filter} ${
              filterItem === filter ? styles.filterActive : ""
            }`}
            onClick={() => setFilter(filterItem)}
          >
            {filterItem}
          </button>
        ))}
      </div>
      <button type="button" className={styles.selectAll} onClick={selectAll}>
        Выполнить все
      </button>
    </section>
  );
};

export default Bottom;
