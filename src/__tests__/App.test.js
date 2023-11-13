import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  const testData = {
    name: 'Underreacted',
    image: 'path/to/image.jpg',
    about: 'A blog about learning React',
    posts: [
      {
        id: 1,
        title: 'Components 101',
        date: 'December 15, 2020',
        preview: 'Setting up the building blocks of your site',
        minutes: 5
      },
      {
        id: 2,
        title: 'React Data Flow',
        date: 'December 11, 2020',
        preview: 'Passing props is never passé',
        minutes: 15
      },
      {
        id: 3,
        title: 'Function vs Class Components',
        preview: 'React, meet OOJS.',
        minutes: 47
      }
    ]
  };

  render(<App {...testData} />);
  expect(screen.getByText("Underreacted")).toBeInTheDocument();
  expect(screen.getByAltText("blog logo")).toBeInTheDocument();
  expect(screen.getByText("A blog about learning React")).toBeInTheDocument();
  expect(screen.getByText("Setting up the building blocks of your site")).toBeInTheDocument();
  expect(screen.getByText("Passing props is never passé")).toBeInTheDocument();
  expect(screen.getByText("React, meet OOJS.")).toBeInTheDocument();
});
