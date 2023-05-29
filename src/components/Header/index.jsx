import logo from "../../assets/space-logo.png";
import search from "../../assets/magnifying-glass-icon.png";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Space logo" />
      <div className={styles.header__container}>
        <input
          className={styles.header__input}
          type="text"
          placeholder="w/ u looking for?"
        />
        <img src={search} alt="Magnifying Glass icon" />
      </div>
    </header>
  );
}
