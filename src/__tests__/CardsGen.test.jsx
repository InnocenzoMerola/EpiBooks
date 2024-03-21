import { render, screen } from "@testing-library/react";
import SingleBook from "../components/SingleBook";
import fantasy from "../data/fantasy.json";

// describe("renders card for all books", () => {
//   it("se le card sono generate", () => {
//     render(<SingleBook libraryArr={fantasy} />);
//     const books = screen.queryAllByTestId("libri");
//     expect(books).toHaveLength(fantasy.length);
//   });
// });

// describe('create a list when writing "witcher" in the search field', () => {
//   it('create a list when writing "witcher" in the search field', () => {
//     render(<BookList />);
//     const searchField = screen.getAllByPlaceholderText("Cerca");
//     expect(searchField).toHaveLength(3);
//   });
// });
