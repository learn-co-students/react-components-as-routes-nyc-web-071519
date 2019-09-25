import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Messages from "./Messages";

ReactDOM.render(
  <Router>
    <div>
      <NavBar />

      <Route exact path="/" component={Home} />
      <Route path="/messages" component={Messages} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  </Router>,
  document.getElementById("root")
);
