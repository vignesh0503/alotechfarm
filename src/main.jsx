import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WebLayout from "./layout/WebLayout.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <WebLayout>
        <App />
      </WebLayout>
    </BrowserRouter>
  </StrictMode>
);
