import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import books from "../data/fantasy.json";
import { Component } from "react";
import "../Books.css";

class AllTheBooks extends Component {
  // state = {

  // }

  render() {
    return (
      <Container fluid className="cont">
        <Row className="row-gap-4 py-2">
          {books.map((book) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} xxl={2} key={book.asin}>
                <Card>
                  <Card.Img variant="top" src={book.img} className="image" />
                  <Card.Body className="d-flex flex-column card-bod">
                    <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {book.title}
                    </Card.Title>
                    <Card.Text>Genere: {book.category}</Card.Text>
                    <Card.Text className="mt-auto mb-0">Price: {book.price}$ </Card.Text>

                    <Button variant="primary" className="mt-1">
                      Aggiungi al carrello
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
