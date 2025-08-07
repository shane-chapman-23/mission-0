import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

import styles from "./NavBar.module.css";
import HamburgerMenu from "./HamburgerMenu";

export default function NavBar() {
  return (
    <div className={styles.navBarContainer}>
      <NavLogo />
      <NavMenu />
      <HamburgerMenu />
    </div>
  );
}
