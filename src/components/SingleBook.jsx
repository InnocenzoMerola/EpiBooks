import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Component } from "react";
import "../Books.css";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  clickOnBook = (e) => {
    e.preventDefault();
    this.setState((st) => ({
      selected: !st.selected,
    }));
  };
  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} xxl={2}>
        <Card className={this.state.selected ? "card-sel" : "card-point"} onClick={this.clickOnBook}>
          <Card.Img variant="top" src={this.props.book.img} className="image" />
          <Card.Body className="d-flex flex-column card-bod">
            <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {this.props.book.title}
            </Card.Title>
            <Card.Text>Genere: {this.props.book.category}</Card.Text>
            <Card.Text className="mt-auto mb-0">Price: {this.props.book.price}$ </Card.Text>

            <Button variant="primary" className="mt-1">
              Aggiungi al carrello
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

// const SingleBook = function (props) {
//   return (
//     <Col xs={12} sm={6} md={4} lg={3} xxl={2}>
//       <Card key={props.book.asin}>
//         <Card.Img variant="top" src={props.book.img} className="image" />
//         <Card.Body className="d-flex flex-column card-bod">
//           <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//             {props.book.title}
//           </Card.Title>
//           <Card.Text>Genere: {props.book.category}</Card.Text>
//           <Card.Text className="mt-auto mb-0">Price: {props.book.price}$ </Card.Text>

//           <Button variant="primary" className="mt-1">
//             Aggiungi al carrello
//           </Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

export default SingleBook;
