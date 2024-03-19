import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = function (props) {
  const [title, setTitle] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);

  const searchClick = (e) => {
    setTitle(e.target.value);
  };

  const selBook = (asin) => {
    setSelectedAsin(asin);
  };

  const allBooks = props.libraryArr;

  const searchedBook = allBooks.filter((book) => book.title.toLowerCase().includes(title));

  return (
    <>
      <Row className="row-gap-4 py-2">
        <div className="text-center">
          <input type="text" placeholder="Cerca" value={title} onChange={searchClick} className="inp-w" />
        </div>
        <Col xs={6} sm={9}>
          <Row className="row-gap-4">
            {searchedBook.length === 0 ? (
              <p>Spiacenti questo libro non è disponibile</p>
            ) : (
              searchedBook.map((book) => (
                <SingleBook
                  key={book.asin}
                  book={book}
                  selBook={selBook}
                  // sel={selectedAsin && selectedAsin.asin === book.asin}
                  currentAsin={selectedAsin}
                />
              ))
            )}
          </Row>
        </Col>
        <Col xs={6} sm={3}>
          <CommentArea selectedAsin={selectedAsin} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
