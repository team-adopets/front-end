import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./_store/index";

import "bootstrap/dist/css/bootstrap.min.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
