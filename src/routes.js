import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
// import {Login, Signup, UserHome} from './components'

import HomePage from "./components";
// import ReviewForm from './components'
// import Blog from './components'
// import Register from './components'
// import Sign from './components'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/reviewform" component={ReviewForm} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/signin" component={SignIn} /> */}
      </Switch>
    );
  }
}

export default Routes;