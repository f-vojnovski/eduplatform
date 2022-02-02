import "./App.css";
import Article from "./components/article/Article";
import Header from "./components/common/header";
import Sidebar from "./components/common/sidebar/Sidebar";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/about-page";
import { useState } from "react";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(true);


  const onMenuStatusChange = (isMenuVisible) => {
    setIsMenuVisible(isMenuVisible);
  }

  return (
    <Router>
      <div className="App">
        <Sidebar onMenuStatusChange = {onMenuStatusChange}/>
        <div className = {!isMenuVisible ? 'element-in-background' : ''}>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route path="/articles/:id">
                <Article />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
