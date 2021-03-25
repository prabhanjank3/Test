import React from "react";
import ReactDOM from "react-dom";
import TestContainer from "./container/TestContainer";
import TestContainer_2 from "./container/TestContainer-2";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import "./styles.css";
import UserInfo from "./container/UserInfo";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./container/Authentication/LoginPage";
const rootElement = document.getElementById("root");
const store = createStore(reducer);
const routing = (
  <Router>
    <Provider store={store}>
      <Route exact path="/" component={TestContainer} />
      <Route path="/2" component={TestContainer_2} />
      <Route path="/login" component={LoginPage} />
      <Route path="/user/:id" component={UserInfo} />
    </Provider>
  </Router>
);

ReactDOM.render(routing, rootElement);
