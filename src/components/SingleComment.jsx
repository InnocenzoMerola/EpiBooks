import Button from "react-bootstrap/Button";

const MY_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTc1MTRjNTllYzAwMTk5MGQ2ZTUiLCJpYXQiOjE3MTA3NjU3MTYsImV4cCI6MTcxMTk3NTMxNn0.k4up4vz2nTcjQ16Lc7mvbDhDBn3Qt-9HLiiCb8lx1ko";
const MY_URL = "https://striveschool-api.herokuapp.com/api/comments/";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      const response = await fetch(MY_URL + asin, {
        method: "DELETE",

        headers: {
          Authorization: MY_KEY,
        },
      });
      if (response.ok) {
        alert("La recensione è stata eliminata");
      } else {
        throw new Error("Ritenta");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {comment.comment}, rate: {comment.rate}
      <Button variant="danger" className="ms-2" onClick={() => deleteComment(comment._id)}>
        Elimina
      </Button>
    </>
  );
};

export default SingleComment;
