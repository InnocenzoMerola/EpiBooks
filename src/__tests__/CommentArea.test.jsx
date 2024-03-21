import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

describe("comment list", () => {
  it('renderizza "CommentArea"', () => {
    render(<BookList libraryArr={fantasy} />);
    const commentsList = screen.getByPlaceholderText(/inserisci una recensione/i);
    expect(commentsList).toBeInTheDocument();
  });
});
