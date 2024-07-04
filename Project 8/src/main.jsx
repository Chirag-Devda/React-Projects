import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyStateProvider from "./context/data/MyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyStateProvider>
      <App />
    </MyStateProvider>
  </React.StrictMode>
);
