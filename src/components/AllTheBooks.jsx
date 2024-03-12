import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import books from "../data/fantasy.json";
import { Component } from "react";

class AllTheBooks extends Component {
  // state = {

  // }

  render() {
    return (
      <Container fluid>
        <Row className="row-gap-4">
          {books.map((book) => {
            return (
              <Col key={book.asin}>
                <Card style={{ width: "18rem", height: "95vh" }}>
                  <Card.Img variant="top" src={book.img} style={{ height: "60%" }} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Genere: {book.category}</Card.Text>
                    <Card.Text className="mt-auto mb-0">Price: {book.price}$ </Card.Text>

                    <Button variant="primary" className="mt-1">
                      Go somewhere
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
