import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import CommentArea from "./CommentArea";

import Col from "react-bootstrap/Col";

import "../Books.css";

const SingleBook = function (props) {
  const clickOnBook = (e) => {
    e.preventDefault();

    props.selBook(props.book.asin);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} xxl={3}>
      <Card className={props.book.asin === props.currentAsin ? "card-sel" : "card-point"} onClick={clickOnBook}>
        <div className="img-div-h">
          <Card.Img variant="top" src={props.book.img} className="image" />
        </div>
        <Card.Body className="d-flex flex-column card-bod">
          <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {props.book.title}
          </Card.Title>
          <Card.Text>Genere: {props.book.category}</Card.Text>
          <Card.Text className="mt-auto mb-0">Price: {props.book.price}$ </Card.Text>

          <Button variant="primary" className="mt-1">
            Aggiungi una recensione
          </Button>
        </Card.Body>
      </Card>

      {/* {this.state.selected === true && <CommentArea id={this.props.book.asin} />} */}
    </Col>
  );
};

export default SingleBook;
