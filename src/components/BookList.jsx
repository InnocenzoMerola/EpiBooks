import { Component } from "react";

import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    title: "",
  };

  searchClick = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    const { title } = this.state;
    const allBooks = this.props.libraryArr;

    const searchedBook = allBooks.filter((book) => book.title.toLowerCase().includes(this.state.title));

    return (
      <>
        <div className="text-center">
          <input type="text" placeholder="Cerca" value={title} onChange={this.searchClick} className="inp-w" />
        </div>

        {searchedBook.length === 0 ? (
          <p>Spiacenti questo libro non è disponibile</p>
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
