import styles from "./ArticleDisplay.module.css";

export default function ArticleDisplay() {
  const articles = [
    {
      title: "Article Title",
      image: "/images/big-chillin.png",
      preview: "This is a preview for the article",
      datePublished: "May 12, 2025",
    },
    {
      title: "Article Title",
      image: "/images/cat-in-car.png",
      preview: "This is a preview for the article",
      datePublished: "May 12, 2025",
    },
    {
      title: "Article Title",
      image: "/images/sneezy.png",
      preview: "This is a preview for the article",
      datePublished: "May 12, 2025",
    },
    {
      title: "Article Title",
      image: "/images/big-chillin.png",
      preview: "This is a preview for the article",
      datePublished: "May 12, 2025",
    },
    {
      title: "Article Title",
      image: "/images/big-chillin.png",
      preview: "This is a preview for the article",
      datePublished: "May 12, 2025",
    },
    {
      title: "Article Title",
      image: "/images/big-chillin.png",
      preview: "This is a preview for the article",
      datePublished: "May 12, 2025",
    },
  ];
  return (
    <div className={styles.articleDisplayContainer}>
      <div className={styles.articleDisplayGrid}>
        {articles.map((article) => {
          return (
            <div className={styles.articlePreviewContainer}>
              <img src={article.image}></img>
              <h1>{article.title}</h1>
              <p>{article.datePublished}</p>

              <hr></hr>
              <br />
              <p>{article.preview}...</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
