// src/components/ArticleList.js
import React from "react";
import Article from "./Article"; // Correct the import path

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
};

export default ArticleList;
