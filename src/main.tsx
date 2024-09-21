import React from "react";
import ReactDOM from "react-dom";
import IndexPage from "./pages/index";
import { inDev } from "./utils/helpers";
import "./style.css";

ReactDOM.render(<IndexPage />, document.getElementById("app"));

// Hot module replacement
if (inDev() && module.hot) module.hot.accept();
