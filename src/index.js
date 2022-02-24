import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Nav from "./components/Nav.js";
import Avatar from "./components/Avatar.js";
import Contador from "./components/Contador.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Nav />
    <Avatar />
    <App />
    <Contador />
  </StrictMode>,
  rootElement
);
