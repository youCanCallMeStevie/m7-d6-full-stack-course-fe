import React from "react";
import ArticlesList from "../components/ArticleList"
import articleContent from "./article-content"
import NotFound from "./NotFound"

function ArticlePage({match}) {
    const name = match.params.name
    const article = articleContent.find(article=>article.name === name)

    if(!article)return <NotFound/>

    const otherArticles = articleContent.filter(article => article.name !== name)
  return (
    <div>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
      ))}
      <h3>Other articles: </h3>
      <ArticlesList articles={otherArticles}/>
    </div>
  );
}

export default ArticlePage;
