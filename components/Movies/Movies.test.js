import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Movies from ".";

const initialMovies = [
  {
    id: "0",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "1",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "2",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

test("renders the initial movies", () => {
  render(<Movies initialMovies={initialMovies} />);
  const hulkHeading = screen.getByRole("heading", {
    name: "The Incredible Hulk",
  });
  expect(hulkHeading).toBeInTheDocument();

  const spidermanHeading = screen.getByRole("heading", {
    name: "Spiderman 1-25",
  });
  expect(spidermanHeading).toBeInTheDocument();

  const lordHeading = screen.getByRole("heading", {
    name: "Lord of the Rings",
  });
  expect(lordHeading).toBeInTheDocument();
});
