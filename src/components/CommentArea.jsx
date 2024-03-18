import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const MY_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTc1MTRjNTllYzAwMTk5MGQ2ZTUiLCJpYXQiOjE3MTA3NjU3MTYsImV4cCI6MTcxMTk3NTMxNn0.k4up4vz2nTcjQ16Lc7mvbDhDBn3Qt-9HLiiCb8lx1ko";
const MY_URL = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComment = () => {
    fetch(MY_URL + this.props.selectedAsin, {
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
        this.setState({
          comments: commentsApi,
        });
      })
      .catch((error) => {
        console.log("Errore", error);
      });
  };

  componentDidMount() {
    if (this.props.selectedAsin) {
      this.fetchComment();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedAsin !== this.props.selectedAsin) {
      this.fetchComment();
    }
  }

  render() {
    return (
      <div>
        <CommentList commArr={this.state.comments} />
        <AddComment id={this.props.selectedAsin} />
      </div>
    );
  }
}

export default CommentArea;
