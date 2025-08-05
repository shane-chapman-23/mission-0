import styles from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <div className={styles.navMenuContainer}>
      <ul>
        <li>Menu1</li>
        <li>Menu2</li>
        <li>Menu3</li>
        <li className={styles.loginButton}>Login</li>
      </ul>
    </div>
  );
}
