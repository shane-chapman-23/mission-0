import {useState} from "react";

import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <div className={styles.hamburgerMenu}>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
      </div>
    </>
  );
}
