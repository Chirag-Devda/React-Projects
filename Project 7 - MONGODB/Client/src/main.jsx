import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import { theme } from "./theme/index.js";
import AuthProivder from "./provider/AuthProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProivder>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </AuthProivder>
    </Provider>
  </React.StrictMode>
);
