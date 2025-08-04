import ArticleDisplay from "./ArticleDisplay/ArticleDisplay";
import Header from "./Header/Header";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <ArticleDisplay />
    </div>
  );
}
