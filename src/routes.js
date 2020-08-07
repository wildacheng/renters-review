import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
// import {Login, Signup, UserHome} from './components'

// import HomePage from "./components";
// import ReviewForm from './components'
import { Blog, HomePage, GoogleMap } from "./components";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/reviews" component={GoogleMap} />
        {/* <Route exact path="/reviewform" component={ReviewForm} /> */}
        <Route exact path="/blog" component={Blog} />
      </Switch>
    );
  }
}

export default Routes;
