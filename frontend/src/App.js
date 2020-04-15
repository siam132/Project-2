import React from "react";
import "./App.css";

import NavBar from "./Components/NavBar";

import Home from "./Components/Pages/Home/Home";
import SearchPage from "./Components/Pages/Search/SearchPage";
import HirePage from "./Components/Pages/HirePage/HirePage";
import UpdatePage from "./Components/Pages/UpdatePage/UpdatePage";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Search" component={SearchPage} />
          <Route path="/Hire" component={HirePage} />
          <Route path="/Modify/:id" component={UpdatePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
