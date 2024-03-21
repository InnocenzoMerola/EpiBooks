import { render, screen } from "@testing-library/react";

import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

describe("renders card for all books", () => {
  it("se le card sono generate", () => {
    render(<BookList libraryArr={fantasy} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(fantasy.length);
  });
});
