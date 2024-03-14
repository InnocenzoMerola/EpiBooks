import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const MY_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTc1MTRjNTllYzAwMTk5MGQ2ZTUiLCJpYXQiOjE3MDkyODMxNTMsImV4cCI6MTcxMDQ5Mjc1M30.Ayse55yV_8pG9LTXjxoXC7o-zrrF63ac6KuLddTNDnU";
const MY_URL = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComment = () => {
    fetch(MY_URL + this.props.id, {
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
    this.fetchComment();
  }

  render() {
    return (
      <div>
        <CommentList commArr={this.state.comments} />
        <AddComment id={this.props.id} />
      </div>
    );
  }
}

export default CommentArea;
