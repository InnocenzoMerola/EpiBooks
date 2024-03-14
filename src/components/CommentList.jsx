import { Component } from "react";
import SingleComment from "./SingleComment";
import ListGroup from "react-bootstrap/ListGroup";

class CommentList extends Component {
  render() {
    return (
      <div>
        <ListGroup>
          {this.props.commArr.map((comment) => {
            return (
              <ListGroup.Item key={comment._id}>
                <SingleComment comment={comment} />
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default CommentList;
