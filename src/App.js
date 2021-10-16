import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CategoryDetail from "./components/CategoryDetail/CategoryDetail";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:category/:catId">
            <CategoryDetail />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
