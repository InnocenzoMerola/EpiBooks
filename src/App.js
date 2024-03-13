import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import MyNavComp from "./components/MyNavComp";
import WelcomeComp from "./components/WelcomeComp";
import fantasy from "./data/fantasy.json";
// import history from "./data/history.json";
// import horror from "./data/horror.json";
// import romance from "./data/romance.json";
// import scifi from "./data/scifi.json";

// import AllTheBooks from "./components/AllTheBooks";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import MyFooterComp from "./components/MyFooterComp";

function App() {
  return (
    <div>
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
