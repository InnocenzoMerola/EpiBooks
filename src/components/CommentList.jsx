import SingleComment from "./SingleComment";
import ListGroup from "react-bootstrap/ListGroup";

const CommentList = function (props) {
  return (
    <div>
      <ListGroup>
        {props.commArr.map((comment) => {
          return (
            <ListGroup.Item key={comment._id} className="d-flex flex-column" data-testid="comment-list-comment">
              <SingleComment comment={comment} />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default CommentList;
