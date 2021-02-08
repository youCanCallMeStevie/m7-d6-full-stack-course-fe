import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import NavBar from "./pages/NavBar"
import NotFound from "./pages/NotFound"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Switch>
          <Route path="/" component={HomePage} exact />{" "}
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesListPage} />
          <Route path="/article/:name" component={ArticlePage} />
          <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
