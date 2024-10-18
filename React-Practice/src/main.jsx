import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./ThemeComponents/styles.css";
import { ThemeProvider } from "./ThemeComponents/context/ThemeProvider.jsx";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
