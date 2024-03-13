import { Component } from "react";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";
// import history from "../data/history.json";
// import horror from "../data/horror.json";
// import romance from "../data/romance.json";
// import scifi from "../data/scifi.json";

class BookList extends Component {
  state = {
    title: "",
  };

  searchClick = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    const { title } = this.state;
    const genre = [...fantasy];
    // const genre = [...fantasy, ...history, ...horror, ...romance, ...scifi];

    const searchedBook = genre.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));

    return (
      <>
        <input type="text" placeholder="Cerca" value={title} onChange={this.searchClick} />
        {searchedBook.map((b) => (
          <SingleBook key={b.asin} book={b} />
        ))}
        {/* {this.props.libraryArr.map((b) => {
          <SingleBook book={b} />;
        })} */}
      </>
    );
  }
}

export default BookList;
