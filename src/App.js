import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import MyNavComp from "./components/MyNavComp";
import WelcomeComp from "./components/WelcomeComp";
// import AllTheBooks from "./components/AllTheBooks";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import MyFooterComp from "./components/MyFooterComp";

import fantasy from "./data/fantasy.json";
// import history from "./data/history.json";
// import horror from "./data/horror.json";
// import romance from "./data/romance.json";
// import scifi from "./data/scifi.json";
// fantasy = fantasy.slice(0, 20);
// history = history.slice(0, 20);
// horror = horror.slice(0, 20);
// romance = romance.slice(0, 20);
// scifi = scifi.slice(0, 20);
function App() {
  return (
    <div className="big-div">
      <MyNavComp />
      <WelcomeComp />

      <Container fluid className="cont">
        <Row className="row-gap-4 py-2">
          {/* <SingleBook book={fantasy[0]} /> */}
          <BookList libraryArr={fantasy} />
        </Row>
      </Container>
      {/* <AllTheBooks /> */}
      <MyFooterComp />
    </div>
  );
}

export default App;
