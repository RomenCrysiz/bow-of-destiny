import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // <-- make sure it matches the filename exactly
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
