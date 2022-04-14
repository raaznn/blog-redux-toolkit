import "./index.css";
import React from "react";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
