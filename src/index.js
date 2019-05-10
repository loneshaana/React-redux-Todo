import ReactDOM from "react-dom";
import React from "react";
import Todo from "./App";
import configureStore from "./configureStore";

const store = configureStore();

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo store={store} />, rootElement);
