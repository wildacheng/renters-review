import React from "react";
// import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { Blog, HomePage, GoogleMap, ReviewForm } from "./components";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/reviews" component={GoogleMap} />
        <Route exact path="/writeareview" component={ReviewForm} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    );
  }
}

export default Routes;
