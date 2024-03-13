import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

class BookList extends Component {
  state = {
    title: "",
  };

  searchClick = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    const { title } = this.state;
    const allBooks = [...fantasy];
    // const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];
    const searchedBook = allBooks.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));

    return (
      <>
        <div className="text-center">
          <input type="text" placeholder="Cerca" value={title} onChange={this.searchClick} className="inp-w" />
        </div>

        {searchedBook.length === 0 ? (
          <p>Spiacenti non abbiamo questo libro </p>
        ) : (
          searchedBook.map((b) => <SingleBook key={b.asin} book={b} />)
        )}
        {/* {this.props.libraryArr.map((b) => {
          <SingleBook book={b} />;
        })} */}
      </>
    );
  }
}

export default BookList;
