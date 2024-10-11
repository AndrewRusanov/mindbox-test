import Logo from "../../assets/images/logo.svg?react";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <h1 className={styles.title}>Todos</h1>
    </header>
  );
};
export default Header;
