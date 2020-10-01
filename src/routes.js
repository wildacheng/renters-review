import React from "react";
import { Route, Switch } from "react-router-dom";

import { Blog, HomePage, Reviews, MyReviews, SearchForm, ReviewForm } from "./components";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/myreviews" component={MyReviews} />
        <Route exact path="/searchform" component={SearchForm} />
        <Route exact path="/writeareview" component={ReviewForm} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    );
  }
}

export default Routes;
