import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme1 from "./config/theme.config";
import "../src/config/styles.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post['Content-Type'] = "application/json";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme1}>
      <Provider store={store}>
        {/* theme coming from theme.config.js */}
        <ColorModeScript />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
