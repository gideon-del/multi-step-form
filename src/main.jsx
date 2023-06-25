import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/fonts/Ubuntu-Bold.ttf";
import "./assets/fonts/Ubuntu-Medium.ttf";
import "./assets/fonts/Ubuntu-Regular.ttf";
import PlanProvider from "./context/PlanContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlanProvider>
      <App />
    </PlanProvider>
  </React.StrictMode>
);
