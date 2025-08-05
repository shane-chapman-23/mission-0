import styles from "./NavLogo.module.css";

export default function NavLogo() {
  return (
    <div className={styles.navLogoContainer}>
      <div className={styles.navLogo}></div>
      <h2 className={styles.navCompanyName}>
        Marketing <br />
        Association NZ
      </h2>
    </div>
  );
}
