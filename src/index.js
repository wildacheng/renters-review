import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./history";
import store from "./store";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./themeUtils"

ReactDOM.render(
      <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
      </Router>
    </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
