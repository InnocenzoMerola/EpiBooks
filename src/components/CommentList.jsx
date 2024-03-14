import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      <div>
        {this.props.commArr.map((comment) => (
          <p>shd</p>
          //   <SingleComment key={comment._id} comment={comment} />
        ))}
      </div>
    );
  }
}

export default CommentList;
