import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import CommentArea from "./CommentArea";

import Col from "react-bootstrap/Col";
import { Component } from "react";
import "../Books.css";

class SingleBook extends Component {
  clickOnBook = (e) => {
    e.preventDefault();

    this.props.selBook(this.props.book.asin);
  };
  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} xxl={3}>
        <Card
          className={this.props.book.asin === this.props.currentAsin ? "card-sel" : "card-point"}
          onClick={this.clickOnBook}
        >
          <Card.Img variant="top" src={this.props.book.img} className="image" />
          <Card.Body className="d-flex flex-column card-bod">
            <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {this.props.book.title}
            </Card.Title>
            <Card.Text>Genere: {this.props.book.category}</Card.Text>
            <Card.Text className="mt-auto mb-0">Price: {this.props.book.price}$ </Card.Text>

            <Button variant="primary" className="mt-1">
              Aggiungi una recensione
            </Button>
          </Card.Body>
        </Card>

        {/* {this.state.selected === true && <CommentArea id={this.props.book.asin} />} */}
      </Col>
    );
  }
}

export default SingleBook;
