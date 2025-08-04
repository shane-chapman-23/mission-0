import NavLogo from "./components/NavLogo";
import NavMenu from "./components/NavMenu";

import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div>
      <NavLogo />
      <NavMenu />
    </div>
  );
}
