// App.js
import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const App = ({ name, image, about, posts }) => {
  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about} />
      <ArticleList posts={posts} />
    </div>
  );
};

export default App;
