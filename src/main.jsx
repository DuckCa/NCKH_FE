import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx"; // Import component chính
import "./index.css";

// import { MaterialTailwindControllerProvider } from "@/context/";
import { AuthProvider } from "@/context";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
  // </React.StrictMode>
);
