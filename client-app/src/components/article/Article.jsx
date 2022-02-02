import React from "react";
import ReactMarkdown from "react-markdown";
import "./Article.css";
import { useParams } from "react-router";
import { useFetch } from "../../custom-hooks";
import { LoadingBar } from "../common";

const url = "https://localhost:44333/api/articles/";

const Article = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(url + id);
  return (
    <div className="article">
      {loading && <LoadingBar />}
      {data && (
        <ArticleDisplay
          title={data.articleTitle}
          content={data.articleContent}
        />
      )}
      {error && <ArticleErrorMessage />}
    </div>
  );
};

export default Article;

const ArticleDisplay = (props) => {
  return (
    <div>
      <div>
        <h1>{props.title}</h1>
      </div>
      <div className="article-content">
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
    </div>
  );
};

const ArticleErrorMessage = () => {
  return <div><h1>Грешка при вчитување</h1></div>;
};
