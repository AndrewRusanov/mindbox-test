import { Dispatch, FC, SetStateAction } from "react";
import styles from "./Bottom.module.scss";
import { Todo } from "../../store/store";
import { Filters } from "../../app/types/types";

type Props = {
  needTodo: Todo[];
  filter: Filters;
  setFilter: Dispatch<SetStateAction<Filters>>;
};

const Bottom: FC<Props> = ({ needTodo, filter, setFilter }) => {
  const filtres = Object.values(Filters);

  return (
    <section className={styles.bottom}>
      <span className={styles.needTodo}>{needTodo.length} задачи осталось</span>
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
      <button type="button" className={styles.selectAll}>
        Выполнить все
      </button>
    </section>
  );
};

export default Bottom;
