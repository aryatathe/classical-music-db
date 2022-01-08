import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "@fontsource/el-messiri/latin-400.css";
import "@fontsource/el-messiri/latin-700.css";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
