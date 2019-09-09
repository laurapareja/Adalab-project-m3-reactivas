import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.scss";
import App from "./components/App";
// import ResetButton from "./components/ResetButton.js";
// import UploadFile from "./components/UploadFile";
import * as serviceWorker from "./serviceWorker";

//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// IMPORTANTE!  tendremos que cambiar cualquier recurso http a https
