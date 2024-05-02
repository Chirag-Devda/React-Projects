import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'); */
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;padding: 0;box-sizing:border-box;
    }
   body{
    background-color:#323343;
    min-height: 100vh;
    color: white;
    font-family: "Inter", sans-serif;;
   }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
