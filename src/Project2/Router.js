import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from './Footer'

const Router = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
        
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
};
export default Router;
