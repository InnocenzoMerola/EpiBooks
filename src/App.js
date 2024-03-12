import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavComp from "./components/MyNavComp";
import WelcomeComp from "./components/WelcomeComp";
import AllTheBooks from "./components/AllTheBooks";
import MyFooterComp from "./components/MyFooterComp";

function App() {
  return (
    <div>
      <MyNavComp />
      <WelcomeComp />
      <AllTheBooks />
      <MyFooterComp />
    </div>
  );
}

export default App;
