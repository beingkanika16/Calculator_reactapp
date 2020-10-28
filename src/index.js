import React from "react";
import ReactDOM from "react-dom";
import Tbl from "./Tbl";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <Tbl className="cls" />
  </>,
  rootElement
);
