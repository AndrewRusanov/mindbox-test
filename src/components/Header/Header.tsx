import logo from "../../assets/images/logo.svg";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Логотип" />
      <h1 className={styles.title}>Todos</h1>
    </header>
  );
};
export default Header;
