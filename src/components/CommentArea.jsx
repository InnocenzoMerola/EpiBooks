import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const MY_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTc1MTRjNTllYzAwMTk5MGQ2ZTUiLCJpYXQiOjE3MTA3NjU3MTYsImV4cCI6MTcxMTk3NTMxNn0.k4up4vz2nTcjQ16Lc7mvbDhDBn3Qt-9HLiiCb8lx1ko";
const MY_URL = "https://striveschool-api.herokuapp.com/api/comments/";

const CommentArea = function ({ selectedAsin }) {
  const [comments, setComments] = useState([]);

  const fetchComment = () => {
    fetch(MY_URL + selectedAsin, {
      headers: {
        authorization: MY_KEY,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella lettura dei dati");
        }
      })
      .then((commentsApi) => {
        setComments(commentsApi);
      })
      .catch((error) => {
        console.log("Errore", error);
      });
  };

  useEffect(() => {
    if (selectedAsin) {
      fetchComment();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAsin]);

  return (
    <div data-testid="list-comment">
      <CommentList commArr={comments} />
      <AddComment id={selectedAsin} data-testid="addComment" />
    </div>
  );
};

export default CommentArea;
