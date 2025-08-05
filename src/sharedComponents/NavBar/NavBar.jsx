import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navBarContainer}>
      <NavLogo />
      <NavMenu />
    </div>
  );
}
