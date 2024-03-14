import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const MY_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTc1MTRjNTllYzAwMTk5MGQ2ZTUiLCJpYXQiOjE3MDkyODMxNTMsImV4cCI6MTcxMDQ5Mjc1M30.Ayse55yV_8pG9LTXjxoXC7o-zrrF63ac6KuLddTNDnU";
const MY_URL = "https://striveschool-api.herokuapp.com/api/comments/";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.id,
    },
  };

  newComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(MY_URL, {
        method: "Post",
        body: JSON.stringify(this.state.comment),
        headers: {
          Authorization: MY_KEY,
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        alert("Grazie per la recensione");
        this.setState({
          comment: {
            comment: "",
            rate: 1,
            elementId: this.props.id,
          },
        });
      } else {
        throw new Error("C'è qqualche problema");
      }
    } catch (error) {
      console.log("ERRORE", error);
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.newComment}>
          <Form.Group className="mb-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci una recensione"
              value={this.state.comment.comment}
              onChange={(e) => {
                this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="success" type="submit">
            Invia recensione
          </Button>
        </Form>
      </div>
    );
  }
}
export default AddComment;
