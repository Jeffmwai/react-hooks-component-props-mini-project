import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";
import Article from "../components/Article"; // Correct the import path

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App header")).toBeInTheDocument();
  expect(container.querySelector(".App aside")).toBeInTheDocument();
  expect(container.querySelector(".App main")).toBeInTheDocument();
});


const App = () => {
  return (
    <div className="App">
      <Header name={data.name} />
      <About image={data.image} about={data.about} />
      <ArticleList posts={data.posts} />
    </div>
  );
};

export default App;
