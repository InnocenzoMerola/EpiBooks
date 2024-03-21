import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json"; // Assicurati di importare i dati della libreria

describe("BookList", () => {
  it('aggiorna la lista quando viene cercato "witcher"', () => {
    render(<BookList libraryArr={fantasy} />);
    const searchBar = screen.getByPlaceholderText("Cerca");
    fireEvent.change(searchBar, { target: { value: "witcher" } });

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(3);
  });

  it('aggiorna la lista quando viene cercato "dragon"', () => {
    render(<BookList libraryArr={fantasy} />);
    const searchBar = screen.getByPlaceholderText("Cerca");
    fireEvent.change(searchBar, { target: { value: "dragon" } });

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(8);
  });

  it("check that a clicked book has a dfferent color", () => {
    render(<BookList libraryArr={fantasy} />);
    const card = screen.getAllByTestId("card");
    fireEvent.click(card[0]);
    expect(card[0]).toHaveStyle("border: 1px solid green");
  });

  it("return to normal border", () => {
    render(<BookList libraryArr={fantasy} />);
    const card = screen.getAllByTestId("card");
    const firstBook = card[0];
    fireEvent.click(firstBook);
    expect(firstBook).toHaveStyle("border: 1px solid green");
    const secondBook = card[1];
    fireEvent.click(secondBook);
    expect(firstBook).not.toHaveStyle("border: 1px solid green");
  });

  it("renders no book comment", () => {
    render(<BookList libraryArr={fantasy} />);
    const allTheSingleComments = screen.queryAllByTestId("single-comment");
    expect(allTheSingleComments).toHaveLength(0);
  });

  it("renders comment on sel book", async () => {
    render(<BookList libraryArr={fantasy} />);
    const bookCard = screen.getAllByTestId("card");
    const firstBookCard = bookCard[0];
    fireEvent.click(firstBookCard);
    await waitFor(() => {
      const allTheSingleComments = screen.queryAllByTestId("single-comment");
      expect(allTheSingleComments).not.toHaveLength(0);
    });
  });
});
