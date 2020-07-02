import React, { Comoponent } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
// counter favoriable that is defined in a file called reducer.js
import counter from "./reducer";
import App from "./App";
import "./index.css";

var destination = document.querySelector("#container");

// Store
// initialize our redux store using createStore method that
// takes a reducer argument
var store = createStore(counter);
ReactDOM.render(
  // provide store as a prop to our Provider component
  // Provider comoponent is outermost component
  // Provider ensures every component has access to the Redux Store and related
  <Provider store={store}>
    <App />
  </Provider>,
  destination
);