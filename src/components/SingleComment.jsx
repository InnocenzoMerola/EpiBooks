const SingleComment = ({ comment }) => {
  return (
    <div>
      {comment.comment}, rate: {comment.rate}
    </div>
  );
};

export default SingleComment;
