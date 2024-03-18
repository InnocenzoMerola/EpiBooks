import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    title: "",
    selectedAsin: null,
  };

  searchClick = (e) => {
    this.setState({ title: e.target.value });
  };

  selBook = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    const { title, selectedAsin } = this.state;
    const allBooks = this.props.libraryArr;

    const searchedBook = allBooks.filter((book) => book.title.toLowerCase().includes(this.state.title));

    return (
      <>
        <Row className="row-gap-4 py-2">
          <div className="text-center">
            <input type="text" placeholder="Cerca" value={title} onChange={this.searchClick} className="inp-w" />
          </div>
          <Col sm={9}>
            <Row className="row-gap-4">
              {searchedBook.length === 0 ? (
                <p>Spiacenti questo libro non è disponibile</p>
              ) : (
                searchedBook.map((book) => (
                  <SingleBook
                    key={book.asin}
                    book={book}
                    selBook={this.selBook}
                    sel={selectedAsin && selectedAsin.asin === book.asin}
                  />
                ))
              )}
            </Row>
          </Col>
          <Col sm={3}>
            {/* <CommentArea id={this.props.libraryArr.asin} /> */}
            <CommentArea selectedAsin={selectedAsin} />
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
