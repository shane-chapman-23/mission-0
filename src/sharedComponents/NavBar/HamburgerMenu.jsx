import {useState} from "react";
import {CgClose} from "react-icons/cg";

import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled(!toggled);
  }

  return (
    <>
      <div className={styles.hamburgerMenu} onClick={handleClick}>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
      </div>

      {toggled && (
        <div className={styles.hamburgerNav}>
          <CgClose className={styles.closeButton} onClick={handleClick} />
          <ul>
            <li>Menu1</li>
            <li>Menu1</li>
            <li>Menu1</li>
            <li>Login</li>
          </ul>
        </div>
      )}
    </>
  );
}
