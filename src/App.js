import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CategoryDetail from "./components/CategoryDetail/CategoryDetail";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Home />
      <Switch>
        <Route path="/categorydetail/:id">
          <CategoryDetail />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
