import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTitleContainer}>
        <h1 className={styles.headerTitle}>
          Catch up on the latest <br />
          marketing news.
        </h1>
      </div>
      <div className={styles.headerSearchContainer}>
        <form>
          <input type="text" placeholder="search"></input>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
