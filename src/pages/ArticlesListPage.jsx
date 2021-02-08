import React from "react";
import ArticlesList from "../components/ArticleList"
import articleContent from "./article-content";

function ArticlesListPage() {
  return (
    <div>
      <h1>Articles</h1>
<ArticlesList articles={articleContent}/>
    </div>
  );
}

export default ArticlesListPage;
