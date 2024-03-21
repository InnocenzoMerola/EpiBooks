import SingleComment from "./SingleComment";
import ListGroup from "react-bootstrap/ListGroup";

const CommentList = function (props) {
  return (
    <ListGroup>
      {props.commArr.map((comment) => (
        <SingleComment comment={comment} key={comment._id} />
      ))}
    </ListGroup>
  );
};

export default CommentList;
